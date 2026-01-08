import { getAdminClient, getIndexName } from './client'

export async function batchIndexDocuments(docs: any[], indexName?: string, batchSize = 1000) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	const tasks = [] as Promise<any>[]
	for (let i = 0; i < docs.length; i += batchSize) {
		const chunk = docs.slice(i, i + batchSize)
		tasks.push(idx.addDocuments(chunk))
	}
	return Promise.all(tasks)
}

export default { batchIndexDocuments }
