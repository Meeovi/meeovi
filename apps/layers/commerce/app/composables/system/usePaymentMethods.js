import { useQuery } from '@apollo/client/core';
import { gql } from 'graphql-tag';

const eligiblePaymentMethodsQuery = `
  query eligiblePaymentMethods{
      eligiblePaymentMethods{
          id
          code
          name
          description
          isEligible
          eligibilityMessage
          customFields
      }
  }
`;

export function usePaymentMethods() {
  function fetchPaymentMethods() {
    return useQuery(gql`${eligiblePaymentMethodsQuery}`);
  }
  return { fetchPaymentMethods };
}
