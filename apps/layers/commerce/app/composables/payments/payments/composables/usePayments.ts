import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'
import { paymentRegistry } from '../providers/registry'
import type { PaymentRequest, PaymentResponse, RefundRequest } from '../providers/base'

export const usePayments = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const processPayment = async (request: PaymentRequest, providerName = 'stripe'): Promise<PaymentResponse | null> => {
    const provider = paymentRegistry.get(providerName)
    if (!provider) return null

    try {
      const response = await provider.createPayment(request)
      
      // Save payment record to Directus
      await client.request(createItem('payments', {
        id: response.id,
        order_id: request.orderId,
        customer_id: request.customerId,
        provider: providerName,
        amount: response.amount,
        currency: response.currency,
        status: response.status,
        transaction_id: response.transactionId,
        client_secret: response.clientSecret,
        metadata: JSON.stringify(request.metadata || {}),
        created_at: new Date()
      }))

      return response
    } catch (error) {
      console.error('Payment processing error:', error)
      return null
    }
  }

  const confirmPayment = async (paymentId: string, paymentMethodId?: string): Promise<boolean> => {
    try {
      const payment = await getPaymentRecord(paymentId)
      if (!payment) return false

      const provider = paymentRegistry.get(payment.provider)
      if (!provider) return false

      const response = await provider.confirmPayment(paymentId, paymentMethodId)
      
      await client.request(updateItem('payments', paymentId, {
        status: response.status,
        updated_at: new Date()
      }))

      return response.status === 'succeeded'
    } catch {
      return false
    }
  }

  const refundPayment = async (paymentId: string, amount?: number, reason?: string): Promise<boolean> => {
    try {
      const payment = await getPaymentRecord(paymentId)
      if (!payment) return false

      const provider = paymentRegistry.get(payment.provider)
      if (!provider) return false

      const refundResponse = await provider.refundPayment({
        paymentId,
        amount,
        reason
      })

      await client.request(createItem('refunds', {
        id: refundResponse.id,
        payment_id: paymentId,
        amount: refundResponse.amount,
        status: refundResponse.status,
        reason: refundResponse.reason,
        created_at: new Date()
      }))

      return refundResponse.status === 'succeeded'
    } catch {
      return false
    }
  }

  const getPaymentHistory = async (customerId: string) => {
    return await client.request(
      readItems('payments', {
        filter: { customer_id: { _eq: customerId } },
        sort: ['-created_at'],
        fields: ['*', 'order.*', 'refunds.*']
      })
    )
  }

  const getPaymentMethods = async (customerId?: string) => {
    const allMethods = []
    
    for (const provider of paymentRegistry.getEnabled()) {
      const methods = await provider.getPaymentMethods(customerId)
      allMethods.push(...methods.map(method => ({
        ...method,
        provider: provider.name
      })))
    }
    
    return allMethods
  }

  const savePaymentMethod = async (customerId: string, paymentMethodId: string, providerName: string): Promise<boolean> => {
    const provider = paymentRegistry.get(providerName)
    if (!provider?.savePaymentMethod) return false

    const saved = await provider.savePaymentMethod(customerId, paymentMethodId)
    
    if (saved) {
      await client.request(createItem('customer_payment_methods', {
        customer_id: customerId,
        payment_method_id: paymentMethodId,
        provider: providerName,
        created_at: new Date()
      }))
    }
    
    return saved
  }

  const getPaymentRecord = async (paymentId: string) => {
    const payments = await client.request(
      readItems('payments', {
        filter: { id: { _eq: paymentId } },
        limit: 1
      })
    )
    return payments[0] || null
  }

  const validatePayment = (request: PaymentRequest): string[] => {
    const errors = []
    
    if (!request.amount || request.amount <= 0) {
      errors.push('Amount must be greater than 0')
    }
    
    if (!request.currency) {
      errors.push('Currency is required')
    }
    
    if (!request.orderId) {
      errors.push('Order ID is required')
    }
    
    return errors
  }

  return {
    processPayment,
    confirmPayment,
    refundPayment,
    getPaymentHistory,
    getPaymentMethods,
    savePaymentMethod,
    validatePayment,
    paymentRegistry
  }
}