import { getAdminClient, getIndexName } from './client'

export async function ensureIndex(indexName?: string, options?: { primaryKey?: string }) {
	const client = getAdminClient()
	const name = indexName || getIndexName()
	try {
		await client.getIndex(name)
		return { existed: true }
	} catch (err) {
		const created = await client.createIndex(name, options)
		return { existed: false, created }
	}
}

export async function deleteIndex(indexName?: string) {
	const client = getAdminClient()
	const name = indexName || getIndexName()
	return client.deleteIndex(name)
}

export default { ensureIndex, deleteIndex }
