import gql from 'graphql-tag';

export const collections = gql`
query GetAllCollections
{
  collections(options: { topLevelOnly: true }) {
    items {
      id
      createdAt
      updatedAt
      languageCode
      name
      slug
      breadcrumbs {
        id
        name
        slug
      }
      position
      description
      featuredAsset {
        id
        preview
      }
      assets {
        source
      }
      parent {
        id
        name
      }
      parentId
      children {
        id
        name
      }
      filters {
        code
      }
      translations {
        id
        name
      }
      productVariants {
        items {
          id
          name
          price
          sku
          assets {
            source
          }
        }
      }
      customFields
    }
    totalItems
  }
}`;