import type { CommerceProduct, ProductImage, ProductCategory, ProductBrand, Money } from '../../types'

/**
 * Normalize Magento product data to standard CommerceProduct format
 */
export function normalizeMagentoProduct(magentoProduct: any): CommerceProduct {
  // Extract price information
  const priceRange = magentoProduct.price_range?.minimum_price
  const regularPrice = priceRange?.regular_price
  const finalPrice = priceRange?.final_price
  const discount = priceRange?.discount

  const price: Money = {
    amount: finalPrice?.value || regularPrice?.value || 0,
    currency: finalPrice?.currency || regularPrice?.currency || 'USD',
  }

  const regularPriceMoney: Money | undefined = regularPrice
    ? {
        amount: regularPrice.value,
        currency: regularPrice.currency,
      }
    : undefined

  const specialPrice: Money | undefined
    = discount && discount.amount_off > 0
      ? {
          amount: finalPrice?.value || 0,
          currency: finalPrice?.currency || 'USD',
        }
      : undefined

  // Extract images
  const images: ProductImage[] = []
  if (magentoProduct.image?.url) {
    images.push({
      id: '0',
      url: magentoProduct.image.url,
      alt: magentoProduct.image.label || magentoProduct.name,
      position: 0,
    })
  }

  if (magentoProduct.media_gallery) {
    magentoProduct.media_gallery.forEach((media: any, index: number) => {
      if (media.url && media.url !== magentoProduct.image?.url) {
        images.push({
          id: String(index + 1),
          url: media.url,
          alt: media.label || magentoProduct.name,
          position: index + 1,
        })
      }
    })
  }

  // Extract categories
  const categories: ProductCategory[] = (magentoProduct.categories || []).map((cat: any) => ({
    id: String(cat.id || cat.uid),
    name: cat.name,
    slug: cat.url_key || cat.url_path,
    path: cat.url_path,
  }))

  // Extract brand if available
  let brand: ProductBrand | undefined
  if (magentoProduct.custom_brand) {
    brand = {
      id: String(magentoProduct.custom_brand.id || ''),
      name: magentoProduct.custom_brand.name || '',
      slug: magentoProduct.custom_brand.url_key || '',
      logo: magentoProduct.custom_brand.logo || undefined,
    }
  }

  // Extract stock information
  const stockItem = magentoProduct.stock_status || magentoProduct.stock
  const inStock = stockItem === 'IN_STOCK' || stockItem?.is_in_stock === true
  const stockQuantity = magentoProduct.stock_qty || magentoProduct.only_x_left_in_stock || undefined

  // Extract rating
  const rating = magentoProduct.rating_summary
    ? {
        average: magentoProduct.rating_summary / 20, // Magento uses 0-100, normalize to 0-5
        count: magentoProduct.review_count || 0,
      }
    : undefined

  // Build normalized product
  return {
    id: String(magentoProduct.id || magentoProduct.uid),
    sku: magentoProduct.sku,
    name: magentoProduct.name,
    slug: magentoProduct.url_key,
    description: magentoProduct.description?.html || magentoProduct.description,
    shortDescription: magentoProduct.short_description?.html || magentoProduct.short_description,
    price,
    regularPrice: regularPriceMoney,
    finalPrice: price,
    specialPrice,
    inStock,
    stockQuantity,
    images,
    categories,
    brand,
    attributes: extractAttributes(magentoProduct),
    rating,
    metaTitle: magentoProduct.meta_title,
    metaDescription: magentoProduct.meta_description,
    url: magentoProduct.url || magentoProduct.canonical_url,
  }
}

/**
 * Extract and normalize product attributes
 */
function extractAttributes(product: any): Array<{ code: string; label: string; value: string | string[] }> {
  const attributes: Array<{ code: string; label: string; value: string | string[] }> = []

  // Handle configurable options (for configurable products)
  if (product.configurable_options) {
    product.configurable_options.forEach((option: any) => {
      attributes.push({
        code: option.attribute_code,
        label: option.label,
        value: option.values?.map((v: any) => v.label) || [],
      })
    })
  }

  // Handle custom attributes
  if (product.custom_attributes) {
    product.custom_attributes.forEach((attr: any) => {
      attributes.push({
        code: attr.attribute_code,
        label: attr.label || attr.attribute_code,
        value: attr.value,
      })
    })
  }

  return attributes
}
