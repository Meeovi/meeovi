import type { CommerceCart, CartItem, CartTotals, Money, ProductImage } from '../../types'

/**
 * Normalize Magento cart data to standard CommerceCart format
 */
export function normalizeMagentoCart(magentoCart: any): CommerceCart {
  const items: CartItem[] = (magentoCart.items || []).map((item: any) => {
    const product = item.product
    const image: ProductImage | undefined = product?.image?.url
      ? {
          id: '0',
          url: product.image.url,
          alt: product.image.label || product.name,
        }
      : undefined

    const price: Money = {
      amount: item.prices?.price?.value || 0,
      currency: item.prices?.price?.currency || 'USD',
    }

    const rowTotal: Money = {
      amount: item.prices?.row_total?.value || 0,
      currency: item.prices?.row_total?.currency || 'USD',
    }

    return {
      id: item.id || item.uid,
      productId: String(product?.id || product?.uid),
      variantId: item.configurable_options?.[0]?.value_id,
      sku: product?.sku || item.sku,
      name: product?.name || item.product_name,
      quantity: item.quantity,
      price,
      rowTotal,
      image,
      attributes: extractItemAttributes(item),
    }
  })

  const prices = magentoCart.prices
  const totals: CartTotals = {
    subtotal: {
      amount: prices?.subtotal_excluding_tax?.value || 0,
      currency: prices?.subtotal_excluding_tax?.currency || 'USD',
    },
    shipping: prices?.applied_shipping_amount
      ? {
          amount: prices.applied_shipping_amount.value,
          currency: prices.applied_shipping_amount.currency,
        }
      : undefined,
    tax: prices?.applied_taxes?.[0]
      ? {
          amount: prices.applied_taxes[0].amount.value,
          currency: prices.applied_taxes[0].amount.currency,
        }
      : undefined,
    discount: prices?.discounts?.[0]
      ? {
          amount: prices.discounts[0].amount.value,
          currency: prices.discounts[0].amount.currency,
        }
      : undefined,
    grandTotal: {
      amount: prices?.grand_total?.value || 0,
      currency: prices?.grand_total?.currency || 'USD',
    },
  }

  return {
    id: magentoCart.id,
    items,
    totals,
    couponCode: magentoCart.applied_coupons?.[0]?.code,
    itemCount: magentoCart.total_quantity || items.length,
  }
}

/**
 * Extract cart item attributes (configurable options, custom options, etc.)
 */
function extractItemAttributes(item: any): Record<string, string> {
  const attributes: Record<string, string> = {}

  // Configurable options
  if (item.configurable_options) {
    item.configurable_options.forEach((option: any) => {
      attributes[option.option_label] = option.value_label
    })
  }

  // Custom options
  if (item.customizable_options) {
    item.customizable_options.forEach((option: any) => {
      attributes[option.label] = option.values?.[0]?.label || option.values?.[0]?.value
    })
  }

  return attributes
}
