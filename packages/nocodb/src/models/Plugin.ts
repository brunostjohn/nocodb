import type { PluginType } from 'nocodb-sdk';
import Noco from '~/Noco';
import NocoCache from '~/cache/NocoCache';
import { extractProps } from '~/helpers/extractProps';
import {
  CacheGetType,
  CacheScope,
  MetaTable,
  RootScopes,
} from '~/utils/globals';

export default class Plugin implements PluginType {
  id?: string;
  title?: string;
  description?: string;
  active?: boolean;
  rating?: number;
  version?: string;
  docs?: string;
  status?: string;
  status_details?: string;
  logo?: string;
  icon?: string;
  tags?: string;
  category?: string;
  input_schema?: string;
  input?: string | null;
  creator?: string;
  creator_website?: string;
  price?: string;

  constructor(audit: Partial<PluginType>) {
    Object.assign(this, audit);
  }

  public static async get(pluginId: string, ncMeta = Noco.ncMeta) {
    let plugin =
      pluginId &&
      (await NocoCache.get(
        `${CacheScope.PLUGIN}:${pluginId}`,
        CacheGetType.TYPE_OBJECT,
      ));
    if (!plugin) {
      plugin = await ncMeta.metaGet(
        RootScopes.ROOT,
        RootScopes.ROOT,
        MetaTable.PLUGIN,
        pluginId,
      );
      await NocoCache.set(`${CacheScope.PLUGIN}:${pluginId}`, plugin);
    }
    return plugin && new Plugin(plugin);
  }

  static async list(ncMeta = Noco.ncMeta) {
    const cachedList = await NocoCache.getList(CacheScope.PLUGIN, []);
    let { list: pluginList } = cachedList;
    const { isNoneList } = cachedList;
    if (!isNoneList && !pluginList.length) {
      pluginList = await ncMeta.metaList2(
        RootScopes.ROOT,
        RootScopes.ROOT,
        MetaTable.PLUGIN,
      );
      await NocoCache.setList(CacheScope.PLUGIN, [], pluginList);
    }
    return pluginList;
  }

  static async count(ncMeta = Noco.ncMeta): Promise<number> {
    return (await ncMeta.knex(MetaTable.PLUGIN).count('id', { as: 'count' }))
      ?.count;
  }

  public static async update(pluginId: string, plugin: Partial<PluginType>) {
    const updateObj = extractProps(plugin, ['input', 'active']);

    if (updateObj.input && typeof updateObj.input === 'object') {
      updateObj.input = JSON.stringify(updateObj.input);
    }

    // set meta
    await Noco.ncMeta.metaUpdate(
      RootScopes.ROOT,
      RootScopes.ROOT,
      MetaTable.PLUGIN,
      updateObj,
      pluginId,
    );

    await NocoCache.update(`${CacheScope.PLUGIN}:${pluginId}`, updateObj);
    await NocoCache.update(`${CacheScope.PLUGIN}:${plugin.title}`, updateObj);

    return this.get(pluginId);
  }

  public static async isPluginActive(title: string) {
    return !!(await this.getPluginByTitle(title))?.active;
  }

  /**
   * get plugin by title
   */
  public static async getPluginByTitle(title: string, ncMeta = Noco.ncMeta) {
    let plugin =
      title &&
      (await NocoCache.get(
        `${CacheScope.PLUGIN}:${title}`,
        CacheGetType.TYPE_OBJECT,
      ));
    if (!plugin) {
      plugin = await ncMeta.metaGet(
        RootScopes.ROOT,
        RootScopes.ROOT,
        MetaTable.PLUGIN,
        title,
        'title',
      );
      await NocoCache.set(`${CacheScope.PLUGIN}:${title}`, plugin);
    }
    return plugin;
  }
}
