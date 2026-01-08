import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'
import type { Subscription, SubscriptionPlan, SubscriptionUsage } from '../types'

export const useSubscriptions = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getPlans = async (active = true) => {
    return await client.request(
      readItems('subscription_plans', {
        filter: active ? { is_active: { _eq: true } } : {},
        sort: ['price']
      })
    )
  }

  const createSubscription = async (customerId: string, planId: string, trialDays?: number) => {
    const plan = await client.request(
      readItems('subscription_plans', { filter: { id: { _eq: planId } } })
    )

    if (!plan.length) throw new Error('Plan not found')

    const now = new Date()
    const trialEnd = trialDays ? new Date(now.getTime() + trialDays * 24 * 60 * 60 * 1000) : null
    const periodStart = trialEnd || now
    const periodEnd = new Date(periodStart.getTime() + this.calculatePeriodDuration(plan[0]))

    return await client.request(createItem('subscriptions', {
      customer_id: customerId,
      plan_id: planId,
      status: trialEnd ? 'trialing' : 'active',
      current_period_start: periodStart,
      current_period_end: periodEnd,
      trial_end: trialEnd,
      created_at: now
    }))
  }

  const getCustomerSubscriptions = async (customerId: string) => {
    return await client.request(
      readItems('subscriptions', {
        filter: { customer_id: { _eq: customerId } },
        fields: ['*', 'plan.*'],
        sort: ['-created_at']
      })
    )
  }

  const cancelSubscription = async (subscriptionId: string, immediately = false) => {
    const subscription = await client.request(
      readItems('subscriptions', { filter: { id: { _eq: subscriptionId } } })
    )

    if (!subscription.length) return false

    const canceledAt = new Date()
    const status = immediately ? 'canceled' : subscription[0].status
    const currentPeriodEnd = immediately ? canceledAt : subscription[0].current_period_end

    await client.request(updateItem('subscriptions', subscriptionId, {
      status,
      canceled_at: canceledAt,
      current_period_end: currentPeriodEnd
    }))

    return true
  }

  const pauseSubscription = async (subscriptionId: string) => {
    await client.request(updateItem('subscriptions', subscriptionId, {
      status: 'paused',
      paused_at: new Date()
    }))
  }

  const resumeSubscription = async (subscriptionId: string) => {
    const subscription = await client.request(
      readItems('subscriptions', { filter: { id: { _eq: subscriptionId } } })
    )

    if (!subscription.length) return false

    const now = new Date()
    const plan = await client.request(
      readItems('subscription_plans', { filter: { id: { _eq: subscription[0].plan_id } } })
    )

    const newPeriodEnd = new Date(now.getTime() + this.calculatePeriodDuration(plan[0]))

    await client.request(updateItem('subscriptions', subscriptionId, {
      status: 'active',
      current_period_start: now,
      current_period_end: newPeriodEnd,
      paused_at: null
    }))

    return true
  }

  const trackUsage = async (subscriptionId: string, feature: string, usage: number) => {
    const period = new Date()
    period.setDate(1) // First day of month

    const existing = await client.request(
      readItems('subscription_usage', {
        filter: {
          subscription_id: { _eq: subscriptionId },
          feature: { _eq: feature },
          period: { _eq: period }
        }
      })
    )

    if (existing.length > 0) {
      await client.request(updateItem('subscription_usage', existing[0].id, {
        usage: existing[0].usage + usage
      }))
    } else {
      await client.request(createItem('subscription_usage', {
        subscription_id: subscriptionId,
        feature,
        usage,
        period
      }))
    }
  }

  const getUsage = async (subscriptionId: string, feature?: string) => {
    const filter: any = { subscription_id: { _eq: subscriptionId } }
    if (feature) filter.feature = { _eq: feature }

    return await client.request(
      readItems('subscription_usage', { filter })
    )
  }

  const processRenewal = async (subscriptionId: string) => {
    const subscription = await client.request(
      readItems('subscriptions', { filter: { id: { _eq: subscriptionId } } })
    )

    if (!subscription.length) return false

    const plan = await client.request(
      readItems('subscription_plans', { filter: { id: { _eq: subscription[0].plan_id } } })
    )

    const now = new Date()
    const newPeriodEnd = new Date(now.getTime() + this.calculatePeriodDuration(plan[0]))

    await client.request(updateItem('subscriptions', subscriptionId, {
      current_period_start: now,
      current_period_end: newPeriodEnd
    }))

    // Create invoice
    await client.request(createItem('subscription_invoices', {
      subscription_id: subscriptionId,
      amount: plan[0].price,
      currency: plan[0].currency,
      status: 'open',
      due_date: now
    }))

    return true
  }

  const calculatePeriodDuration = (plan: SubscriptionPlan): number => {
    const intervals = {
      day: 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      year: 365 * 24 * 60 * 60 * 1000
    }
    return intervals[plan.interval] * plan.intervalCount
  }

  return {
    getPlans,
    createSubscription,
    getCustomerSubscriptions,
    cancelSubscription,
    pauseSubscription,
    resumeSubscription,
    trackUsage,
    getUsage,
    processRenewal
  }
}