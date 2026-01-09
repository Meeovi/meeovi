import gql from 'graphql-tag';

export const shippingMethods = gql`
query
{
  eligibleShippingMethods {
    id
    price
    priceWithTax
    code
    name
    description
    metadata
    customFields
  }
}
`