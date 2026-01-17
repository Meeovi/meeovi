import { prisma } from '../../utils/db'

export type LogAuditEventInput = {
  userId?: string | null
  category: string
  action: string
  targetType?: string | null
  targetId?: string | null
  ipAddress?: string | null
  userAgent?: string | null
  status?: string
  details?: string | null
}

export const logAuditEvent = async (input: LogAuditEventInput) => {
  return prisma.audit_log_entries.create({
    data: {
      user_id: input.userId ?? null,
      category: input.category,
      action: input.action,
      target_type: input.targetType ?? null,
      target_id: input.targetId ?? null,
      ip_address: input.ipAddress ?? null,
      user_agent: input.userAgent ?? null,
      status: input.status ?? 'success',
      details: input.details ?? null
    }
  })
}