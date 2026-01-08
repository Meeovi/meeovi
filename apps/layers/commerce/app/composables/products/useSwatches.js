import { createDirectus, rest, readItems } from '@directus/sdk'

export const useSwatches = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getProductSwatches = async (productId) => {
    return await client.request(
      readItems('product_swatches', {
        filter: { product_id: { _eq: productId } },
        fields: ['*', 'attribute.*']
      })
    )
  }

  const getSwatchTypes = async () => {
    return await client.request(
      readItems('swatch_types', {
        filter: { status: { _eq: 'active' } }
      })
    )
  }

  const formatSwatchValue = (swatch) => {
    return swatch.type === 'color' ? swatch.hex_value : swatch.image_url
  }

  return { getProductSwatches, getSwatchTypes, formatSwatchValue }
}