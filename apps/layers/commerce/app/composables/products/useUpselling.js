import { createDirectus, rest, readItems, readItem } from '@directus/sdk'

export const useUpselling = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getUpsellProducts = async (productId) => {
    return await client.request(
      readItems('product_upsells', {
        filter: { product_id: { _eq: productId } },
        fields: ['*', 'upsell_product.*']
      })
    )
  }

  const getUpsellRules = async () => {
    return await client.request(
      readItems('upsell_rules', {
        filter: { status: { _eq: 'active' } },
        sort: ['priority']
      })
    )
  }

  const calculateUpsellValue = (basePrice, upsellPrice) => {
    return upsellPrice - basePrice
  }

  return { getUpsellProducts, getUpsellRules, calculateUpsellValue }
}