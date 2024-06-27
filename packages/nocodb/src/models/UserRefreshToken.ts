import dayjs from 'dayjs';
import Noco from '~/Noco';
import { extractProps } from '~/helpers/extractProps';
import { MetaTable, RootScopes } from '~/utils/globals';
import { parseMetaProp, stringifyMetaProp } from '~/utils/modelUtils';

const NC_REFRESH_TOKEN_EXP_IN_DAYS =
  parseInt(process.env.NC_REFRESH_TOKEN_EXP_IN_DAYS, 10) || 90;

// throw error if user provided invalid value
if (NC_REFRESH_TOKEN_EXP_IN_DAYS <= 0) {
  throw new Error('NC_REFRESH_TOKEN_EXP_IN_DAYS must be a positive number');
}

export default class UserRefreshToken {
  fk_user_id: string;
  token: string;
  expires_at: any;
  meta?: any;
  created_at?: any;
  updated_at?: any;

  public static async insert(
    userRefreshToken: Partial<UserRefreshToken>,
    ncMeta = Noco.ncMeta,
  ) {
    // clear old invalid tokens before inserting new one
    // todo: verify the populated sql query
    await ncMeta.metaDelete(
      RootScopes.ROOT,
      RootScopes.ROOT,
      MetaTable.USER_REFRESH_TOKENS,
      {
        fk_user_id: userRefreshToken.fk_user_id,
      },
      {
        expires_at: {
          lt: dayjs().toDate(),
        },
      },
    );

    const insertObj = extractProps(userRefreshToken, [
      'fk_user_id',
      'token',
      'expires_at',
      'meta',
    ]);

    // set expiry based on the env or default value
    if (!('expires_at' in insertObj)) {
      insertObj.expires_at = dayjs()
        .add(NC_REFRESH_TOKEN_EXP_IN_DAYS, 'day')
        .toDate();
    }

    if ('meta' in insertObj) {
      insertObj.meta = stringifyMetaProp(insertObj);
    }

    await ncMeta.metaInsert2(
      RootScopes.ROOT,
      RootScopes.ROOT,
      MetaTable.USER_REFRESH_TOKENS,
      insertObj,
      true,
    );
    return insertObj;
  }

  // todo: caching
  static async updateOldToken(
    oldToken: string,
    newToken: string,
    ncMeta = Noco.ncMeta,
  ) {
    return await ncMeta.metaUpdate(
      RootScopes.ROOT,
      RootScopes.ROOT,
      MetaTable.USER_REFRESH_TOKENS,
      {
        token: newToken,
        expires_at: dayjs().add(NC_REFRESH_TOKEN_EXP_IN_DAYS, 'day').toDate(),
      },
      {
        token: oldToken,
      },
    );
  }

  static async deleteToken(token: string, ncMeta = Noco.ncMeta) {
    return await ncMeta.metaDelete(
      RootScopes.ROOT,
      RootScopes.ROOT,
      MetaTable.USER_REFRESH_TOKENS,
      {
        token,
      },
    );
  }

  static async deleteAllUserToken(userId: string, ncMeta = Noco.ncMeta) {
    return await ncMeta.metaDelete(
      RootScopes.ROOT,
      RootScopes.ROOT,
      MetaTable.USER_REFRESH_TOKENS,
      {
        fk_user_id: userId,
      },
    );
  }

  static async getByToken(
    token: string,
    ncMeta = Noco.ncMeta,
  ): Promise<UserRefreshToken> {
    const userToken = await ncMeta.metaGet(
      RootScopes.ROOT,
      RootScopes.ROOT,
      MetaTable.USER_REFRESH_TOKENS,
      token,
      'token',
    );

    if (!userToken) return null;

    userToken.meta = parseMetaProp(userToken);

    return userToken;
  }
}
