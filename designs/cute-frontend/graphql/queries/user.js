import gql from 'graphql-tag';

export const me = gql`
query
{
  me {
    id
    identifier
    channels {
      id
      token
      code
      permissions
    }
  }
}

`