import { useQuery } from '@apollo/client/core';
import { gql } from 'graphql-tag';

const activeChannelQuery = `
  query activeChannel{
      activeChannel{
          id
          createdAt
          updatedAt
          code
          token
          defaultTaxZone{
              id
              createdAt
              updatedAt
              name
              members{
                  id
                  createdAt
                  updatedAt
                  languageCode
                  code
                  type
                  name
              }
          }
      }
  }
`;

export function useChannels() {
  function fetchChannels() {
    return useQuery(gql`${activeChannelQuery}`);
  }
  return { fetchChannels };
}
