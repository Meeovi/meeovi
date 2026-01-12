import type {
  CommerceProvider,
  CommerceProduct,
  CommerceListParams,
  CommerceListResult,
  CommerceCategory,
  CommerceCart,
  CommerceCustomer,
  CommerceOrder,
  ProviderContext,
  Address,
} from '../types'

import { normalizeShopifyProduct } from '../normalization/shopify/product'
import { normalizeShopifyCollection } from '../normalization/shopify/collection'
import { normalizeShopifyCart } from '../normalization/shopify/cart'

/**
 * Shopify Commerce Provider Implementation
 * Handles all commerce operations for Shopify stores
 */
export const createShopifyProvider = (ctx: ProviderContext): CommerceProvider => {
  const endpoint = ctx.endpoint
  if (!endpoint) {
    throw new Error('[Shopify Provider] Endpoint is required')
  }

  const token = ctx.token
  if (!token) {
    throw new Error('[Shopify Provider] Access token is required')
  }

  const apiVersion = ctx.apiVersion || '2024-01'
  const logger = ctx.logger

  logger?.info('[Shopify Provider] Initializing', { endpoint, apiVersion })

  // Shopify GraphQL Client
  const shopifyFetch = async (query: string, variables?: Record<string, unknown>) => {
    const response = await fetch(`${endpoint}/api/${apiVersion}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token,
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`)
    }

    const json = await response.json()
    if (json.errors) {
      throw new Error(`Shopify GraphQL errors: ${JSON.stringify(json.errors)}`)
    }

    return json.data
  }

  return {
    // =========================================================================
    // Product Operations
    // =========================================================================

    async getProduct(id: string): Promise<CommerceProduct | null> {
      try {
        const query = `
          query getProduct($id: ID!) {
            product(id: $id) {
              id
              title
              handle
              description
              descriptionHtml
              featuredImage {
                url
                altText
                width
                height
              }
              images(first: 10) {
                edges {
                  node {
                    id
                    url
                    altText
                    width
                    height
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              compareAtPriceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              availableForSale
              totalInventory
              variants(first: 100) {
                edges {
                  node {
                    id
                    title
                    sku
                    availableForSale
                    quantityAvailable
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      url
                      altText
                    }
                  }
                }
              }
              collections(first: 10) {
                edges {
                  node {
                    id
                    title
                    handle
                  }
                }
              }
              vendor
              productType
              tags
              seo {
                title
                description
              }
            }
          }
        `

        const data = await shopifyFetch(query, { id })
        
        if (!data.product) {
          logger?.warn('[Shopify Provider] Product not found', { id })
          return null
        }

        return normalizeShopifyProduct(data.product)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to fetch product', { id, error })
        throw error
      }
    },

    async getProducts(params?: CommerceListParams): Promise<CommerceListResult<CommerceProduct>> {
      try {
        const pageSize = params?.pageSize || 20
        const query = params?.search || ''
        const sortKey = params?.sort?.field?.toUpperCase() || 'RELEVANCE'
        const reverse = params?.sort?.direction === 'desc'

        const graphqlQuery = `
          query getProducts($first: Int!, $query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
            products(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  featuredImage {
                    url
                    altText
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  availableForSale
                  vendor
                  productType
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
            }
          }
        `

        const data = await shopifyFetch(graphqlQuery, {
          first: pageSize,
          query,
          sortKey,
          reverse,
        })

        const items = data.products.edges.map((edge: any) =>
          normalizeShopifyProduct(edge.node),
        )

        return {
          items,
          total: items.length, // Shopify doesn't provide total count in Storefront API
          page: params?.page || 1,
          pageSize,
          totalPages: 1,
        }
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to fetch products', { params, error })
        throw error
      }
    },

    async getProductBySku(sku: string): Promise<CommerceProduct | null> {
      try {
        // Shopify uses product IDs, not SKUs in the main query
        // Search by SKU in variant query
        const query = `
          query getProductBySku($query: String!) {
            products(first: 1, query: $query) {
              edges {
                node {
                  id
                  title
                  handle
                  variants(first: 1) {
                    edges {
                      node {
                        sku
                      }
                    }
                  }
                }
              }
            }
          }
        `

        const data = await shopifyFetch(query, { query: `sku:${sku}` })
        const product = data.products.edges[0]?.node

        if (!product) {
          logger?.warn('[Shopify Provider] Product not found by SKU', { sku })
          return null
        }

        return this.getProduct(product.id)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to fetch product by SKU', { sku, error })
        throw error
      }
    },

    async searchProducts(
      query: string,
      params?: CommerceListParams,
    ): Promise<CommerceListResult<CommerceProduct>> {
      return this.getProducts({
        ...params,
        search: query,
      })
    },

    // =========================================================================
    // Category Operations (Collections in Shopify)
    // =========================================================================

    async getCategory(id: string): Promise<CommerceCategory | null> {
      try {
        const query = `
          query getCollection($id: ID!) {
            collection(id: $id) {
              id
              title
              handle
              description
              descriptionHtml
              image {
                url
                altText
              }
              products {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        `

        const data = await shopifyFetch(query, { id })

        if (!data.collection) {
          logger?.warn('[Shopify Provider] Collection not found', { id })
          return null
        }

        return normalizeShopifyCollection(data.collection)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to fetch collection', { id, error })
        throw error
      }
    },

    async getCategories(parentId?: string): Promise<CommerceCategory[]> {
      try {
        const query = `
          query getCollections($first: Int!) {
            collections(first: $first) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  image {
                    url
                    altText
                  }
                  products {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        `

        const data = await shopifyFetch(query, { first: 250 })

        return data.collections.edges.map((edge: any) =>
          normalizeShopifyCollection(edge.node),
        )
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to fetch collections', { error })
        throw error
      }
    },

    async getCategoryTree(): Promise<CommerceCategory[]> {
      // Shopify doesn't have hierarchical collections in Storefront API
      return this.getCategories()
    },

    // =========================================================================
    // Cart Operations
    // =========================================================================

    async createCart(): Promise<CommerceCart> {
      try {
        const mutation = `
          mutation createCart {
            cartCreate {
              cart {
                id
                lines(first: 100) {
                  edges {
                    node {
                      id
                      quantity
                      merchandise {
                        ... on ProductVariant {
                          id
                          title
                          sku
                          price {
                            amount
                            currencyCode
                          }
                          product {
                            id
                            title
                            featuredImage {
                              url
                              altText
                            }
                          }
                        }
                      }
                    }
                  }
                }
                cost {
                  subtotalAmount {
                    amount
                    currencyCode
                  }
                  totalAmount {
                    amount
                    currencyCode
                  }
                  totalTaxAmount {
                    amount
                    currencyCode
                  }
                }
              }
              userErrors {
                field
                message
              }
            }
          }
        `

        const data = await shopifyFetch(mutation)

        if (data.cartCreate.userErrors.length > 0) {
          throw new Error(`Failed to create cart: ${JSON.stringify(data.cartCreate.userErrors)}`)
        }

        return normalizeShopifyCart(data.cartCreate.cart)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to create cart', { error })
        throw error
      }
    },

    async getCart(cartId: string): Promise<CommerceCart | null> {
      try {
        const query = `
          query getCart($id: ID!) {
            cart(id: $id) {
              id
              lines(first: 100) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        sku
                        price {
                          amount
                          currencyCode
                        }
                        product {
                          id
                          title
                          featuredImage {
                            url
                            altText
                          }
                        }
                      }
                    }
                  }
                }
              }
              cost {
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
              }
              discountCodes {
                code
                applicable
              }
            }
          }
        `

        const data = await shopifyFetch(query, { id: cartId })

        if (!data.cart) {
          logger?.warn('[Shopify Provider] Cart not found', { cartId })
          return null
        }

        return normalizeShopifyCart(data.cart)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to fetch cart', { cartId, error })
        throw error
      }
    },

    async addToCart(
      cartId: string,
      productId: string,
      quantity: number,
      variantId?: string,
    ): Promise<CommerceCart> {
      try {
        const mutation = `
          mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
            cartLinesAdd(cartId: $cartId, lines: $lines) {
              cart {
                id
                lines(first: 100) {
                  edges {
                    node {
                      id
                      quantity
                      merchandise {
                        ... on ProductVariant {
                          id
                          title
                          sku
                          price {
                            amount
                            currencyCode
                          }
                          product {
                            id
                            title
                            featuredImage {
                              url
                              altText
                            }
                          }
                        }
                      }
                    }
                  }
                }
                cost {
                  subtotalAmount {
                    amount
                    currencyCode
                  }
                  totalAmount {
                    amount
                    currencyCode
                  }
                }
              }
              userErrors {
                field
                message
              }
            }
          }
        `

        const merchandiseId = variantId || productId
        const data = await shopifyFetch(mutation, {
          cartId,
          lines: [{ merchandiseId, quantity }],
        })

        if (data.cartLinesAdd.userErrors.length > 0) {
          throw new Error(`Failed to add to cart: ${JSON.stringify(data.cartLinesAdd.userErrors)}`)
        }

        return normalizeShopifyCart(data.cartLinesAdd.cart)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to add to cart', {
          cartId,
          productId,
          quantity,
          error,
        })
        throw error
      }
    },

    async updateCartItem(
      cartId: string,
      itemId: string,
      quantity: number,
    ): Promise<CommerceCart> {
      try {
        const mutation = `
          mutation updateCartItem($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
            cartLinesUpdate(cartId: $cartId, lines: $lines) {
              cart {
                id
                lines(first: 100) {
                  edges {
                    node {
                      id
                      quantity
                      merchandise {
                        ... on ProductVariant {
                          id
                          title
                          price {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                }
                cost {
                  totalAmount {
                    amount
                    currencyCode
                  }
                }
              }
              userErrors {
                field
                message
              }
            }
          }
        `

        const data = await shopifyFetch(mutation, {
          cartId,
          lines: [{ id: itemId, quantity }],
        })

        if (data.cartLinesUpdate.userErrors.length > 0) {
          throw new Error(`Failed to update cart: ${JSON.stringify(data.cartLinesUpdate.userErrors)}`)
        }

        return normalizeShopifyCart(data.cartLinesUpdate.cart)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to update cart item', {
          cartId,
          itemId,
          quantity,
          error,
        })
        throw error
      }
    },

    async removeFromCart(cartId: string, itemId: string): Promise<CommerceCart> {
      try {
        const mutation = `
          mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
            cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
              cart {
                id
                lines(first: 100) {
                  edges {
                    node {
                      id
                      quantity
                    }
                  }
                }
                cost {
                  totalAmount {
                    amount
                    currencyCode
                  }
                }
              }
              userErrors {
                field
                message
              }
            }
          }
        `

        const data = await shopifyFetch(mutation, {
          cartId,
          lineIds: [itemId],
        })

        if (data.cartLinesRemove.userErrors.length > 0) {
          throw new Error(`Failed to remove from cart: ${JSON.stringify(data.cartLinesRemove.userErrors)}`)
        }

        return normalizeShopifyCart(data.cartLinesRemove.cart)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to remove from cart', {
          cartId,
          itemId,
          error,
        })
        throw error
      }
    },

    async applyCoupon(cartId: string, couponCode: string): Promise<CommerceCart> {
      try {
        const mutation = `
          mutation applyCoupon($cartId: ID!, $discountCodes: [String!]!) {
            cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
              cart {
                id
                discountCodes {
                  code
                  applicable
                }
                cost {
                  totalAmount {
                    amount
                    currencyCode
                  }
                }
              }
              userErrors {
                field
                message
              }
            }
          }
        `

        const data = await shopifyFetch(mutation, {
          cartId,
          discountCodes: [couponCode],
        })

        if (data.cartDiscountCodesUpdate.userErrors.length > 0) {
          throw new Error(`Failed to apply coupon: ${JSON.stringify(data.cartDiscountCodesUpdate.userErrors)}`)
        }

        const cart = await this.getCart(cartId)
        return cart || normalizeShopifyCart(data.cartDiscountCodesUpdate.cart)
      }
      catch (error) {
        logger?.error('[Shopify Provider] Failed to apply coupon', {
          cartId,
          couponCode,
          error,
        })
        throw error
      }
    },

    async removeCoupon(cartId: string): Promise<CommerceCart> {
      return this.applyCoupon(cartId, '')
    },

    // =========================================================================
    // Customer Operations
    // =========================================================================

    async getCustomer(customerId: string): Promise<CommerceCustomer | null> {
      logger?.warn('[Shopify Provider] getCustomer not implemented (requires Customer Account API)')
      return null
    },

    async createCustomer(data: Partial<CommerceCustomer>): Promise<CommerceCustomer> {
      logger?.warn('[Shopify Provider] createCustomer not implemented (requires Customer Account API)')
      throw new Error('Not implemented')
    },

    async updateCustomer(
      customerId: string,
      data: Partial<CommerceCustomer>,
    ): Promise<CommerceCustomer> {
      logger?.warn('[Shopify Provider] updateCustomer not implemented (requires Customer Account API)')
      throw new Error('Not implemented')
    },

    // =========================================================================
    // Order Operations
    // =========================================================================

    async getOrder(orderId: string): Promise<CommerceOrder | null> {
      logger?.warn('[Shopify Provider] getOrder not implemented (requires Customer Account API)')
      return null
    },

    async getCustomerOrders(
      customerId: string,
      params?: CommerceListParams,
    ): Promise<CommerceListResult<CommerceOrder>> {
      logger?.warn('[Shopify Provider] getCustomerOrders not implemented (requires Customer Account API)')
      return {
        items: [],
        total: 0,
        page: 1,
        pageSize: 20,
        totalPages: 0,
      }
    },

    async createOrder(
      cartId: string,
      shippingAddress: Address,
      billingAddress: Address,
      paymentMethod: string,
    ): Promise<CommerceOrder> {
      logger?.warn('[Shopify Provider] createOrder not implemented (requires Checkout API)')
      throw new Error('Not implemented')
    },
  }
}
