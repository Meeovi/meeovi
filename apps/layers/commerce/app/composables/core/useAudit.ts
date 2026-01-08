import { createDirectus, rest, createItem } from '@directus/sdk'

export const useAudit = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { $auth } = useNuxtApp()

  const logAction = async (action: string, resource: string, resourceId: string, changes?: any) => {
    try {
      await client.request(
        createItem('audit_logs', {
          user_id: $auth.user?.id || null,
          action,
          resource,
          resource_id: resourceId,
          changes: changes ? JSON.stringify(changes) : null,
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      )
    } catch (error) {
      console.error('Error logging audit action:', error)
    }
  }

  const logPriceChange = async (productId: string, oldPrice: number, newPrice: number) => {
    await logAction('price_change', 'products', productId, {
      old_price: oldPrice,
      new_price: newPrice,
      change_amount: newPrice - oldPrice,
      change_percentage: ((newPrice - oldPrice) / oldPrice) * 100
    })
  }

  const logOrderStatusChange = async (orderId: string, oldStatus: string, newStatus: string) => {
    await logAction('status_change', 'orders', orderId, {
      old_status: oldStatus,
      new_status: newStatus
    })
  }

  const getClientIP = async () => {
    try {
      const response = await fetch('/api/client-ip')
      const data = await response.json()
      return data.ip
    } catch {
      return 'unknown'
    }
  }

  return {
    logAction,
    logPriceChange,
    logOrderStatusChange
  }
}