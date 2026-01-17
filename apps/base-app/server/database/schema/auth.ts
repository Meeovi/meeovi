import { prisma } from '../../utils/db'
import type { usersModel as User } from '../../prisma/generated/models/users'
import type { usersCreateInput } from '../../prisma/generated/models/users'

/**
 * This module replaces the previous drizzle-orm table definitions with Prisma.
 * It exports a `prisma` client instance and the generated `User` type alias
 * so other code can import types from here. Note: other modules that relied
 * on drizzle `pgTable` column builders (e.g. `user.id`) will need to be
 * updated to use Prisma queries or the generated models.
 */
export { prisma }

export type { User }

export type UserCreateInput = usersCreateInput

export const getUserById = async (id: string) => {
  return prisma.users.findUnique({ where: { id } })
}

export const createUser = async (data: UserCreateInput) => {
  return prisma.users.create({ data: data as any })
}
