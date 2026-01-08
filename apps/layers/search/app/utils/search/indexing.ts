import { getAdminClient, getIndexName } from './client'

export async function addDocuments(indexName: string | undefined, docs: any[], primaryKey?: string) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.addDocuments(docs, { primaryKey })
}

export async function updateDocuments(indexName: string | undefined, docs: any[]) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.updateDocuments(docs)
}

export async function deleteDocuments(indexName: string | undefined, ids: Array<string | number>) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	const stringIds = ids.map(id => String(id)) as string[]
	return idx.deleteDocuments(stringIds)
}

export async function clearIndex(indexName?: string) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.deleteAllDocuments()
}

export async function getDocument(indexName: string | undefined, id: string | number) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.getDocument(id)
}

export default {
	addDocuments,
	updateDocuments,
	deleteDocuments,
	clearIndex,
	getDocument,
}
