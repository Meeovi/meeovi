// During migration we produce ORM-agnostic filter descriptors
type SQL = any
type PgColumn = any
type PgSelect = any
import { z } from 'zod'

export const filterSchema = z.array(
  z.union([
    z.object({
      col: z.string(),
      op: z.literal('between'),
      v: z.tuple([z.string(), z.string()])
    }),
    z.object({
      col: z.string(),
      op: z.literal('in'),
      v: z.array(z.string()).min(1)
    }),
    z.object({
      col: z.string(),
      op: z.literal('like'),
      v: z.string()
    }),
    z.object({
      col: z.string(),
      op: z.literal('eq'),
      v: z.string()
    })
  ])
)

export function processFilters(
  filters: z.infer<typeof filterSchema>,
  columns?: Record<string, PgColumn>
): SQL[] {
  // Validate filters against available columns and return a normalized list
  const valid: SQL[] = []
  for (const filter of filters) {
    if (!columns || filter.col in columns) {
      valid.push(filter as any)
    }
  }
  return valid
}

// Build a Prisma-compatible `where` object from validated filters.
export function buildPrismaWhere(filters: z.infer<typeof filterSchema>) {
  const where: Record<string, any> = {}
  const and: any[] = []

  for (const filter of filters) {
    if (filter.op === 'between') {
      and.push({ [filter.col]: { gte: new Date(filter.v[0]), lte: new Date(filter.v[1]) } })
    } else if (filter.op === 'in') {
      and.push({ [filter.col]: { in: filter.v } })
    } else if (filter.op === 'like') {
      and.push({ [filter.col]: { contains: filter.v, mode: 'insensitive' } })
    } else if (filter.op === 'eq') {
      and.push({ [filter.col]: filter.v })
    }
  }

  if (and.length === 1) return and[0]
  if (and.length > 1) return { AND: and }
  return where
}

// Backwards-compatible helper name: returns a Prisma `where` clause
export function withFilters<T = any>(_: T, filters: z.infer<typeof filterSchema>) {
  return buildPrismaWhere(filters)
}
