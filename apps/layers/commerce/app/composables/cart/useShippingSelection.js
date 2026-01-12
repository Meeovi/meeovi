import { ref, watch } from 'vue'
import { useNuxtApp } from '#imports'
import { useCartStore } from '~/stores/cart'

export function useShippingSelection(initial = null) {
  const shippingOptions = ref([])
  const selected = ref(initial)
  const loading = ref(false)

  const { $directus, $readItems } = useNuxtApp()
  const cartStore = useCartStore()

  async function load() {
    loading.value = true
    try {
      const res = await $directus.request($readItems('shipment_providers', {
        fields: ['*'],
        limit: 100
      }))

      const items = Array.isArray(res) ? res : (res && (res.data || res.items)) || []
      shippingOptions.value = items

      // Prefer shipping selection stored on the cart (cart is authoritative)
      try {
        const cart = cartStore?.cart
        const cartMethodId = cart?.shipping_method_id || cart?.shipping_method || null
        if (cartMethodId) {
          const exists = shippingOptions.value.find(s => s.id === cartMethodId)
          if (exists) {
            selected.value = cartMethodId
            return
          }
        }
      } catch (e) {
        // ignore cart read errors and fall back to initial/default
      }

      if (initial) {
        const exists = shippingOptions.value.find(s => s.id === initial)
        if (exists) {
          selected.value = initial
          return
        }
      }

      // Auto-select the best option (lowest numeric price/cost)
      const best = shippingOptions.value.slice().sort((a, b) => {
        const aCost = Number((a && (a.price ?? a.cost)) ?? Infinity)
        const bCost = Number((b && (b.price ?? b.cost)) ?? Infinity)
        return aCost - bCost
      })[0]

      if (best) selected.value = best.id
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Error loading shipment_providers', e)
    } finally {
      loading.value = false
    }
  }

  watch(selected, async (val) => {
    const option = shippingOptions.value.find((s) => s.id === val) || null
    if (cartStore && cartStore.setShippingOption) {
      try {
        await cartStore.setShippingOption(option)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Failed to persist shipping to cart store', e)
      }
    }
  })

  function selectById(id) {
    selected.value = id
  }

  return {
    shippingOptions,
    selected,
    loading,
    load,
    selectById
  }
}
