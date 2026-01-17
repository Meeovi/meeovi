import { logAuditEvent as prismaLogAuditEvent } from '../database/schema/auditLog'

export async function logAuditEvent(data: {
  userId?: string
  category: 'auth' | 'email' | 'payment' | string
  action: string
  targetType?: string
  targetId?: string
  ipAddress?: string
  userAgent?: string
  status?: 'success' | 'failure' | 'pending'
  details?: string
}) {
  try {
    await prismaLogAuditEvent({
      userId: data.userId ?? null,
      category: data.category,
      action: data.action,
      targetType: data.targetType ?? null,
      targetId: data.targetId ?? null,
      ipAddress: data.ipAddress ?? null,
      userAgent: data.userAgent ?? null,
      status: data.status ?? 'success',
      details: data.details ?? null
    })
  } catch (error) {
    console.error('Failed to log audit event:', error)
  }
}
