import { getSearchClient } from './client'

export type MultiQuery = {
	indexName: string
	query?: string
	params?: Record<string, any>
}

export async function multiSearch(queries: MultiQuery[]) {
	const client = getSearchClient()
	const ms = queries.map(q => ({ indexUid: q.indexName, query: q.query || '', params: q.params || {} }))
	// MeiliSearch SDK expects: { queries: [{ indexUid, query, params }] }
	return client.multiSearch({ queries: ms })
}

export default multiSearch

