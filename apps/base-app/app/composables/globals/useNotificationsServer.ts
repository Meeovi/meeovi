import { ref, computed, unref } from 'vue'
import { useNuxtApp } from 'nuxt/app'
import { useAuth } from './useAuth';

// Prefer BetterAuth `useAuth()` when available
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authAny: any = (globalThis as any).$useAuth ?? (typeof useAuth !== 'undefined' ? useAuth() : null)

export default function useNotificationsServer(opts: { resource?: string; id?: string } = {}) {
  const resource = opts.resource ?? 'navigation'
  const id = opts.id ?? '77'

  const { $directus, $readNotifications } = useNuxtApp() as any

  const loading = ref(false)
  const itemsPerPage = ref(10)
  const currentPage = ref(1)
  const search = ref('')
  const headers = ref([
    { title: 'Title', key: 'title' },
    { title: 'Date', key: 'date' }
  ])

  const serverItemsRef = ref<any[]>([])
  const totalItemsRef = ref(0)

  async function loadItems(options: { page?: number; itemsPerPage?: number } = {}) {
    const page = options.page ?? currentPage.value
    const perPage = options.itemsPerPage ?? itemsPerPage.value
    currentPage.value = page
    itemsPerPage.value = perPage

    const recipientId = (authAny?.user ? unref(authAny.user)?.id || unref(authAny.user)?.name : (authAny?.session ? unref(authAny.session)?.user?.id || unref(authAny.session)?.user?.name : null))
    if (!recipientId) {
      serverItemsRef.value = []
      totalItemsRef.value = 0
      return
    }

    loading.value = true
    try {
      const offset = (page - 1) * perPage
      const q = search.value?.trim()

      const baseFilter = { recipient: { id: { _eq: `${recipientId}` } } }
      let filter: any = baseFilter
      if (q) {
        filter = {
          _and: [
            baseFilter,
            {
              _or: [
                { content: { _contains: q } },
                { type: { _contains: q } },
                { recipient: { first_name: { _contains: q } } },
                { recipient: { last_name: { _contains: q } } }
              ]
            }
          ]
        }
      }

      const resp = await $directus.request($readNotifications(resource, id, {
        fields: ['id', 'recipient.id', 'recipient.first_name', 'recipient.last_name', 'is_read', 'content', 'date_created', 'image.filename_disk', 'type'],
        filter,
        limit: perPage,
        offset
      }))

      const items = resp?.data ?? resp ?? []
      serverItemsRef.value = items.map((n: any) => ({
        id: n.id,
        title: n.content?.title ?? (typeof n.content === 'string' ? n.content : (n.type ?? 'Notification')),
        date: n.date_created ?? null,
        raw: n
      }))

      totalItemsRef.value = resp?.meta?.total_count ?? resp?.meta?.total ?? (offset + serverItemsRef.value.length)
    } finally {
      loading.value = false
    }
  }

  return {
    serverItems: computed(() => serverItemsRef.value),
    totalItems: computed(() => totalItemsRef.value),
    loading,
    itemsPerPage,
    currentPage,
    search,
    headers,
    loadItems
  }
}
