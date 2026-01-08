import type { CommerceCart, CartItem, CartTotals, Money, ProductImage } from '../../types'

/**
 * Normalize Shopify cart data to standard CommerceCart format
 */
export function normalizeShopifyCart(shopifyCart: any): CommerceCart {
  const items: CartItem[] = (shopifyCart.lines?.edges || []).map((edge: any) => {
    const line = edge.node
    const merchandise = line.merchandise
    const product = merchandise.product

    const image: ProductImage | undefined = product?.featuredImage
      ? {
          id: '0',
          url: product.featuredImage.url,
          alt: product.featuredImage.altText || product.title,
        }
      : undefined

    const price: Money = {
      amount: Number.parseFloat(merchandise.price?.amount || '0'),
      currency: merchandise.price?.currencyCode || 'USD',
    }

    const rowTotal: Money = {
      amount: price.amount * line.quantity,
      currency: price.currency,
    }

    // Extract variant attributes
    const attributes: Record<string, string> = {}
    if (merchandise.selectedOptions) {
      merchandise.selectedOptions.forEach((option: any) => {
        attributes[option.name] = option.value
      })
    }

    return {
      id: line.id,
      productId: product?.id || '',
      variantId: merchandise.id,
      sku: merchandise.sku || '',
      name: `${product?.title || ''} ${merchandise.title ? `- ${merchandise.title}` : ''}`.trim(),
      quantity: line.quantity,
      price,
      rowTotal,
      image,
      attributes,
    }
  })

  const cost = shopifyCart.cost
  const totals: CartTotals = {
    subtotal: {
      amount: Number.parseFloat(cost?.subtotalAmount?.amount || '0'),
      currency: cost?.subtotalAmount?.currencyCode || 'USD',
    },
    tax: cost?.totalTaxAmount
      ? {
          amount: Number.parseFloat(cost.totalTaxAmount.amount),
          currency: cost.totalTaxAmount.currencyCode,
        }
      : undefined,
    grandTotal: {
      amount: Number.parseFloat(cost?.totalAmount?.amount || '0'),
      currency: cost?.totalAmount?.currencyCode || 'USD',
    },
  }

  // Get applicable discount code
  const couponCode = shopifyCart.discountCodes?.find((dc: any) => dc.applicable)?.code

  return {
    id: shopifyCart.id,
    items,
    totals,
    couponCode,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
  }
}
