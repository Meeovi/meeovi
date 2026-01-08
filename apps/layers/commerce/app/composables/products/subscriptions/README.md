# Subscriptions Module

Enterprise subscription management system with flexible billing cycles and usage tracking.

## Features

- **Flexible Plans** - Multiple billing intervals and pricing tiers
- **Trial Periods** - Free trial support with automatic conversion
- **Usage Tracking** - Feature-based usage monitoring and limits
- **Lifecycle Management** - Pause, resume, cancel subscriptions
- **Automated Billing** - Recurring payment processing
- **Invoice Generation** - Automated billing and payment tracking
- **Proration** - Pro-rated billing for plan changes

## Quick Start

```typescript
// Create subscription
const { createSubscription, getPlans } = useSubscriptions()
const plans = await getPlans()
const subscription = await createSubscription(customerId, planId, trialDays)

// Track usage
await trackUsage(subscriptionId, 'api_calls', 100)

// Manage subscription
await pauseSubscription(subscriptionId)
await resumeSubscription(subscriptionId)
await cancelSubscription(subscriptionId)
```

## Directus Collections

- `subscription_plans` - Available subscription plans
- `subscriptions` - Customer subscription records
- `subscription_usage` - Feature usage tracking
- `subscription_invoices` - Billing and payment records