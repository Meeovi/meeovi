import toFilterString from './filters'

export function sanitizeQuery(q?: string) {
	if (!q) return ''
	// basic sanitize to avoid control sequences
	return q.replace(/[\u0000-\u001F\u007F]/g, '').trim()
}

export function buildUserFilter(user?: { id?: string | number; roles?: string[] }, extra?: Record<string, any>) {
	const filters: Record<string, any> = {}
	if (user?.id) filters['owner_id'] = user.id
	if (user?.roles && user.roles.length > 0) filters['role'] = user.roles
	if (extra) Object.assign(filters, extra)
	return toFilterString(filters)
}

export default { sanitizeQuery, buildUserFilter }
