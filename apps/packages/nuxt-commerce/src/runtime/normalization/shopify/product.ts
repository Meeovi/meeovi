import type {
  CommerceProduct,
  ProductImage,
  ProductCategory,
  ProductBrand,
  ProductVariant,
  Money,
} from '../../types'

/**
 * Normalize Shopify product data to standard CommerceProduct format
 */
export function normalizeShopifyProduct(shopifyProduct: any): CommerceProduct {
  // Extract price information
  const minPrice = shopifyProduct.priceRange?.minVariantPrice
  const maxPrice = shopifyProduct.priceRange?.maxVariantPrice
  const compareAtPrice = shopifyProduct.compareAtPriceRange?.minVariantPrice

  const price: Money = {
    amount: Number.parseFloat(minPrice?.amount || '0'),
    currency: minPrice?.currencyCode || 'USD',
  }

  const regularPrice: Money | undefined = compareAtPrice
    ? {
        amount: Number.parseFloat(compareAtPrice.amount),
        currency: compareAtPrice.currencyCode,
      }
    : undefined

  // Extract images
  const images: ProductImage[] = []
  
  if (shopifyProduct.featuredImage) {
    images.push({
      id: '0',
      url: shopifyProduct.featuredImage.url,
      alt: shopifyProduct.featuredImage.altText || shopifyProduct.title,
      position: 0,
    })
  }

  if (shopifyProduct.images?.edges) {
    shopifyProduct.images.edges.forEach((edge: any, index: number) => {
      const img = edge.node
      if (img.url !== shopifyProduct.featuredImage?.url) {
        images.push({
          id: img.id,
          url: img.url,
          alt: img.altText || shopifyProduct.title,
          position: index + 1,
        })
      }
    })
  }

  // Extract categories (collections in Shopify)
  const categories: ProductCategory[] = (shopifyProduct.collections?.edges || []).map((edge: any) => ({
    id: edge.node.id,
    name: edge.node.title,
    slug: edge.node.handle,
  }))

  // Extract brand (vendor in Shopify)
  const brand: ProductBrand | undefined = shopifyProduct.vendor
    ? {
        id: shopifyProduct.vendor,
        name: shopifyProduct.vendor,
        slug: shopifyProduct.vendor.toLowerCase().replace(/\s+/g, '-'),
      }
    : undefined

  // Extract variants
  const variants: ProductVariant[] = (shopifyProduct.variants?.edges || []).map((edge: any) => {
    const variant = edge.node
    const variantPrice: Money = {
      amount: Number.parseFloat(variant.price?.amount || '0'),
      currency: variant.price?.currencyCode || 'USD',
    }

    const variantComparePrice: Money | undefined = variant.compareAtPrice
      ? {
          amount: Number.parseFloat(variant.compareAtPrice.amount),
          currency: variant.compareAtPrice.currencyCode,
        }
      : undefined

    // Build attributes from selected options
    const attributes: Record<string, string> = {}
    if (variant.selectedOptions) {
      variant.selectedOptions.forEach((option: any) => {
        attributes[option.name] = option.value
      })
    }

    return {
      id: variant.id,
      sku: variant.sku || '',
      name: variant.title,
      price: variantPrice,
      regularPrice: variantComparePrice,
      inStock: variant.availableForSale || false,
      stockQuantity: variant.quantityAvailable,
      attributes,
      image: variant.image
        ? {
            id: variant.image.id || '0',
            url: variant.image.url,
            alt: variant.image.altText || variant.title,
          }
        : undefined,
    }
  })

  // Extract attributes from product type and tags
  const attributes: Array<{ code: string; label: string; value: string | string[] }> = []
  
  if (shopifyProduct.productType) {
    attributes.push({
      code: 'product_type',
      label: 'Product Type',
      value: shopifyProduct.productType,
    })
  }

  if (shopifyProduct.tags) {
    attributes.push({
      code: 'tags',
      label: 'Tags',
      value: shopifyProduct.tags,
    })
  }

  // Get first variant for stock info if no variants array
  const firstVariant = variants[0]
  const inStock = shopifyProduct.availableForSale !== undefined
    ? shopifyProduct.availableForSale
    : firstVariant?.inStock || false

  return {
    id: shopifyProduct.id,
    sku: firstVariant?.sku || '',
    name: shopifyProduct.title,
    slug: shopifyProduct.handle,
    description: shopifyProduct.descriptionHtml || shopifyProduct.description,
    shortDescription: shopifyProduct.description?.substring(0, 200),
    price,
    regularPrice,
    finalPrice: price,
    specialPrice: regularPrice && regularPrice.amount > price.amount ? price : undefined,
    inStock,
    stockQuantity: shopifyProduct.totalInventory,
    images,
    variants: variants.length > 0 ? variants : undefined,
    categories,
    brand,
    attributes,
    metaTitle: shopifyProduct.seo?.title,
    metaDescription: shopifyProduct.seo?.description,
    url: shopifyProduct.onlineStoreUrl,
  }
}
