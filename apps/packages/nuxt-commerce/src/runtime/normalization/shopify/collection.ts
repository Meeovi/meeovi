import type { CommerceCategory, Image } from '../../types'

/**
 * Normalize Shopify collection data to standard CommerceCategory format
 */
export function normalizeShopifyCollection(shopifyCollection: any): CommerceCategory {
  const image: Image | undefined = shopifyCollection.image
    ? {
        url: shopifyCollection.image.url,
        alt: shopifyCollection.image.altText || shopifyCollection.title,
      }
    : undefined

  const productCount = shopifyCollection.products?.edges?.length || 0

  return {
    id: shopifyCollection.id,
    name: shopifyCollection.title,
    slug: shopifyCollection.handle,
    description: shopifyCollection.descriptionHtml || shopifyCollection.description,
    image,
    productCount,
  }
}
