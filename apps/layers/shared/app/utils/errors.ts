import { ZodError } from 'zod'
import { isNuxtError, type NuxtError } from 'nuxt/app'

export function isNuxtZodError(err: unknown): err is NuxtError<{ data: ZodError }> {
  return (
    isNuxtError(err)
    && (err.data as { data?: unknown })?.data instanceof ZodError
  )
}