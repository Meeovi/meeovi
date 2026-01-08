import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'
import type { POSTransaction, POSSession, CashDrawer } from '../types'

export const usePOS = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const currentSession = ref<POSSession | null>(null)
  const cart = ref<any[]>([])
  const cartTotal = ref(0)

  const startSession = async (terminalId: string, userId: string, openingCash: number) => {
    const session = await client.request(createItem('pos_sessions', {
      terminal_id: terminalId,
      user_id: userId,
      start_time: new Date(),
      opening_cash: openingCash,
      total_sales: 0,
      status: 'active'
    }))

    currentSession.value = session
    return session
  }

  const addToCart = (product: any, quantity = 1) => {
    const existingItem = cart.value.find(item => item.productId === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.value.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        discount: 0,
        tax: product.tax_rate || 0
      })
    }
    
    calculateCartTotal()
  }

  const removeFromCart = (productId: string) => {
    cart.value = cart.value.filter(item => item.productId !== productId)
    calculateCartTotal()
  }

  const updateCartItem = (productId: string, quantity: number) => {
    const item = cart.value.find(item => item.productId === productId)
    if (item) {
      item.quantity = quantity
      calculateCartTotal()
    }
  }

  const applyDiscount = (productId: string, discount: number) => {
    const item = cart.value.find(item => item.productId === productId)
    if (item) {
      item.discount = discount
      calculateCartTotal()
    }
  }

  const calculateCartTotal = () => {
    const subtotal = cart.value.reduce((sum, item) => {
      const itemTotal = (item.price * item.quantity) - (item.discount || 0)
      return sum + itemTotal
    }, 0)

    const tax = cart.value.reduce((sum, item) => {
      const itemTotal = (item.price * item.quantity) - (item.discount || 0)
      return sum + (itemTotal * (item.tax || 0) / 100)
    }, 0)

    cartTotal.value = subtotal + tax
  }

  const processTransaction = async (paymentMethod: string, customerId?: string) => {
    if (!currentSession.value || cart.value.length === 0) return null

    const subtotal = cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const discount = cart.value.reduce((sum, item) => sum + (item.discount || 0), 0)
    const tax = cartTotal.value - subtotal + discount

    const transaction = await client.request(createItem('pos_transactions', {
      terminal_id: currentSession.value.terminalId,
      customer_id: customerId,
      items: JSON.stringify(cart.value),
      subtotal,
      tax,
      discount,
      total: cartTotal.value,
      payment_method: paymentMethod,
      status: 'completed',
      timestamp: new Date()
    }))

    // Update session totals
    await client.request(updateItem('pos_sessions', currentSession.value.id, {
      total_sales: currentSession.value.totalSales + cartTotal.value
    }))

    // Clear cart
    cart.value = []
    cartTotal.value = 0

    return transaction
  }

  const endSession = async (closingCash: number) => {
    if (!currentSession.value) return null

    await client.request(updateItem('pos_sessions', currentSession.value.id, {
      end_time: new Date(),
      closing_cash: closingCash,
      status: 'closed'
    }))

    const session = currentSession.value
    currentSession.value = null
    return session
  }

  const getSessionReport = async (sessionId: string) => {
    const transactions = await client.request(
      readItems('pos_transactions', {
        filter: { session_id: { _eq: sessionId } },
        fields: ['*']
      })
    )

    const totalSales = transactions.reduce((sum, t) => sum + t.total, 0)
    const totalTransactions = transactions.length
    const paymentMethods = transactions.reduce((acc, t) => {
      acc[t.payment_method] = (acc[t.payment_method] || 0) + t.total
      return acc
    }, {})

    return {
      totalSales,
      totalTransactions,
      paymentMethods,
      transactions
    }
  }

  const syncWithOnline = async (terminalId: string) => {
    // Sync POS data with online store
    const pendingTransactions = await client.request(
      readItems('pos_transactions', {
        filter: { 
          terminal_id: { _eq: terminalId },
          synced: { _eq: false }
        }
      })
    )

    for (const transaction of pendingTransactions) {
      // Process each transaction for online sync
      await client.request(updateItem('pos_transactions', transaction.id, {
        synced: true,
        synced_at: new Date()
      }))
    }

    return pendingTransactions.length
  }

  return {
    currentSession: readonly(currentSession),
    cart: readonly(cart),
    cartTotal: readonly(cartTotal),
    startSession,
    addToCart,
    removeFromCart,
    updateCartItem,
    applyDiscount,
    processTransaction,
    endSession,
    getSessionReport,
    syncWithOnline
  }
}