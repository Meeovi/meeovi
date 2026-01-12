import {
  defineNuxtPlugin,
  useRuntimeConfig
} from '#imports'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  split,
  Observable
} from '@apollo/client/core'
import { onError as apolloOnError } from '@apollo/client/link/error'
import {
  DefaultApolloClient
} from '@vue/apollo-composable'
import {
  type InjectionKey
} from 'vue'
import {
  setContext
} from '@apollo/client/link/context'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const primaryHttpLink = createHttpLink({
    uri: String(config.public.directusGraphql), // Replace with your primary endpoint
  })

  const secondaryHttpLink = createHttpLink({
    uri: String(config.public.commerceGraphql), // Replace with your secondary endpoint
  })

  const thirdHttpLink = createHttpLink({
    //uri: config.public.wpGraphql, // Replace with your third endpoint
  })

  const primaryAuthLink = setContext((_, {
    headers
  }) => {
    return {
      headers: {
        ...headers,
        'Authorization': `Bearer ${config.public.directus.auth.token}`,
      }
    }
  })

  const secondaryAuthLink = setContext((_, {
    headers
  }) => {
    return {
      headers: {
        ...headers,
        'authorization': `Bearer ${config.public.commerceApiToken}`, // Replace with your secondary auth token
      }
    }
  })

  const thirdAuthLink = setContext((_, {
    headers
  }) => {
    return {
      headers: {
        ...headers,
        'authorization': `Bearer ${config.public.wordpressToken}`, // Replace with your third auth token
      }
    }
  })

  const primaryLink = primaryAuthLink.concat(primaryHttpLink)
  const secondaryLink = secondaryAuthLink.concat(secondaryHttpLink)
  const thirdLink = thirdAuthLink.concat(thirdHttpLink)

  const splitLink = split(
    (operation) => {
      const context = operation.getContext()
      return context.clientName === 'secondary'
    },
    secondaryLink,
    split(
      (operation) => {
        const context = operation.getContext()
        return context.clientName === 'third'
      },
      thirdLink,
      primaryLink // This becomes the default link for when neither condition is met
    )
  )

  // Create a resilient proxy object to return as fallback `data` when network errors
  // occur. This prevents components from attempting to read properties of `null` and
  // throwing errors like "Cannot read properties of null (reading 'ce')". The proxy
  // returns another proxy for any property access and handles common symbols and
  // conversions safely.
  const makeSafeDataProxy = (): any => {
    const createProxy = () => {
      const handler: ProxyHandler<any> = {
        get(_target, prop) {
          // Handle primitive coercion
          if (prop === Symbol.toPrimitive) return () => ''
          if (prop === 'toString') return () => ''
          if (prop === 'toJSON') return () => ({})
          if (prop === Symbol.iterator) return function* () { } // empty iterator
          if (prop === 'length') return 0
          // Return another proxy for any nested property access
          return createProxy()
        },
        apply() {
          // If someone tries to call it as a function, return another safe proxy
          return createProxy()
        },
        ownKeys() { return [] },
        getOwnPropertyDescriptor() { return { configurable: true, enumerable: true, value: undefined } }
      }

      // Use a function as the base so the proxy is callable and also works for property access
      return new Proxy(function () { }, handler)
    }

    return createProxy()
  }

    // Error link: log validation errors and the query/variables to help diagnose 400s
  const errorLink = apolloOnError(({ graphQLErrors, networkError, operation, forward }) => {
      try {
        if (graphQLErrors && graphQLErrors.length) {
          graphQLErrors.forEach((err) => {
            // eslint-disable-next-line no-console
            console.error('[Apollo][GraphQL error]', {
              message: err.message,
              extensions: err.extensions,
              path: err.path,
              locations: err.locations,
              operationName: operation.operationName,
            })
          })

          // Log the full operation (query + variables) to help debugging GraphQL validation issues
          let queryString = null
          try {
            // operation.query may have a loc with source if compiled from gql
            // @ts-ignore
            queryString = operation.query?.loc?.source?.body || JSON.stringify(operation.query)
          } catch (e) {
            queryString = String(operation.query)
          }

          // eslint-disable-next-line no-console
          console.error('[Apollo][GraphQL Operation]', {
            operationName: operation.operationName,
            query: queryString,
            variables: operation.variables,
          })
        }

        if (networkError) {
          // eslint-disable-next-line no-console
          console.error('[Apollo][Network error]', networkError)

          // If the network error has a parsed result, log it too
          if ('result' in (networkError as any) && (networkError as any).result) {
            // eslint-disable-next-line no-console
            console.error('[Apollo][Network result]', (networkError as any).result)
          }

          // If it's a client error (400-level) we will swallow it and return an empty result
          // so the page/component can continue rendering. This avoids throwing an unhandled
          // network exception that would break SSR or the page render.
          const statusCode = (networkError as any)?.statusCode || (networkError as any)?.status || null
          if (statusCode && [400, 401, 403, 404].includes(Number(statusCode))) {
            try {
              // Log more context to help trace runtime errors
              // eslint-disable-next-line no-console
              console.error('[Apollo][Network fallback] operation:', operation.operationName, 'status', statusCode)
              // Return a safer ExecutionResult shape: data=null and include the network error in errors
              const networkErr = (networkError as any)
              const errorPayload = [{ message: networkErr?.message || 'Network error', extensions: networkErr?.extensions || {} }]
              // Log stack and details to help trace runtime errors like "ce" being read from null
              // eslint-disable-next-line no-console
              console.error('[Apollo][Network fallback stack]', networkErr?.stack || networkErr)
              // Return a resilient proxy object as `data` so consumers attempting to
              // read nested properties won't crash. Include the network error in
              // `errors` so callers can still inspect what happened.
              const safeData = makeSafeDataProxy()
              return new Observable((observer: any) => {
                observer.next({ data: safeData, errors: errorPayload })
                observer.complete()
              })
            } catch (e) {
              // eslint-disable-next-line no-console
              console.error('[Apollo][Network fallback] failed to build fallback result', e)
            }
          }
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('[Apollo][errorLink] error while logging', e)
      }
    })

  const apolloClient = new ApolloClient({
    link: ApolloLink.from([errorLink, splitLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all'
      },
      query: {
        errorPolicy: 'all'
      }
    }
  })

  nuxtApp.vueApp.provide(DefaultApolloClient as InjectionKey < typeof apolloClient > , apolloClient)
})