import gql from 'graphql-tag';

export const activeCustomer = gql`
query
{
  activeCustomer {
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
      createdAt
      updatedAt
      fullName
      company
      streetLine1
      streetLine2
      city
      province
      postalCode
      country {
        name
      }
      phoneNumber
      defaultShippingAddress
      defaultBillingAddress
      customFields
    }
    orders(options: {}) {
      items {
        id
      }
      totalItems
    }
    user {
      id
      createdAt
      updatedAt
      identifier
      verified
      lastLogin
      customFields
    }
    customFields
  }
}

`