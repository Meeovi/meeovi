import gql from 'graphql-tag';

export const latestproducts = gql`
query
{
  products(options: {sort: {createdAt: ASC}}) {
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