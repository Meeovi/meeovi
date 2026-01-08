import { getAdminClient, getIndexName } from './client'

export async function updateRankingRules(indexName: string | undefined, rankingRules: string[]) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.updateSettings({ rankingRules })
}

export async function updateSearchableAttributes(indexName: string | undefined, attrs: string[]) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.updateSettings({ searchableAttributes: attrs })
}

export default { updateRankingRules, updateSearchableAttributes }

