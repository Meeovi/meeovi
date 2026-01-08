import { loadStripe } from '@stripe/stripe-js'

export const useStripeElements = () => {
  const config = useRuntimeConfig()
  const stripe = ref(null)
  const elements = ref(null)
  const cardElement = ref(null)
  const isLoaded = ref(false)
  const error = ref(null)

  const initializeStripe = async () => {
    try {
      const stripeInstance = await loadStripe(config.public.stripe.publishableKey)
      stripe.value = stripeInstance
      
      if (stripeInstance) {
        elements.value = stripeInstance.elements()
        isLoaded.value = true
      }
    } catch (err) {
      error.value = err
      console.error('Stripe initialization error:', err)
    }
  }

  const createCardElement = (options = {}) => {
    if (!elements.value) return null
    
    const defaultOptions = {
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': { color: '#aab7c4' }
        }
      },
      hidePostalCode: false
    }
    
    cardElement.value = elements.value.create('card', { ...defaultOptions, ...options })
    return cardElement.value
  }

  const confirmCardPayment = async (clientSecret: string, cardElement: any, billingDetails = {}) => {
    if (!stripe.value) throw new Error('Stripe not initialized')
    
    const { error, paymentIntent } = await stripe.value.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: billingDetails
      }
    })
    
    if (error) throw error
    return paymentIntent
  }

  const createPaymentMethod = async (cardElement: any, billingDetails = {}) => {
    if (!stripe.value) throw new Error('Stripe not initialized')
    
    const { error, paymentMethod } = await stripe.value.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    })
    
    if (error) throw error
    return paymentMethod
  }

  const handleCardAction = async (clientSecret: string) => {
    if (!stripe.value) throw new Error('Stripe not initialized')
    
    const { error, paymentIntent } = await stripe.value.handleCardAction(clientSecret)
    if (error) throw error
    return paymentIntent
  }

  onMounted(() => {
    if (process.client) {
      initializeStripe()
    }
  })

  return {
    stripe: readonly(stripe),
    elements: readonly(elements),
    cardElement: readonly(cardElement),
    isLoaded: readonly(isLoaded),
    error: readonly(error),
    initializeStripe,
    createCardElement,
    confirmCardPayment,
    createPaymentMethod,
    handleCardAction
  }
}