import { createDirectus, rest, readItems } from '@directus/sdk'

export const useCrossSelling = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getCrossellProducts = async (productId) => {
    return await client.request(
      readItems('product_crosssells', {
        filter: { product_id: { _eq: productId } },
        fields: ['*', 'crosssell_product.*']
      })
    )
  }

  const getFrequentlyBoughtTogether = async (productId) => {
    return await client.request(
      readItems('product_bundles', {
        filter: { 
          _and: [
            { main_product_id: { _eq: productId } },
            { type: { _eq: 'frequently_bought' } }
          ]
        },
        fields: ['*', 'bundle_products.*']
      })
    )
  }

  const calculateBundleDiscount = (products, bundlePrice) => {
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0)
    return totalPrice - bundlePrice
  }

  return { getCrossellProducts, getFrequentlyBoughtTogether, calculateBundleDiscount }
}