// Backend-agnostic adapter pattern for commerce operations
import { createDirectus, rest } from '@directus/sdk'

interface BackendAdapter {
  name: string
  client: any
  connect(): Promise<void>
  disconnect(): Promise<void>
  query(collection: string, options?: any): Promise<any>
  queryById(collection: string, id: string, options?: any): Promise<any>
  create(collection: string, data: any): Promise<any>
  update(collection: string, id: string, data: any): Promise<any>
  delete(collection: string, id: string): Promise<any>
}

class DirectusAdapter implements BackendAdapter {
  name = 'directus'
  client: any

  constructor(url: string) {
    this.client = createDirectus(url).with(rest())
  }

  async connect(): Promise<void> {
    // Connection logic if needed
  }

  async disconnect(): Promise<void> {
    // Cleanup logic if needed
  }

  async query(collection: string, options: any = {}): Promise<any> {
    const { readItems } = await import('@directus/sdk')
    return await this.client.request(readItems(collection, options))
  }

  async queryById(collection: string, id: string, options: any = {}): Promise<any> {
    const { readItem } = await import('@directus/sdk')
    return await this.client.request(readItem(collection, id, options))
  }

  async create(collection: string, data: any): Promise<any> {
    const { createItem } = await import('@directus/sdk')
    return await this.client.request(createItem(collection, data))
  }

  async update(collection: string, id: string, data: any): Promise<any> {
    const { updateItem } = await import('@directus/sdk')
    return await this.client.request(updateItem(collection, id, data))
  }

  async delete(collection: string, id: string): Promise<any> {
    const { deleteItem } = await import('@directus/sdk')
    return await this.client.request(deleteItem(collection, id))
  }
}

// Future adapters can be added here
class MagentoAdapter implements BackendAdapter {
  name = 'magento'
  client: any

  constructor(baseUrl: string, token: string) {
    this.client = { baseUrl, token }
  }

  async connect(): Promise<void> {}
  async disconnect(): Promise<void> {}

  async query(collection: string, options: any = {}): Promise<any> {
    // Magento API implementation
    throw new Error('Magento adapter not implemented')
  }

  async queryById(collection: string, id: string, options: any = {}): Promise<any> {
    throw new Error('Magento adapter not implemented')
  }

  async create(collection: string, data: any): Promise<any> {
    throw new Error('Magento adapter not implemented')
  }

  async update(collection: string, id: string, data: any): Promise<any> {
    throw new Error('Magento adapter not implemented')
  }

  async delete(collection: string, id: string): Promise<any> {
    throw new Error('Magento adapter not implemented')
  }
}

export const useBackendAdapter = () => {
  const config = useRuntimeConfig()
  
  const createAdapter = (type: string = 'directus'): BackendAdapter => {
    switch (type) {
      case 'directus':
        return new DirectusAdapter(config.public.directus.url)
      case 'magento':
        return new MagentoAdapter(config.public.commerceUrl, config.public.commerceApiToken)
      default:
        throw new Error(`Unsupported backend type: ${type}`)
    }
  }

  const getDefaultAdapter = (): BackendAdapter => {
    return createAdapter(config.public.backendType || 'directus')
  }

  return {
    createAdapter,
    getDefaultAdapter,
    DirectusAdapter,
    MagentoAdapter
  }
}