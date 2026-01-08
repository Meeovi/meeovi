import { BaseShippingProvider } from './base'
import { UPSProvider } from './ups'

export class ShippingProviderRegistry {
  private providers = new Map<string, BaseShippingProvider>()

  constructor() {
    this.registerDefaults()
  }

  register(name: string, provider: BaseShippingProvider) {
    this.providers.set(name, provider)
  }

  get(name: string): BaseShippingProvider | undefined {
    return this.providers.get(name)
  }

  getAll(): BaseShippingProvider[] {
    return Array.from(this.providers.values())
  }

  private registerDefaults() {
    const config = useRuntimeConfig()
    if (config.public.ups?.apiKey) {
      this.register('ups', new UPSProvider(config.public.ups.apiKey))
    }
  }
}

export const shippingRegistry = new ShippingProviderRegistry()