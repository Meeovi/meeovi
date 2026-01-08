import { MeiliSearch, type EnqueuedTask } from 'meilisearch'
import { useRuntimeConfig } from '#imports'

function getRuntimeConfig(): any {
  try {
    return useRuntimeConfig()
  } catch (e) {
    return undefined
  }
}

export function getAdminClient(): MeiliSearch {
  const cfg = getRuntimeConfig()
  const host = cfg?.public?.meilisearch?.host || process.env.MEILISEARCH_HOST
  const apiKey = cfg?.meilisearch?.adminApiKey || process.env.MEILISEARCH_ADMIN_API_KEY
  if (!host) throw new Error('MeiliSearch host not configured')
  return new MeiliSearch({ host, apiKey })
}

export function getSearchClient(): MeiliSearch {
  const cfg = getRuntimeConfig()
  const host = cfg?.public?.meilisearch?.host || process.env.MEILISEARCH_HOST
  const apiKey = cfg?.public?.meilisearch?.searchApiKey || process.env.MEILISEARCH_SEARCH_API_KEY
  if (!host) throw new Error('MeiliSearch host not configured')
  return new MeiliSearch({ host, apiKey })
}

export function getIndexName(): string {
  const cfg = getRuntimeConfig()
  return cfg?.public?.meilisearch?.indexName || process.env.MEILISEARCH_INDEX_NAME || 'default'
}

export type TaskInfo = EnqueuedTask
