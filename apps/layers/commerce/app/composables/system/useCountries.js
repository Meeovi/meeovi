import { useQuery } from '@apollo/client/core';
import { gql } from 'graphql-tag';

const availableCountriesQuery = `
  query availableCountries{
      availableCountries{
          id
          createdAt
          updatedAt
          languageCode
          code
          type
          name
          enabled
          parent{
              id
              createdAt
              updatedAt
              languageCode
              code
              type
              name
              enabled
          }
      }
  }
`;

export function useCountries() {
  function fetchCountries() {
    return useQuery(gql`${availableCountriesQuery}`);
  }
  return { fetchCountries };
}
