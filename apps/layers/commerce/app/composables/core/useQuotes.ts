import { createDirectus, rest, readItems, createItem, updateItem, deleteItem } from '@directus/sdk'

export const useQuotes = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getQuotes = async (customerId?: string) => {
    return await client.request(
      readItems('quotes', {
        filter: customerId ? { customer_id: { _eq: customerId } } : {},
        fields: ['*', 'quote_items.*', 'customer.*']
      })
    )
  }

  const createQuote = async (quoteData: any) => {
    return await client.request(createItem('quotes', quoteData))
  }

  const updateQuote = async (id: string, data: any) => {
    return await client.request(updateItem('quotes', id, data))
  }

  const deleteQuote = async (id: string) => {
    return await client.request(deleteItem('quotes', id))
  }

  const convertToOrder = async (quoteId: string) => {
    return await client.request(updateItem('quotes', quoteId, { status: 'converted' }))
  }

  return { getQuotes, createQuote, updateQuote, deleteQuote, convertToOrder }
}