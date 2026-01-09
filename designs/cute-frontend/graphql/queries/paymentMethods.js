import gql from 'graphql-tag';

export const paymentMethods = gql`
query
{
  eligiblePaymentMethods {
    id
    code
    name
    description
    isEligible
    eligibilityMessage
    customFields
  }
}

`