import { createDirectus, rest, readItems, updateItem } from '@directus/sdk'

export const useRules = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getPricingRules = async () => {
    return await client.request(
      readItems('pricing_rules', {
        filter: { status: { _eq: 'active' } },
        sort: ['priority']
      })
    )
  }

  const getPromotionRules = async () => {
    return await client.request(
      readItems('promotion_rules', {
        filter: { 
          _and: [
            { status: { _eq: 'active' } },
            { start_date: { _lte: new Date() } },
            { end_date: { _gte: new Date() } }
          ]
        }
      })
    )
  }

  const applyRule = (product, rule) => {
    if (rule.type === 'percentage') {
      return product.price * (1 - rule.discount / 100)
    }
    return product.price - rule.discount
  }

  return { getPricingRules, getPromotionRules, applyRule }
}