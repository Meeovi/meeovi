// Instantiate a Searchkit SDK client. The SDK is expected to be installed.
import Client from '@searchkit/instantsearch-client'
import { useRuntimeConfig } from 'nuxt/app'

function getRuntimeConfig(): any {
  try {
    return useRuntimeConfig()
  } catch (e) {
    return undefined
  }
}

export function getAdminClient(): any {
  const cfg = getRuntimeConfig()
  const host = cfg?.public?.searchkit?.host || process.env.SEARCHKIT_HOST || process.env.ELASTICSEARCH_HOST || cfg?.public?.meilisearch?.host || process.env.MEILISEARCH_HOST
  const apiKey = cfg?.searchkit?.adminApiKey || process.env.SEARCHKIT_ADMIN_API_KEY || cfg?.meilisearch?.adminApiKey || process.env.MEILISEARCH_ADMIN_API_KEY
  if (!host) throw new Error('Search host not configured')
  try {
    return new (Client as any)({ host, apiKey })
  } catch (e) {
    // Fallback to a minimal placeholder if SDK instantiation fails
    return { host, apiKey, _client: 'searchkit-fallback' } as any
  }
}

export function getSearchClient(): any {
  const cfg = getRuntimeConfig()
  const host = cfg?.public?.searchkit?.host || process.env.SEARCHKIT_HOST || process.env.ELASTICSEARCH_HOST || cfg?.public?.meilisearch?.host || process.env.MEILISEARCH_HOST
  const apiKey = cfg?.public?.searchkit?.searchApiKey || process.env.SEARCHKIT_SEARCH_API_KEY || cfg?.public?.meilisearch?.searchApiKey || process.env.MEILISEARCH_SEARCH_API_KEY
  if (!host) throw new Error('Search host not configured')
  try {
    return new (Client as any)({ host, apiKey })
  } catch (e) {
    return { host, apiKey, _client: 'searchkit-fallback' } as any
  }
}

export function getIndexName(): string {
  const cfg = getRuntimeConfig()
  return cfg?.public?.searchkit?.indexName || process.env.SEARCHKIT_INDEX_NAME || cfg?.public?.meilisearch?.indexName || process.env.MEILISEARCH_INDEX_NAME || 'default'
}

export type TaskInfo = any
