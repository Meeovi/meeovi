import { createDirectus, rest, readItems, createItem, updateItem, deleteItem } from '@directus/sdk'

export const useDiscounts = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getDiscounts = async (active = true) => {
    return await client.request(
      readItems('discounts', {
        filter: active ? { status: { _eq: 'active' } } : {},
        fields: ['*', 'discount_rules.*']
      })
    )
  }

  const createDiscount = async (discountData: any) => {
    return await client.request(createItem('discounts', discountData))
  }

  const updateDiscount = async (id: string, data: any) => {
    return await client.request(updateItem('discounts', id, data))
  }

  const deleteDiscount = async (id: string) => {
    return await client.request(deleteItem('discounts', id))
  }

  const applyDiscount = async (code: string, cartTotal: number) => {
    const discounts = await client.request(
      readItems('discounts', {
        filter: { code: { _eq: code }, status: { _eq: 'active' } }
      })
    )
    
    if (!discounts.length) return null
    
    const discount = discounts[0]
    const discountAmount = discount.type === 'percentage' 
      ? cartTotal * (discount.value / 100)
      : discount.value
    
    return { discount, discountAmount }
  }

  return { getDiscounts, createDiscount, updateDiscount, deleteDiscount, applyDiscount }
}