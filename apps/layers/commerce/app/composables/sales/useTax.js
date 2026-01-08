import { createDirectus, rest, readItems } from '@directus/sdk'

export const useTax = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getTaxRates = async (region, productType) => {
    return await client.request(
      readItems('tax_rates', {
        filter: {
          _and: [
            { region: { _eq: region } },
            { product_type: { _eq: productType } },
            { status: { _eq: 'active' } }
          ]
        }
      })
    )
  }

  const calculateTax = (price, taxRate) => {
    return price * (taxRate / 100)
  }

  const getTaxClasses = async () => {
    return await client.request(
      readItems('tax_classes', {
        filter: { status: { _eq: 'active' } }
      })
    )
  }

  return { getTaxRates, calculateTax, getTaxClasses }
}