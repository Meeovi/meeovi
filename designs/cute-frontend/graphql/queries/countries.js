import gql from 'graphql-tag';

export const countries = gql`
query
{
  availableCountries {
    id
    createdAt
    updatedAt
    languageCode
    code
    type
    name
    enabled
    parent {
      id
      createdAt
      updatedAt
      languageCode
      code
      type
      name
      enabled
      parentId
    }
    parentId
    translations {
      id
      createdAt
      updatedAt
      languageCode
      name
    }
    customFields
  }
}
`