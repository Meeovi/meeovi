import { defineNuxtModule, addPlugin, createResolver, addImportsDir, addTypeTemplate } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface CommerceModuleOptions {
  /**
   * Commerce provider to use
   * @default 'magento'
   */
  provider?: 'magento' | 'shopify' | 'woocommerce' | 'medusa'
  
  /**
   * API endpoint for the commerce provider
   */
  endpoint?: string
  
  /**
   * API token/key for authentication (server-side only)
   */
  token?: string
  
  /**
   * Store code (for multi-store setups like Magento)
   */
  storeCode?: string
  
  /**
   * API version (for providers like Shopify)
   */
  apiVersion?: string
  
  /**
   * Magento-specific configuration
   */
  magento?: {
    endpoint?: string
    token?: string
    storeCode?: string
  }
  
  /**
   * Shopify-specific configuration
   */
  shopify?: {
    endpoint?: string
    storefrontToken?: string
    apiVersion?: string
  }
  
  /**
   * WooCommerce-specific configuration
   */
  woocommerce?: {
    endpoint?: string
    consumerKey?: string
    consumerSecret?: string
  }
}

export default defineNuxtModule<CommerceModuleOptions>({
  meta: {
    name: 'nuxt-commerce',
    configKey: 'commerce',
    compatibility: {
      nuxt: '^4.0.0',
    },
  },

  defaults: {
    provider: 'magento',
    endpoint: '',
    storeCode: 'default',
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Merge provider-specific configs into main config
    const provider = options.provider || 'magento'
    let endpoint = options.endpoint
    let token = options.token

    // Override with provider-specific configs if available
    if (provider === 'magento' && options.magento) {
      endpoint = options.magento.endpoint || endpoint
      token = options.magento.token || token
      options.storeCode = options.magento.storeCode || options.storeCode
    }
    else if (provider === 'shopify' && options.shopify) {
      endpoint = options.shopify.endpoint || endpoint
      token = options.shopify.storefrontToken || token
      options.apiVersion = options.shopify.apiVersion || options.apiVersion
    }
    else if (provider === 'woocommerce' && options.woocommerce) {
      endpoint = options.woocommerce.endpoint || endpoint
      token = options.woocommerce.consumerKey || token
    }

    // Use environment variables as fallback
    endpoint = endpoint || process.env.COMMERCE_ENDPOINT || process.env[`${provider.toUpperCase()}_ENDPOINT`] || ''
    token = token || process.env.COMMERCE_TOKEN || process.env[`${provider.toUpperCase()}_TOKEN`] || ''

    // Set runtime config (public & private)
    nuxt.options.runtimeConfig.public.commerce = {
      ...(nuxt.options.runtimeConfig.public.commerce || {}),
      provider,
      ...(provider === 'shopify' && endpoint && { 
        endpoint,
        shopifyEndpoint: endpoint,
        shopifyToken: token,
      }),
      ...(provider === 'magento' && endpoint && {
        magentoEndpoint: endpoint,
      }),
      ...(provider === 'woocommerce' && endpoint && {
        woocommerceEndpoint: endpoint,
      }),
      storeCode: options.storeCode,
      apiVersion: options.apiVersion,
    }

    // Private runtime config (server-side only)
    nuxt.options.runtimeConfig.commerce = {
      ...(nuxt.options.runtimeConfig.commerce || {}),
      provider,
      endpoint: endpoint || '',
      token: token || '',
      ...(provider === 'magento' && token && { magentoToken: token }),
      ...(provider === 'woocommerce' && token && { woocommerceToken: token }),
    }

    // Register plugin
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Auto-import composables
    addImportsDir(resolver.resolve('./runtime/composables'))

    // Auto-import types
    addTypeTemplate({
      filename: 'types/nuxt-commerce.d.ts',
      getContents: () => `
        import type { CommerceProvider } from '${resolver.resolve('./runtime/types')}'
        
        declare module '#imports' {
          interface NuxtApp {
            $commerce: CommerceProvider
          }
        }
        
        declare module 'vue' {
          interface ComponentCustomProperties {
            $commerce: CommerceProvider
          }
        }
        
        export {}
      `,
    })

    // Transpile runtime
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))
    
    // Log configuration in dev mode
    if (nuxt.options.dev) {
      console.log('[nuxt-commerce] Configuration:', {
        provider,
        endpoint: endpoint ? `${endpoint.substring(0, 20)}...` : 'not set',
        hasToken: !!token,
        storeCode: options.storeCode,
      })
    }
  },
})
