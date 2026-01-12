import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

export const createApolloClient = (endpoint: string, token?: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: endpoint,
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : undefined,
    }),
    cache: new InMemoryCache(),
  })
}
