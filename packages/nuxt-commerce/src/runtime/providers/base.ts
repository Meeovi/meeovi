import type { CommerceProvider, ProviderContext, ProviderFactory } from '../types'

// Provider Registry
class ProviderRegistry {
  private providers = new Map<string, ProviderFactory>()

  register(name: string, factory: ProviderFactory): void {
    if (this.providers.has(name)) {
      console.warn(`[Commerce] Provider "${name}" is already registered. Overwriting...`)
    }
    this.providers.set(name, factory)
  }

  get(name: string): ProviderFactory | undefined {
    return this.providers.get(name)
  }

  has(name: string): boolean {
    return this.providers.has(name)
  }

  getAll(): string[] {
    return Array.from(this.providers.keys())
  }

  create(name: string, context: ProviderContext): CommerceProvider {
    const factory = this.providers.get(name)
    if (!factory) {
      const available = this.getAll().join(', ')
      throw new Error(
        `[Commerce] Provider "${name}" is not registered. Available providers: ${available}`,
      )
    }

    try {
      return factory(context)
    }
    catch (error) {
      throw new Error(
        `[Commerce] Failed to create provider "${name}": ${error instanceof Error ? error.message : String(error)}`,
      )
    }
  }
}

// Singleton instance
export const providerRegistry = new ProviderRegistry()

// Convenience exports
export const registerProvider = (name: string, factory: ProviderFactory) =>
  providerRegistry.register(name, factory)

export const createProvider = (name: string, context: ProviderContext): CommerceProvider =>
  providerRegistry.create(name, context)
