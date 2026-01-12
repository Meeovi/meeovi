import type { DirectusClient } from '@directus/sdk'

// Extend Directus client typing used in the app with the runtime `request` helper
/** Minimal request/response typing for Directus SDK helper usage */
export type DirectusRequestConfig = {
  method?: string
  url?: string
  headers?: Record<string, string>
  body?: any
}

export type DirectusUploadResponse = {
  id: string
  filename_download?: string
  title?: string
  [k: string]: any
}

type DirectusClientWithRequest<T = any> = DirectusClient<T> & {
  /**
   * Execute a request config produced by SDK helpers (e.g. `uploadFiles(formData)`).
   * Returns either a single upload response or an array of responses.
   */
  request?: (config: DirectusRequestConfig) => Promise<DirectusUploadResponse | DirectusUploadResponse[]>
}

declare module '#imports' {
  interface NuxtApp {
    $directus: DirectusClientWithRequest<any>
    $readItems: any
    $readItem: any
    $createItem: any
    $updateItem: any
    $uploadFiles: any
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $directus: DirectusClientWithRequest<any>
    $readItems: any
    $readItem: any
    $createItem: any
    $updateItem: any
    $uploadFiles: any
  }
}