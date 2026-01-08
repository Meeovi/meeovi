import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'

export const useGiftCertificates = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getGiftCertificates = async (customerId?: string) => {
    return await client.request(
      readItems('gift_certificates', {
        filter: customerId ? { customer_id: { _eq: customerId } } : {},
        fields: ['*', 'customer.*']
      })
    )
  }

  const createGiftCertificate = async (data: {
    amount: number
    recipient_email: string
    sender_name?: string
    message?: string
  }) => {
    const code = Math.random().toString(36).substring(2, 15).toUpperCase()
    return await client.request(createItem('gift_certificates', { ...data, code, status: 'active' }))
  }

  const validateGiftCertificate = async (code: string) => {
    const certificates = await client.request(
      readItems('gift_certificates', {
        filter: { code: { _eq: code }, status: { _eq: 'active' } }
      })
    )
    return certificates.length > 0 ? certificates[0] : null
  }

  const redeemGiftCertificate = async (code: string, amount: number) => {
    const certificate = await validateGiftCertificate(code)
    if (!certificate || certificate.balance < amount) return null
    
    const newBalance = certificate.balance - amount
    await client.request(updateItem('gift_certificates', certificate.id, { 
      balance: newBalance,
      status: newBalance === 0 ? 'used' : 'active'
    }))
    
    return { certificate, amountUsed: amount, remainingBalance: newBalance }
  }

  return { getGiftCertificates, createGiftCertificate, validateGiftCertificate, redeemGiftCertificate }
}