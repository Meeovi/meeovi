import { createDirectus, rest, readItems, createItem, updateItem, deleteItem } from '@directus/sdk'

export const useOffers = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getOffers = async (type?: string) => {
    return await client.request(
      readItems('offers', {
        filter: type ? { type: { _eq: type }, status: { _eq: 'active' } } : { status: { _eq: 'active' } },
        fields: ['*', 'offer_products.*', 'offer_categories.*']
      })
    )
  }

  const createOffer = async (offerData: any) => {
    return await client.request(createItem('offers', offerData))
  }

  const updateOffer = async (id: string, data: any) => {
    return await client.request(updateItem('offers', id, data))
  }

  const deleteOffer = async (id: string) => {
    return await client.request(deleteItem('offers', id))
  }

  const getPersonalizedOffers = async (customerId: string) => {
    return await client.request(
      readItems('personalized_offers', {
        filter: { customer_id: { _eq: customerId }, status: { _eq: 'active' } },
        fields: ['*', 'offer.*']
      })
    )
  }

  const trackOfferView = async (offerId: string, customerId?: string) => {
    return await client.request(createItem('offer_views', { 
      offer_id: offerId, 
      customer_id: customerId,
      viewed_at: new Date()
    }))
  }

  return { getOffers, createOffer, updateOffer, deleteOffer, getPersonalizedOffers, trackOfferView }
}