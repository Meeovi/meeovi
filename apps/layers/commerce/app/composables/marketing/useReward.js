import { createDirectus, rest, readItems, readItem, createItem, updateItem, aggregate } from '@directus/sdk'

export const useRewards = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()
  const { $auth } = useNuxtApp()

  const getRewardBalance = memoize(async (customerId = null) => {
    try {
      const currentUser = $auth.user
      const userId = customerId || currentUser?.id
      if (!userId) throw new Error('User not authenticated')

      const balances = await client.request(
        readItems('customer_reward_balances', {
          filter: { customer_id: { _eq: userId } },
          fields: ['*'],
          limit: 1
        })
      )

      return balances[0] || { customer_id: userId, points_balance: 0, points_earned: 0, points_spent: 0 }
    } catch (error) {
      console.error('Error fetching reward balance:', error)
      return { points_balance: 0, points_earned: 0, points_spent: 0 }
    }
  }, (customerId) => `reward_balance:${customerId || $auth.user?.id}`, 300000)

  const useRewardPoints = async (cartId, pointsToUse) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      const balance = await getRewardBalance()
      if (balance.points_balance < pointsToUse) {
        throw new Error('Insufficient reward points')
      }

      const rates = await getRewardRates()
      const discountAmount = pointsToUse * rates.points_to_currency_rate

      // Apply points to cart
      const { updateCartTotals } = useCart()
      await client.request(
        updateItem('carts', cartId, {
          reward_points_used: pointsToUse,
          reward_discount_amount: discountAmount,
          updated_at: new Date().toISOString()
        })
      )

      // Create transaction record
      await client.request(
        createItem('reward_transactions', {
          customer_id: currentUser.id,
          type: 'redemption',
          points: -pointsToUse,
          cart_id: cartId,
          description: `Redeemed ${pointsToUse} points for cart discount`,
          created_at: new Date().toISOString()
        })
      )

      await updateRewardBalance(currentUser.id, -pointsToUse)
      await logAction('reward_points_used', 'customers', currentUser.id, { points: pointsToUse, cart_id: cartId })
      
      return { success: true, discount_amount: discountAmount }
    } catch (error) {
      console.error('Error using reward points:', error)
      throw error
    }
  }

  const removeRewardPoints = async (cartId) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      const cart = await client.request(readItem('carts', cartId))
      if (!cart.reward_points_used) return

      // Remove points from cart
      await client.request(
        updateItem('carts', cartId, {
          reward_points_used: 0,
          reward_discount_amount: 0,
          updated_at: new Date().toISOString()
        })
      )

      // Restore points to customer balance
      await updateRewardBalance(currentUser.id, cart.reward_points_used)
      
      // Remove transaction record
      await client.request(
        createItem('reward_transactions', {
          customer_id: currentUser.id,
          type: 'restoration',
          points: cart.reward_points_used,
          cart_id: cartId,
          description: `Restored ${cart.reward_points_used} points from cart`,
          created_at: new Date().toISOString()
        })
      )

      await logAction('reward_points_removed', 'customers', currentUser.id, { points: cart.reward_points_used, cart_id: cartId })
    } catch (error) {
      console.error('Error removing reward points:', error)
      throw error
    }
  }

  const getRewardHistory = async (customerId = null, options = {}) => {
    try {
      const currentUser = $auth.user
      const userId = customerId || currentUser?.id
      if (!userId) throw new Error('User not authenticated')

      const { limit = 50, page = 1, type = null } = options
      
      const filter = { customer_id: { _eq: userId } }
      if (type) filter.type = { _eq: type }

      return await client.request(
        readItems('reward_transactions', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order.*',
            'cart.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching reward history:', error)
      return []
    }
  }

  const getRewardRates = memoize(async () => {
    try {
      const rates = await client.request(
        readItems('reward_rates', {
          filter: { status: { _eq: 'active' } },
          limit: 1,
          sort: ['-created_at']
        })
      )

      return rates[0] || {
        points_per_dollar: 1,
        points_to_currency_rate: 0.01,
        minimum_redemption: 100
      }
    } catch (error) {
      console.error('Error fetching reward rates:', error)
      return {
        points_per_dollar: 1,
        points_to_currency_rate: 0.01,
        minimum_redemption: 100
      }
    }
  }, () => 'reward_rates', 3600000) // Cache for 1 hour

  const calculateRewardPoints = async (orderAmount) => {
    try {
      const rates = await getRewardRates()
      return Math.floor(orderAmount * rates.points_per_dollar)
    } catch (error) {
      console.error('Error calculating reward points:', error)
      return 0
    }
  }

  const awardPointsForOrder = async (orderId, customerId, orderAmount) => {
    try {
      const pointsEarned = await calculateRewardPoints(orderAmount)
      if (pointsEarned <= 0) return

      // Create transaction record
      await client.request(
        createItem('reward_transactions', {
          customer_id: customerId,
          type: 'earning',
          points: pointsEarned,
          order_id: orderId,
          description: `Earned ${pointsEarned} points for order`,
          created_at: new Date().toISOString()
        })
      )

      await updateRewardBalance(customerId, pointsEarned)
      await logAction('reward_points_awarded', 'customers', customerId, { points: pointsEarned, order_id: orderId })
      
      return pointsEarned
    } catch (error) {
      console.error('Error awarding points for order:', error)
      return 0
    }
  }

  const updateRewardBalance = async (customerId, pointsChange) => {
    try {
      const balance = await getRewardBalance(customerId)
      
      const newBalance = {
        customer_id: customerId,
        points_balance: Math.max(0, balance.points_balance + pointsChange),
        points_earned: pointsChange > 0 ? balance.points_earned + pointsChange : balance.points_earned,
        points_spent: pointsChange < 0 ? balance.points_spent + Math.abs(pointsChange) : balance.points_spent,
        updated_at: new Date().toISOString()
      }

      if (balance.id) {
        await client.request(updateItem('customer_reward_balances', balance.id, newBalance))
      } else {
        await client.request(createItem('customer_reward_balances', {
          ...newBalance,
          created_at: new Date().toISOString()
        }))
      }
    } catch (error) {
      console.error('Error updating reward balance:', error)
    }
  }

  const getRewardTiers = memoize(async () => {
    try {
      return await client.request(
        readItems('reward_tiers', {
          filter: { status: { _eq: 'active' } },
          sort: ['minimum_points']
        })
      )
    } catch (error) {
      console.error('Error fetching reward tiers:', error)
      return []
    }
  }, () => 'reward_tiers', 3600000)

  const getCustomerTier = async (customerId = null) => {
    try {
      const balance = await getRewardBalance(customerId)
      const tiers = await getRewardTiers()
      
      let currentTier = tiers[0] || null
      for (const tier of tiers) {
        if (balance.points_balance >= tier.minimum_points) {
          currentTier = tier
        } else {
          break
        }
      }
      
      return currentTier
    } catch (error) {
      console.error('Error getting customer tier:', error)
      return null
    }
  }

  const getRewardStatistics = async (customerId = null) => {
    try {
      const currentUser = $auth.user
      const userId = customerId || currentUser?.id
      if (!userId) return null

      const stats = await client.request(
        aggregate('reward_transactions', {
          query: {
            filter: { customer_id: { _eq: userId } },
            groupBy: ['type'],
            aggregate: {
              sum: ['points'],
              count: '*'
            }
          }
        })
      )

      return stats.reduce((acc, stat) => {
        acc[stat.type] = {
          total_points: stat.sum?.points || 0,
          transaction_count: stat.count || 0
        }
        return acc
      }, {})
    } catch (error) {
      console.error('Error fetching reward statistics:', error)
      return {}
    }
  }

  return {
    getRewardBalance,
    useRewardPoints,
    removeRewardPoints,
    getRewardHistory,
    getRewardRates,
    calculateRewardPoints,
    awardPointsForOrder,
    getRewardTiers,
    getCustomerTier,
    getRewardStatistics
  }
}
  