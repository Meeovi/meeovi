import gql from 'graphql-tag';

export const order = gql`
query
{
  order(id: "_____") {
    id
    createdAt
    updatedAt
    type
    orderPlacedAt
    code
    state
    active
    customer {
      id
      createdAt
      updatedAt
      title
      firstName
      lastName
      phoneNumber
      emailAddress
      addresses {
        id
        streetLine1
        postalCode
        city
        country {
          name
        }
      }
      user {
        identifier
      }
      customFields
    }
    shippingAddress {
      fullName
      company
      streetLine1
      streetLine2
      city
      province
      postalCode
      country
      countryCode
      phoneNumber
      customFields
    }
    billingAddress {
      fullName
      company
      streetLine1
      streetLine2
      city
      province
      postalCode
      country
      countryCode
      phoneNumber
      customFields
    }
    lines {
      id
      createdAt
      updatedAt
      productVariant {
        id
      }
      featuredAsset {
        source
      }
      unitPrice
      unitPriceWithTax
      unitPriceChangeSinceAdded
      unitPriceWithTaxChangeSinceAdded
      discountedUnitPrice
      discountedUnitPriceWithTax
      proratedUnitPrice
      proratedUnitPriceWithTax
      quantity
      orderPlacedQuantity
      taxRate
      linePrice
      linePriceWithTax
      discountedLinePrice
      discountedLinePriceWithTax
      proratedLinePrice
      proratedLinePriceWithTax
      lineTax
      discounts {
        type
        description
        amount
        amountWithTax
      }
      taxLines {
        description
        taxRate
      }
      fulfillmentLines {
        orderLine {
          id
        }
        orderLineId
        quantity
        fulfillment {
          id
        }
        fulfillmentId
      }
      customFields
    }
    surcharges {
      id
      createdAt
      updatedAt
      description
      sku
      taxLines {
        description
        taxRate
      }
      price
      priceWithTax
      taxRate
    }
    discounts {
      adjustmentSource
      type
      description
      amount
      amountWithTax
    }
    couponCodes
    promotions {
      id
      createdAt
      updatedAt
      startsAt
      endsAt
      couponCode
      perCustomerUsageLimit
      usageLimit
      name
      description
      enabled
      conditions {
        code
      }
      actions {
        code
      }
      customFields
    }
    payments {
      id
      createdAt
      updatedAt
      method
      amount
      state
      transactionId
      errorMessage
      refunds {
        adjustment
        reason
      }
      metadata
      customFields
    }
    fulfillments {
      id
      createdAt
      updatedAt
      state
      method
      trackingCode
      customFields
    }
    totalQuantity
    subTotal
    subTotalWithTax
    currencyCode
    shippingLines {
      id
      shippingMethod {
        code
        name
      }
      price
      priceWithTax
      discountedPrice
      discountedPriceWithTax
      discounts {
        amount
        amountWithTax
      }
      customFields
    }
    shipping
    shippingWithTax
    total
    totalWithTax
    taxSummary {
      description
      taxRate
      taxBase
      taxTotal
    }
    history {
      items {
        id
        type
      }
      totalItems
    }
    customFields
  }
}

`