import gql from 'graphql-tag';

export const facets = gql`
query
{
  facets {
    items {
      id
      createdAt
      updatedAt
      languageCode
      name
      code
      values {
        id
        name
        code
      }
      customFields
    }
    totalItems
  }
}

`