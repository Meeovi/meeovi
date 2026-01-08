import { useQuery } from '@apollo/client/core';
import { gql } from 'graphql-tag';

const activeOrderQuery = `
  query activeOrder($options: HistoryEntryListOptions, $options1: OrderListOptions, $options2: ProductVariantListOptions, $options3: HistoryEntryListOptions, $options4: HistoryEntryListOptions){
      activeOrder{
          id
          createdAt
          updatedAt
          type
          orderPlacedAt
          code
          state
          active
          customer{
              id
              createdAt
              updatedAt
              title
              firstName
              lastName
              phoneNumber
              emailAddress
              addresses{
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
                  country
                  countryCode
                  defaultShippingAddress
                  defaultBillingAddress
              }
          }
      }
  }
`;

export function useTaxCategories() {
  function fetchTaxCategories(options) {
    return useQuery(gql`${activeOrderQuery}`, { variables: { options } });
  }
  return { fetchTaxCategories };
}
