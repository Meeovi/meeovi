export type FilterValue = string | number | boolean

function fmt(v: FilterValue) {
	if (typeof v === 'string') return `"${v.replace(/"/g, '\\"')}"`
	if (typeof v === 'boolean') return v ? 'true' : 'false'
	return String(v)
}

export function toFilterString(filters: Record<string, FilterValue | FilterValue[]>): string | undefined {
	const parts: string[] = []
	for (const key of Object.keys(filters)) {
		const val = filters[key]
		if (val === undefined) continue
		if (Array.isArray(val)) {
			const orParts = val.map(v => `${key} = ${fmt(v)}`)
			parts.push(`(${orParts.join(' OR ')})`)
		} else {
			parts.push(`${key} = ${fmt(val)}`)
		}
	}
	if (parts.length === 0) return undefined
	return parts.join(' AND ')
}

export default toFilterString
