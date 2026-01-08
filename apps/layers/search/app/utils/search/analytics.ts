import { getAdminClient } from './client'

const TELEMETRY_INDEX = 'search_telemetry'

export async function logSearchEvent(event: Record<string, any>) {
	const client = getAdminClient()
	const idx = client.index(TELEMETRY_INDEX)
	const payload = Object.assign({}, event, { ts: new Date().toISOString() })
	return idx.addDocuments([payload])
}

export async function getTelemetryStats() {
	const client = getAdminClient()
	try {
		return client.index(TELEMETRY_INDEX).getStats()
	} catch (e) {
		return null
	}
}

export default { logSearchEvent, getTelemetryStats }
