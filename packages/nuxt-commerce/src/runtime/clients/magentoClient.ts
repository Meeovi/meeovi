/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MagentoClientConfig {
  endpoint: string
  token?: string
  storeCode?: string
}

interface MagentoClient {
  request<T>(document: any, variables?: any): Promise<T>
}

export const createMagentoClient = (config: MagentoClientConfig): MagentoClient => {
  return {
    async request<T>(document: any, variables?: any): Promise<T> {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      }
      
      if (config.token) {
        headers.Authorization = `Bearer ${config.token}`
      }
      
      if (config.storeCode) {
        headers.Store = config.storeCode
      }

      const response = await fetch(config.endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: document,
          variables,
        }),
      })

      const result = await response.json()
      
      if (result.errors) {
        throw new Error(`GraphQL Error: ${JSON.stringify(result.errors)}`)
      }
      
      return result.data
    },
  }
}
