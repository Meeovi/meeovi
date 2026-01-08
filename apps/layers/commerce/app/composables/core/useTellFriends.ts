import { createDirectus, rest, createItem, readItems } from '@directus/sdk'

export const useTellFriends = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const sendRecommendation = async (data: {
    sender_email: string
    recipient_emails: string[]
    product_id?: string
    message?: string
  }) => {
    return await client.request(createItem('friend_recommendations', data))
  }

  const getRecommendations = async (email?: string) => {
    return await client.request(
      readItems('friend_recommendations', {
        filter: email ? { sender_email: { _eq: email } } : {},
        fields: ['*', 'product.*']
      })
    )
  }

  const trackClick = async (recommendationId: string) => {
    return await client.request(createItem('recommendation_clicks', { recommendation_id: recommendationId }))
  }

  return { sendRecommendation, getRecommendations, trackClick }
}