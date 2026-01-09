import gql from 'graphql-tag';

export const product = gql`
query ($id: ID){
  product(id: $id){
      id
      createdAt
      updatedAt
      languageCode
      name
      slug
      description
      enabled
      featuredAsset {
        source
        preview
      }
      assets {
        source
      }
      facetValues {
        id
        name
      }
      collections {
        id
        name
      }
      customFields
    variants {
      price
      currencyCode
      stockLevel
    }
}
}
`;