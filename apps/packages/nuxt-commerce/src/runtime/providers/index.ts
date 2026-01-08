import { registerProvider } from './base'
import { createMagentoProvider } from './magento'
import { createShopifyProvider } from './shopify'

// Register all providers
registerProvider('magento', createMagentoProvider)
registerProvider('shopify', createShopifyProvider)

// Export all provider utilities
export * from './base'
export * from './magento'
export * from './shopify'
