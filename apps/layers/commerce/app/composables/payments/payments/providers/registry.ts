import { BasePaymentProvider } from './base'
import { StripeProvider } from './stripe'
import { OfflineProvider } from './offline'

export class PaymentProviderRegistry {
  private providers = new Map<string, BasePaymentProvider>()

  constructor() {
    this.registerDefaults()
  }

  register(name: string, provider: BasePaymentProvider) {
    this.providers.set(name, provider)
  }

  get(name: string): BasePaymentProvider | undefined {
    return this.providers.get(name)
  }

  getAll(): BasePaymentProvider[] {
    return Array.from(this.providers.values())
  }

  getEnabled(): BasePaymentProvider[] {
    return this.getAll().filter(provider => this.isProviderEnabled(provider.name))
  }

  private registerDefaults() {
    const config = useRuntimeConfig()
    
    // Register Stripe
    if (config.stripe?.secretKey) {
      this.register('stripe', new StripeProvider(config.stripe.secretKey))
    }
    
    // Register Offline methods
    this.register('offline', new OfflineProvider())
  }

  private isProviderEnabled(name: string): boolean {
    const config = useRuntimeConfig()
    return config.public.payments?.enabledProviders?.includes(name) ?? true
  }
}

export const paymentRegistry = new PaymentProviderRegistry()