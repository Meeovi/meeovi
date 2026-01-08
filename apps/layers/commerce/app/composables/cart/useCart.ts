// @ts-nocheck
import { ref, computed, readonly } from 'vue'
import { createDirectus, rest, readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk'
import { useCoupons } from '../marketing/getCoupons'

export const useCart = () => {
  const config = useRuntimeConfig()
  const client = createDirectus((config.public && config.public.directus && config.public.directus.url) || '').with(rest())
  const { $auth } = useNuxtApp() || {}

  const cart = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const getCartIdentifier = () => {
    if ($auth && $auth.user) return { customer_id: $auth.user.id }
    let sessionId = null
    try {
      sessionId = localStorage.getItem('cart_session_id')
    } catch (e) {
      sessionId = null
    }
    if (!sessionId) {
      sessionId = `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      try { localStorage.setItem('cart_session_id', sessionId) } catch (e) {}
    }
    return { session_id: sessionId }
  }

  const fetchCart = async () => {
    try {
      loading.value = true
      error.value = null
      const identifier = getCartIdentifier()
      const result = await client.request(
        readItems('cart', {
          filter: identifier,
          limit: 1,
          fields: ['*', 'items.*', 'items.product.*', 'items.product.images.*', 'items.variant.*']
        })
      )
      cart.value = (result && result.length) ? result[0] : null
    } catch (err) {
      error.value = err
      console.error('Error fetching cart:', err)
    } finally {
      loading.value = false
    }
  }

  const createCart = async () => {
    try {
      const identifier = getCartIdentifier()
      const newCart = await client.request(createItem('cart', {
        ...identifier,
        subtotal: 0,
        tax_amount: 0,
        shipping_amount: 0,
        discount_amount: 0,
        total: 0,
        currency: 'USD',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }))
      cart.value = newCart
      return newCart
    } catch (err) {
      error.value = err
      throw err
    }
  }

  const addToCart = async (productId, quantity = 1, variantId) => {
    try {
      loading.value = true
      error.value = null
      if (!cart.value) await createCart()
      if (!cart.value) throw new Error('Failed to create cart')

      const product = await client.request(readItem('products', productId, { fields: ['*', 'images.*'] }))
      if (!product) throw new Error('Product not found')

      const existingItem = (cart.value.items || []).find(i => i.product_id === productId && i.variant_id === variantId)
      if (existingItem) {
        await updateCartItem(existingItem.id, existingItem.quantity + quantity)
      } else {
        const price = product.sale_price || product.price || 0
        await client.request(createItem('cart_items', {
          cart_id: cart.value.id,
          product_id: productId,
          variant_id: variantId,
          quantity,
          price,
          total: price * quantity
        }))
      }
      await fetchCart()
      await updateCartTotals()
    } catch (err) {
      error.value = err
      console.error('Error adding to cart:', err)
    } finally {
      loading.value = false
    }
  }

  const removeFromCart = async (itemId) => {
    try {
      loading.value = true
      error.value = null
      await client.request(deleteItem('cart_items', itemId))
      await fetchCart()
      await updateCartTotals()
    } catch (err) {
      error.value = err
      console.error('Error removing from cart:', err)
    } finally {
      loading.value = false
    }
  }

  const updateCartItem = async (itemId, quantity) => {
    try {
      loading.value = true
      error.value = null
      if (quantity <= 0) {
        await removeFromCart(itemId)
        return
      }
      const item = await client.request(readItem('cart_items', itemId))
      await client.request(updateItem('cart_items', itemId, {
        quantity,
        total: (item && item.price ? item.price * quantity : 0),
        updated_at: new Date().toISOString()
      }))
      await fetchCart()
      await updateCartTotals()
    } catch (err) {
      error.value = err
      console.error('Error updating cart item:', err)
    } finally {
      loading.value = false
    }
  }

  const updateCartTotals = async () => {
    if (!cart.value) return
    try {
      const subtotal = (cart.value.items || []).reduce((s, it) => s + (it.total || 0), 0)
      const taxAmount = subtotal * 0.08
      const total = subtotal + taxAmount + (cart.value.shipping_amount || 0) - (cart.value.discount_amount || 0)
      await client.request(updateItem('cart', cart.value.id, {
        subtotal,
        tax_amount: taxAmount,
        total,
        updated_at: new Date().toISOString()
      }))
      cart.value.subtotal = subtotal
      cart.value.tax_amount = taxAmount
      cart.value.total = total
    } catch (err) {
      console.error('Error updating cart totals:', err)
    }
  }

  const applyCoupon = async (couponCode) => {
    if (!cart.value) return false
    try {
      loading.value = true
      const { validateCoupon } = useCoupons()
      const validation = await validateCoupon(couponCode, cart.value.subtotal)
      if (!validation.valid) throw new Error(validation.message)
      const coupon = validation.coupon
      let discountAmount = 0
      if (coupon && coupon.discount_type === 'percentage') discountAmount = (cart.value.subtotal * coupon.discount_value) / 100
      else if (coupon) discountAmount = coupon.discount_value
      if (coupon && coupon.max_discount_amount && discountAmount > coupon.max_discount_amount) discountAmount = coupon.max_discount_amount
      await client.request(updateItem('cart', cart.value.id, { coupon_code: couponCode, discount_amount: discountAmount, updated_at: new Date().toISOString() }))
      await updateCartTotals()
      await fetchCart()
      return true
    } catch (err) {
      error.value = err
      console.error('Error applying coupon:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  const removeCoupon = async () => {
    if (!cart.value) return
    try {
      await client.request(updateItem('cart', cart.value.id, { coupon_code: null, discount_amount: 0, updated_at: new Date().toISOString() }))
      await updateCartTotals()
      await fetchCart()
    } catch (err) {
      console.error('Error removing coupon:', err)
    }
  }

  const clearCart = async () => {
    if (!cart.value) return
    try {
      loading.value = true
      if (cart.value.items && cart.value.items.length) {
        for (const item of cart.value.items) {
          await client.request(deleteItem('cart_items', item.id))
        }
      }
      await client.request(updateItem('cart', cart.value.id, { subtotal: 0, tax_amount: 0, discount_amount: 0, total: 0, coupon_code: null, updated_at: new Date().toISOString() }))
      await fetchCart()
    } catch (err) {
      console.error('Error clearing cart:', err)
    } finally {
      loading.value = false
    }
  }

  const createCheckoutSession = async (cartId) => {
    try {
      const id = cartId || (cart.value && cart.value.id)
      if (!id) throw new Error('No cart id for checkout')
      const origin = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : ''
      const resp = await fetch('/api/create-checkout-session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cartId: id, origin }) })
      const data = await resp.json()
      if (data && data.error) throw new Error(data.error)
      return data
    } catch (err) {
      console.error('Error creating checkout session:', err)
      throw err
    }
  }

  const setShippingOption = async (option) => {
    if (!cart.value) await createCart()
    if (!cart.value) return null
    try {
      const shippingAmount = Number((option && (option.cost || option.price)) || 0)
      const payload = { shipping_amount: shippingAmount, updated_at: new Date().toISOString() }
      if (option && option.id) payload.shipping_method_id = option.id
      if (option && option.name) payload.shipping_method_name = option.name
      await client.request(updateItem('cart', cart.value.id, payload))
      await updateCartTotals()
      await fetchCart()
      return cart.value
    } catch (err) {
      console.error('Error setting shipping option on cart:', err)
      throw err
    }
  }

  const itemCount = computed(() => (cart.value && cart.value.items) ? cart.value.items.reduce((c, it) => c + (it.quantity || 0), 0) : 0)
  const isEmpty = computed(() => !(cart.value && cart.value.items && cart.value.items.length))
  const hasItems = computed(() => !isEmpty.value)

  return {
    cart: readonly(cart),
    loading: readonly(loading),
    error: readonly(error),
    itemCount,
    isEmpty,
    hasItems,
    fetchCart,
    addToCart,
    removeFromCart,
    updateCartItem,
    applyCoupon,
    removeCoupon,
    clearCart,
    setShippingOption,
    createCheckoutSession
  }
}
