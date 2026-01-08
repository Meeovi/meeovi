export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: number
  currency: string
  interval: 'day' | 'week' | 'month' | 'year'
  intervalCount: number
  trialDays?: number
  features: string[]
  isActive: boolean
}

export interface Subscription {
  id: string
  customerId: string
  planId: string
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'paused'
  currentPeriodStart: Date
  currentPeriodEnd: Date
  trialEnd?: Date
  canceledAt?: Date
  pausedAt?: Date
  metadata?: Record<string, any>
}

export interface SubscriptionUsage {
  id: string
  subscriptionId: string
  feature: string
  usage: number
  limit?: number
  period: Date
}

export interface SubscriptionInvoice {
  id: string
  subscriptionId: string
  amount: number
  currency: string
  status: 'draft' | 'open' | 'paid' | 'void'
  dueDate: Date
  paidAt?: Date
}