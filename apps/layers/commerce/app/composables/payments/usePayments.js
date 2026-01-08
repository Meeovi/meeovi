import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'

export const usePayments = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getPaymentMethods = async (active = true) => {
    return await client.request(
      readItems('payment_methods', {
        filter: active ? { status: { _eq: 'active' } } : {}
      })
    )
  }

  const processPayment = async (paymentData) => {
    return await client.request(createItem('payments', {
      ...paymentData,
      status: 'pending',
      created_at: new Date()
    }))
  }

  const updatePaymentStatus = async (paymentId, status) => {
    return await client.request(updateItem('payments', paymentId, { 
      status,
      updated_at: new Date()
    }))
  }

  const getPaymentHistory = async (customerId) => {
    return await client.request(
      readItems('payments', {
        filter: { customer_id: { _eq: customerId } },
        sort: ['-created_at'],
        fields: ['*', 'order.*']
      })
    )
  }

  const refundPayment = async (paymentId, amount, reason) => {
    const refund = await client.request(createItem('refunds', {
      payment_id: paymentId,
      amount,
      reason,
      status: 'pending'
    }))
    
    await updatePaymentStatus(paymentId, 'refunded')
    return refund
  }

  const validatePayment = async (paymentData) => {
    // Basic validation logic
    const required = ['amount', 'currency', 'payment_method']
    const missing = required.filter(field => !paymentData[field])
    
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`)
    }
    
    if (paymentData.amount <= 0) {
      throw new Error('Payment amount must be greater than 0')
    }
    
    return true
  }

  return { 
    getPaymentMethods, 
    processPayment, 
    updatePaymentStatus, 
    getPaymentHistory, 
    refundPayment, 
    validatePayment 
  }
}