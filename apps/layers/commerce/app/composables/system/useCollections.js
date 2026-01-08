import { useQuery } from "@apollo/client/core";
import { gql } from "graphql-tag";

const collectionsQuery = `
  query collections($options: ProductVariantListOptions, $options1: ProductVariantListOptions, $options2: ProductVariantListOptions, $options3: CollectionListOptions){
      collections(options: $options3){
          items{
              id
              createdAt
              updatedAt
              languageCode
              name
              slug
              breadcrumbs{
                  id
                  name
                  slug
              }
              position
              description
              featuredAsset{
                  id
                  createdAt
                  updatedAt
              }
          }
      }
  }
`;

export function useCollections() {
  function fetchCollections(options) {
    return useQuery(gql`${collectionsQuery}`, { variables: { options } });
  }
  return { fetchCollections };
}
