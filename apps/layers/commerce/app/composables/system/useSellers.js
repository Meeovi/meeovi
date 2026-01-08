import { useQuery } from "@apollo/client/core";
import { gql } from "graphql-tag";

const facetsQuery = `
  query facets($options: FacetValueListOptions, $options1: FacetValueListOptions, $options2: FacetListOptions){
      facets(options: $options2){
          items{
              id
              createdAt
              updatedAt
              languageCode
              name
              code
              values{
                  id
                  createdAt
                  updatedAt
                  languageCode
                  facet{
                      id
                      createdAt
                      updatedAt
                      languageCode
                      name
                  }
              }
          }
      }
  }
`;

export function useSellers() {
  function fetchSellers(options) {
    return useQuery(gql`${facetsQuery}`, { variables: { options } });
  }
  return { fetchSellers };
}
