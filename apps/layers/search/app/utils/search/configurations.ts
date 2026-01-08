import { getAdminClient, getIndexName } from './client'

export async function updateSettings(indexName: string | undefined, settings: Record<string, any>) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.updateSettings(settings)
}

export async function getSettings(indexName?: string) {
	const client = getAdminClient()
	const idx = client.index(indexName || getIndexName())
	return idx.getSettings()
}

export default { updateSettings, getSettings }

