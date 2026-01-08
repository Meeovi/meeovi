import { usePayments } from './usePayments'
import type { PaymentMethod, PaymentRequest, PaymentResponse } from '../providers/base'

export const useCheckoutPayments = () => {
  const { processPayment, confirmPayment, getPaymentMethods, validatePayment } = usePayments()
  
  const availablePaymentMethods = ref<PaymentMethod[]>([])
  const selectedPaymentMethod = ref<PaymentMethod | null>(null)
  const savedPaymentMethods = ref<PaymentMethod[]>([])
  const isProcessing = ref(false)
  const paymentError = ref<string | null>(null)
  const paymentResult = ref<PaymentResponse | null>(null)

  const loadPaymentMethods = async (customerId?: string) => {
    try {
      const methods = await getPaymentMethods(customerId)
      availablePaymentMethods.value = methods.filter(m => m.enabled)
      savedPaymentMethods.value = methods.filter(m => m.id.includes('pm_'))
      
      if (availablePaymentMethods.value.length > 0 && !selectedPaymentMethod.value) {
        selectedPaymentMethod.value = availablePaymentMethods.value[0]
      }
    } catch (error) {
      console.error('Error loading payment methods:', error)
    }
  }

  const selectPaymentMethod = (method: PaymentMethod) => {
    selectedPaymentMethod.value = method
    paymentError.value = null
  }

  const processCheckoutPayment = async (paymentData: {
    amount: number
    currency: string
    orderId: string
    customerId?: string
    billingAddress?: any
    shippingAddress?: any
  }) => {
    if (!selectedPaymentMethod.value) {
      paymentError.value = 'Please select a payment method'
      return false
    }

    isProcessing.value = true
    paymentError.value = null

    try {
      const request: PaymentRequest = {
        ...paymentData,
        paymentMethodId: selectedPaymentMethod.value.id,
        metadata: {
          checkoutSession: Date.now().toString()
        }
      }

      const errors = validatePayment(request)
      if (errors.length > 0) {
        paymentError.value = errors[0]
        return false
      }

      const provider = selectedPaymentMethod.value.provider || 'stripe'
      const result = await processPayment(request, provider)
      
      if (!result) {
        paymentError.value = 'Payment processing failed'
        return false
      }

      paymentResult.value = result

      if (result.status === 'succeeded') {
        return true
      } else if (result.status === 'pending' && result.clientSecret) {
        // Handle 3D Secure or other authentication
        return { requiresAction: true, clientSecret: result.clientSecret }
      } else {
        paymentError.value = result.error || 'Payment failed'
        return false
      }
    } catch (error: any) {
      paymentError.value = error.message || 'Payment processing error'
      return false
    } finally {
      isProcessing.value = false
    }
  }

  const handlePaymentConfirmation = async (paymentId: string, paymentMethodId?: string) => {
    isProcessing.value = true
    
    try {
      const success = await confirmPayment(paymentId, paymentMethodId)
      if (!success) {
        paymentError.value = 'Payment confirmation failed'
      }
      return success
    } catch (error: any) {
      paymentError.value = error.message
      return false
    } finally {
      isProcessing.value = false
    }
  }

  const getPaymentSummary = () => {
    if (!selectedPaymentMethod.value) return null
    
    return {
      method: selectedPaymentMethod.value.name,
      type: selectedPaymentMethod.value.type,
      provider: selectedPaymentMethod.value.provider || 'unknown'
    }
  }

  const resetPaymentState = () => {
    paymentError.value = null
    paymentResult.value = null
    isProcessing.value = false
  }

  return {
    availablePaymentMethods: readonly(availablePaymentMethods),
    selectedPaymentMethod: readonly(selectedPaymentMethod),
    savedPaymentMethods: readonly(savedPaymentMethods),
    isProcessing: readonly(isProcessing),
    paymentError: readonly(paymentError),
    paymentResult: readonly(paymentResult),
    loadPaymentMethods,
    selectPaymentMethod,
    processCheckoutPayment,
    handlePaymentConfirmation,
    getPaymentSummary,
    resetPaymentState
  }
}