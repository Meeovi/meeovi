import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'
import { shippingRegistry } from '../providers/registry'
import type { ShippingAddress, ShippingPackage } from '../providers/base'

export const useRealTimeShipping = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const rates = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const calculateRates = async (
    from: ShippingAddress,
    to: ShippingAddress,
    packages: ShippingPackage[],
    providers: string[] = ['ups']
  ) => {
    isLoading.value = true
    error.value = null
    rates.value = []

    try {
      const allRates = []
      
      for (const providerName of providers) {
        const provider = shippingRegistry.get(providerName)
        if (provider) {
          try {
            const providerRates = await provider.getRates(from, to, packages)
            allRates.push(...providerRates)
          } catch (err) {
            console.error(`Error from ${providerName}:`, err)
          }
        }
      }

      rates.value = allRates.sort((a, b) => a.cost - b.cost)
      
      // Cache rates in Directus
      await client.request(createItem('shipping_rate_cache', {
        from_zip: from.zip,
        to_zip: to.zip,
        packages: JSON.stringify(packages),
        rates: JSON.stringify(rates.value),
        expires_at: new Date(Date.now() + 30 * 60 * 1000) // 30 min cache
      }))
      
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  const getCachedRates = async (from: ShippingAddress, to: ShippingAddress, packages: ShippingPackage[]) => {
    const cached = await client.request(
      readItems('shipping_rate_cache', {
        filter: {
          from_zip: { _eq: from.zip },
          to_zip: { _eq: to.zip },
          packages: { _eq: JSON.stringify(packages) },
          expires_at: { _gt: new Date() }
        },
        limit: 1
      })
    )

    return cached.length > 0 ? JSON.parse(cached[0].rates) : null
  }

  const watchRates = (callback: (rates: any[]) => void) => {
    watch(rates, callback, { immediate: true })
  }

  return {
    rates: readonly(rates),
    isLoading: readonly(isLoading),
    error: readonly(error),
    calculateRates,
    getCachedRates,
    watchRates
  }
}