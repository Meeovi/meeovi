export type SortSpec = { field: string; direction?: 'asc' | 'desc' }

export function buildSortClauses(specs: SortSpec[] | undefined) {
	if (!specs || specs.length === 0) return undefined
	return specs.map(s => `${s.field}:${s.direction || 'asc'}`)
}

export default buildSortClauses

