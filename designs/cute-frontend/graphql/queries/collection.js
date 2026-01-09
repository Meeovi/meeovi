import gql from 'graphql-tag';

export const collection = gql`
query GetCollection ($slug: String!)
{
  collection(slug: $slug) {
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
        source
      }
      assets {
        source
        preview
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
          currencyCode
          sku
          assets {
            source
          }
        }
      }
      customFields
    }
  }`;