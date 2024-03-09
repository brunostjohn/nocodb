import useVuelidate from '@vuelidate/core'
import { helpers, minLength, required } from '@vuelidate/validators'
import dayjs from 'dayjs'
import type { Ref } from 'vue'
import type {
  BoolType,
  ColumnType,
  FormColumnType,
  FormType,
  LinkToAnotherRecordType,
  SelectOptionsType,
  StringOrNullType,
  TableType,
} from 'nocodb-sdk'
import { ErrorMessages, RelationTypes, UITypes, isLinksOrLTAR, isSystemColumn, isVirtualCol } from 'nocodb-sdk'
import { isString } from '@vue/shared'
import { filterNullOrUndefinedObjectProperties } from '~/helpers/parsers/parserHelpers'
import {
  PreFilledMode,
  SharedViewPasswordInj,
  computed,
  createEventHook,
  extractSdkResponseErrorMsg,
  isNumericFieldType,
  message,
  parseProp,
  provide,
  ref,
  storeToRefs,
  useApi,
  useBase,
  useI18n,
  useInjectionState,
  useMetas,
  useProvideSmartsheetRowStore,
  useViewsStore,
  watch,
} from '#imports'
import type { SharedViewMeta } from '#imports'

const [useProvideSharedFormStore, useSharedFormStore] = useInjectionState((sharedViewId: string) => {
  const progress = ref(false)
  const notFound = ref(false)
  const submitted = ref(false)
  const passwordDlg = ref(false)
  const password = ref<string | null>(null)
  const passwordError = ref<string | null>(null)
  const secondsRemain = ref(0)

  const { sharedView } = storeToRefs(useViewsStore())

  provide(SharedViewPasswordInj, password)

  const sharedFormView = ref<FormType>()
  const meta = ref<TableType>()
  const columns = ref<
    (ColumnType & {
      required?: BoolType
      show?: BoolType
      label?: StringOrNullType
      enable_scanner?: BoolType
      read_only?: boolean
    })[]
  >()
  const sharedViewMeta = ref<SharedViewMeta>({})
  const formResetHook = createEventHook<void>()

  const { api, isLoading } = useApi()

  const { metas, setMeta } = useMetas()

  const baseStore = useBase()
  const { base, sqlUis } = storeToRefs(baseStore)

  const basesStore = useBases()

  const { basesUser } = storeToRefs(basesStore)

  const { t } = useI18n()

  const route = useRoute()

  const formState = ref<Record<string, any>>({})

  const { state: additionalState } = useProvideSmartsheetRowStore(
    meta as Ref<TableType>,
    ref({
      row: formState,
      rowMeta: { new: true },
      oldRow: {},
    }),
  )

  const fieldRequired = (fieldName = 'This field') =>
    helpers.withMessage(t('msg.error.fieldRequired', { value: fieldName }), required)

  const formColumns = computed(() =>
    columns.value?.filter((c) => c.show).filter((col) => !isSystemColumn(col) && (!isVirtualCol(col) || isLinksOrLTAR(col.uidt))),
  )

  const loadSharedView = async () => {
    passwordError.value = null

    try {
      const viewMeta = await api.public.sharedViewMetaGet(sharedViewId, {
        headers: {
          'xc-password': password.value,
        },
      })

      passwordDlg.value = false

      sharedView.value = viewMeta
      sharedFormView.value = viewMeta.view
      meta.value = viewMeta.model

      const fieldById = (viewMeta.columns || []).reduce(
        (o: Record<string, any>, f: Record<string, any>) => ({
          ...o,
          [f.fk_column_id]: f,
        }),
        {} as Record<string, FormColumnType>,
      )

      columns.value = viewMeta.model?.columns?.map((c) => ({
        ...c,
        meta: { ...parseProp(fieldById[c.id].meta), ...parseProp(c.meta) },
        description: fieldById[c.id].description,
      }))

      const _sharedViewMeta = (viewMeta as any).meta
      sharedViewMeta.value = isString(_sharedViewMeta) ? JSON.parse(_sharedViewMeta) : _sharedViewMeta

      await setMeta(viewMeta.model)

      // if base is not defined then set it with an object containing source
      if (!base.value?.sources)
        baseStore.setProject({
          sources: [
            {
              id: viewMeta.source_id,
              type: viewMeta.client,
            },
          ],
        })

      const relatedMetas = { ...viewMeta.relatedMetas }

      Object.keys(relatedMetas).forEach((key) => setMeta(relatedMetas[key]))

      if (viewMeta.users) {
        basesUser.value.set(viewMeta.base_id, viewMeta.users)
      }

      handlePreFillForm()
    } catch (e: any) {
      if (e.response && e.response.status === 404) {
        notFound.value = true
      } else if ((await extractSdkResponseErrorMsg(e)) === ErrorMessages.INVALID_SHARED_VIEW_PASSWORD) {
        passwordDlg.value = true

        if (password.value && password.value !== '') passwordError.value = 'Something went wrong. Please check your credentials.'
      }
    }
  }

  const validators = computed(() => {
    const obj: Record<string, Record<string, any>> = {
      localState: {},
      virtual: {},
    }

    if (!formColumns.value) return obj

    for (const column of formColumns.value) {
      if (
        !isVirtualCol(column) &&
        ((column.rqd && !column.cdf) || (column.pk && !(column.ai || column.cdf)) || column.required)
      ) {
        obj.localState[column.title!] = { required: fieldRequired() }
      } else if (
        isLinksOrLTAR(column) &&
        column.colOptions &&
        (column.colOptions as LinkToAnotherRecordType).type === RelationTypes.BELONGS_TO
      ) {
        const col = columns.value?.find((c) => c.id === (column?.colOptions as LinkToAnotherRecordType)?.fk_child_column_id)

        if ((col && col.rqd && !col.cdf) || column.required) {
          if (col) {
            obj.virtual[column.title!] = { required: fieldRequired() }
          }
        }
      } else if (isVirtualCol(column) && column.required) {
        obj.virtual[column.title!] = {
          minLength: minLength(1),
          required: fieldRequired(),
        }
      }
    }

    return obj
  })

  const v$ = useVuelidate(
    validators,
    computed(() => ({ localState: formState.value, virtual: additionalState.value })),
  )

  const submitForm = async () => {
    try {
      if (!(await v$.value?.$validate())) {
        message.error(t('msg.error.someOfTheRequiredFieldsAreEmpty'))
        return
      }

      progress.value = true
      const data: Record<string, any> = { ...formState.value, ...additionalState.value }
      const attachment: Record<string, any> = {}

      /** find attachments in form data */
      for (const col of metas.value?.[sharedView.value?.fk_model_id as string]?.columns) {
        if (col.uidt === UITypes.Attachment) {
          if (data[col.title]) {
            attachment[`_${col.title}`] = data[col.title].map((item: { file: File }) => item.file)
          }
        }
      }

      const filtedData = filterNullOrUndefinedObjectProperties({
        data,
        ...attachment,
      })

      await api.public.dataCreate(sharedView.value!.uuid!, filtedData, {
        headers: {
          'xc-password': password.value,
        },
      })

      submitted.value = true
      progress.value = false
    } catch (e: any) {
      console.log(e)
      await message.error(await extractSdkResponseErrorMsg(e))
    }
    progress.value = false
  }

  const clearForm = async () => {
    formResetHook.trigger()

    additionalState.value = {}
    formState.value = {}
    v$.value?.$reset()
  }

  function handlePreFillForm() {
    if (Object.keys(route.query).length && sharedViewMeta.value.preFilledMode !== PreFilledMode.Disabled) {
      columns.value = columns.value?.map((c) => {
        if (
          !c.title ||
          !route.query?.[c.title] ||
          isSystemColumn(c) ||
          isVirtualCol(c) ||
          // (isVirtualCol(c) && !isLinksOrLTAR(c)) || // Todo: Enable this after linksOrLTAR prefill supported
          isAttachment(c)
        ) {
          return c
        }
        const preFillValue = getPreFillValue(c, decodeURIComponent(route.query?.[c.title] as string).trim())
        if (preFillValue !== undefined) {
          // Prefill form state
          formState.value[c.title] = preFillValue

          // Update column
          switch (sharedViewMeta.value.preFilledMode) {
            case PreFilledMode.Hidden: {
              c.show = false
              break
            }
            case PreFilledMode.Locked: {
              c.read_only = true
              break
            }
          }
        }

        return c
      })
    }
  }

  function getColAbstractType(c: ColumnType) {
    return (c?.source_id ? sqlUis.value[c?.source_id] : Object.values(sqlUis.value)[0]).getAbstractType(c)
  }

  function getPreFillValue(c: ColumnType, value: string) {
    let preFillValue: any
    switch (c.uidt) {
      case UITypes.SingleSelect:
      case UITypes.MultiSelect:
      case UITypes.User: {
        const limitOptions = (parseProp(c.meta).isLimitOption ? parseProp(c.meta).limitOptions || [] : []).reduce((ac, op) => {
          if (op?.id) {
            ac[op.id] = op
          }
          return ac
        }, {})

        const queryOptions = value.split(',')

        let options: string[] = []

        if ([UITypes.SingleSelect, UITypes.MultiSelect].includes(c.uidt as UITypes)) {
          options = ((c.colOptions as SelectOptionsType)?.options || [])
            .filter((op) => {
              if (
                op?.id &&
                op?.title &&
                queryOptions.includes(op.title) &&
                (limitOptions[op.id]
                  ? limitOptions[op.id]?.show
                  : parseProp(c.meta).isLimitOption
                  ? !(parseProp(c.meta).limitOptions || []).length
                  : true)
              ) {
                return true
              }
              return false
            })
            .map((op) => op.title as string)

          if (options.length) {
            preFillValue = c.uidt === UITypes.SingleSelect ? options[0] : options.join(',')
          }
        } else {
          options = (meta.value?.base_id ? basesUser.value.get(meta.value.base_id) || [] : [])
            .filter((user) => {
              if (
                user?.id &&
                user?.email &&
                (queryOptions.includes(user.email) || queryOptions.includes(user.id)) &&
                (limitOptions[user.id]
                  ? limitOptions[user.id]?.show
                  : parseProp(c.meta).isLimitOption
                  ? !(parseProp(c.meta).limitOptions || []).length
                  : true)
              ) {
                return true
              }
              return false
            })
            .map((user) => user.email)

          if (options.length) {
            preFillValue = !parseProp(c.meta)?.is_multi ? options[0] : options.join(',')
          }
        }
        break
      }
      case UITypes.Checkbox: {
        if (['true', '1'].includes(value.toLowerCase())) {
          preFillValue = true
        } else if (['false', '0'].includes(value.toLowerCase())) {
          preFillValue = false
        }
        break
      }
      case UITypes.Rating: {
        if (!isNaN(Number(value))) {
          preFillValue = Number(value) > parseProp(c.meta).max ? parseProp(c.meta).max : Number(value)
        }
        break
      }
      case UITypes.URL: {
        if (parseProp(c.meta).validate) {
          if (isValidURL(value)) {
            preFillValue = value
          }
        } else {
          preFillValue = value
        }
        break
      }
      case UITypes.Year: {
        if (/^\d+$/.test(value)) {
          preFillValue = Number(value)
        }
        break
      }
      case UITypes.Date: {
        const parsedDate = dayjs(value)
        if ((parsedDate.isValid() && parsedDate.toISOString() === value) || dayjs(value, 'YYYY-MM-DD').isValid()) {
          preFillValue = dayjs(value).format('YYYY-MM-DD')
        }
        break
      }
      case UITypes.DateTime: {
        const parsedDateTime = dayjs(value)

        if (
          (parsedDateTime.isValid() && parsedDateTime.toISOString() === value) ||
          dayjs(value, 'YYYY-MM-DD HH:mm:ss').isValid()
        ) {
          preFillValue = dayjs(value).utc().format('YYYY-MM-DD HH:mm:ssZ')
        }
        break
      }
      case UITypes.Time: {
        let parsedTime = dayjs(value)

        if (!parsedTime.isValid()) {
          parsedTime = dayjs(value, 'HH:mm:ss')
        }
        if (!parsedTime.isValid()) {
          parsedTime = dayjs(`1999-01-01 ${value}`)
        }
        if (parsedTime.isValid()) {
          preFillValue = parsedTime.format(baseStore.isMysql(c.source_id) ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm:ssZ')
        }
        break
      }
      case UITypes.LinkToAnotherRecord:
      case UITypes.Links: {
        // Todo: create an api which will fetch query params records and then autofill records
        break
      }

      default: {
        if (isNumericFieldType(c, getColAbstractType(c))) {
          if (!isNaN(Number(value))) {
            preFillValue = Number(value)
          }
        } else {
          preFillValue = value
        }
      }
    }
    return preFillValue
  }

  /** reset form if show_blank_form is true */
  watch(submitted, (nextVal) => {
    if (nextVal && sharedFormView.value?.show_blank_form) {
      secondsRemain.value = 5
      const intvl = setInterval(() => {
        secondsRemain.value = secondsRemain.value - 1

        if (secondsRemain.value < 0) {
          submitted.value = false

          formResetHook.trigger()

          clearInterval(intvl)
        }
      }, 1000)
    }

    /** reset form state and validation */
    if (!nextVal) {
      additionalState.value = {}
      formState.value = {}
      v$.value?.$reset()
    }
  })

  watch(password, (next, prev) => {
    if (next !== prev && passwordError.value) passwordError.value = null
  })

  return {
    sharedView,
    sharedFormView,
    loadSharedView,
    columns,
    submitForm,
    clearForm,
    progress,
    meta,
    validators,
    v$,
    formColumns,
    formState,
    notFound,
    password,
    passwordError,
    submitted,
    secondsRemain,
    passwordDlg,
    isLoading,
    sharedViewMeta,
    onReset: formResetHook.on,
  }
}, 'expanded-form-store')

export { useProvideSharedFormStore }

export function useSharedFormStoreOrThrow() {
  const sharedFormStore = useSharedFormStore()

  if (sharedFormStore == null) throw new Error('Please call `useProvideSharedFormStore` on the appropriate parent component')

  return sharedFormStore
}
