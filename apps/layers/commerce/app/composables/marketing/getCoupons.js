import { createDirectus, rest, readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk'

export const useCoupons = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { validate, schemas, sanitizeInput } = useValidation()
  const { logAction } = useAudit()
  const { logDataProcessing } = useCompliance()

  const getCoupons = async (filters = {}) => {
    try {
      const filter = {
        status: { _eq: 'active' },
        _and: [
          {
            _or: [
              { valid_from: { _null: true } },
              { valid_from: { _lte: new Date().toISOString() } }
            ]
          },
          {
            _or: [
              { valid_until: { _null: true } },
              { valid_until: { _gte: new Date().toISOString() } }
            ]
          }
        ],
        ...filters
      }

      return await client.request(
        readItems('coupons', {
          filter,
          sort: ['-created_at'],
          fields: ['*']
        })
      )
    } catch (error) {
      console.error('Error fetching coupons:', error)
      return []
    }
  }

  const getCouponById = async (id) => {
    try {
      return await client.request(
        readItem('coupons', id, {
          fields: ['*']
        })
      )
    } catch (error) {
      console.error(`Error fetching coupon with ID ${id}:`, error)
      return null
    }
  }

  const getCouponByCode = async (code) => {
    try {
      const coupons = await client.request(
        readItems('coupons', {
          filter: {
            code: { _eq: code },
            status: { _eq: 'active' },
            _and: [
              {
                _or: [
                  { valid_from: { _null: true } },
                  { valid_from: { _lte: new Date().toISOString() } }
                ]
              },
              {
                _or: [
                  { valid_until: { _null: true } },
                  { valid_until: { _gte: new Date().toISOString() } }
                ]
              }
            ]
          },
          limit: 1
        })
      )
      return coupons[0] || null
    } catch (error) {
      console.error(`Error fetching coupon with code ${code}:`, error)
      return null
    }
  }

  const validateCoupon = async (code, orderTotal = 0, customerId = null) => {
    try {
      // Sanitize input
      const sanitizedCode = sanitizeInput(code.toString().toUpperCase())
      
      const coupon = await getCouponByCode(sanitizedCode)
      if (!coupon) return { valid: false, message: 'Coupon not found' }

      // Log data processing for compliance
      if (customerId) {
        await logDataProcessing(customerId, 'coupon_validation', 'legitimate_interest')
      }

      // Validate coupon data structure
      const validation = validate(schemas.coupon, coupon)
      if (!validation.success) {
        await logAction('coupon_validation_failed', 'coupons', coupon.id, { errors: validation.errors })
        return { valid: false, message: 'Invalid coupon data' }
      }

      // Check usage limits
      if (coupon.usage_limit && coupon.usage_count >= coupon.usage_limit) {
        return { valid: false, message: 'Coupon usage limit exceeded' }
      }

      // Check minimum order amount
      if (coupon.minimum_amount && orderTotal < coupon.minimum_amount) {
        return { valid: false, message: `Minimum order amount of ${coupon.minimum_amount} required` }
      }

      // Check customer usage limit
      if (coupon.usage_limit_per_customer && customerId) {
        const customerUsage = await getCustomerCouponUsage(coupon.id, customerId)
        if (customerUsage >= coupon.usage_limit_per_customer) {
          return { valid: false, message: 'Customer usage limit exceeded' }
        }
      }

      // Log successful validation
      await logAction('coupon_validated', 'coupons', coupon.id, { order_total: orderTotal })
      
      return { valid: true, coupon }
    } catch (error) {
      console.error('Error validating coupon:', error)
      return { valid: false, message: 'Validation error' }
    }
  }

  const getCustomerCouponUsage = async (couponId, customerId) => {
    try {
      const orders = await client.request(
        readItems('orders', {
          filter: {
            customer_id: { _eq: customerId },
            coupon_id: { _eq: couponId },
            status: { _neq: 'cancelled' }
          },
          aggregate: { count: '*' }
        })
      )
      return orders[0]?.count || 0
    } catch (error) {
      console.error('Error getting customer coupon usage:', error)
      return 0
    }
  }

  const applyCoupon = async (couponId, customerId = null) => {
    try {
      const result = await client.request(
        updateItem('coupons', couponId, {
          usage_count: { _increment: 1 },
          last_used_at: new Date().toISOString()
        })
      )
      
      // Log coupon application for audit
      await logAction('coupon_applied', 'coupons', couponId, { customer_id: customerId })
      
      return result
    } catch (error) {
      console.error('Error applying coupon:', error)
      await logAction('coupon_application_failed', 'coupons', couponId, { error: error.message })
      throw error
    }
  }

  return {
    getCoupons,
    getCouponById,
    getCouponByCode,
    validateCoupon,
    applyCoupon
  }
}