import gql from 'graphql-tag';

export const products = gql`
query
{
  products{
    items {
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
    }
    totalItems
  }
}
`;