import { getAdminClient } from './client'

export async function createKey(params: {
	description?: string
	actions: string[]
	indexes?: string[]
	expiresAt?: string
}) {
	const client = getAdminClient()
	return client.createKey(params)
}

export async function listKeys() {
	const client = getAdminClient()
	return client.getKeys()
}

export async function deleteKey(key: string) {
	const client = getAdminClient()
	return client.deleteKey(key)
}

export default { createKey, listKeys, deleteKey }
