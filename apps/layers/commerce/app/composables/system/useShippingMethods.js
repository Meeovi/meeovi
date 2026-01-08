import { useQuery } from '@apollo/client/core';
import { gql } from 'graphql-tag';

const eligibleShippingMethodsQuery = `
  query eligibleShippingMethods{
      eligibleShippingMethods{
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
`;

export function useShippingMethods() {
  function fetchShippingMethods() {
    return useQuery(gql`${eligibleShippingMethodsQuery}`);
  }
  return { fetchShippingMethods };
}
