import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useGiftCards = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const validateGiftCard = async (code) => {
    return await client.request(
      readItems('gift_cards', {
        filter: {
          _and: [
            { code: { _eq: code } },
            { status: { _eq: 'active' } },
            { balance: { _gt: 0 } }
          ]
        }
      })
    )
  }

  const applyGiftCard = async (code, amount) => {
    const giftCard = await validateGiftCard(code)
    if (giftCard.length > 0) {
      const card = giftCard[0]
      const newBalance = card.balance - amount
      await client.request(
        updateItem('gift_cards', card.id, { balance: newBalance })
      )
      return { success: true, remainingBalance: newBalance }
    }
    return { success: false, error: 'Invalid gift card' }
  }

  const createGiftCard = async (giftCardData) => {
    return await client.request(
      createItem('gift_cards', giftCardData)
    )
  }

  return { validateGiftCard, applyGiftCard, createGiftCard }
}