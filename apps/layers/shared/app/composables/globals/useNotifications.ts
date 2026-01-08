import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

export interface Notification {
  id: string
  title: string
  content: string
  date: string
  type: 'order' | 'account' | 'social' | 'system'
  isRead: boolean
  source: 'magento' | 'directus'
  payload?: any
}

export function useNotifications() {
  const notifications = ref<Notification[]>([])
  const unreadCount = ref(0)
  const { $directus, $readItems, $updateItem } = useNuxtApp()

  // Fetch notifications from Directus
  const fetchDirectusNotifications = async () => {
    try {
      const { data } = await useAsyncData('directusNotifications', () => {
        return $directus.request($readItems('notifications', {
          filter: {
            recipient: { _eq: 'current_user' }
          },
          sort: ['-date_created']
        }))
      })
      
      if (data.value) {
        const formattedNotifications = data.value.map((notification: any) => ({
          id: notification.id,
          title: notification.subject,
          content: notification.message,
          date: notification.timestamp,
          type: notification.collection || 'system',
          isRead: notification.status === 'read',
          source: 'directus',
          payload: notification.item
        }))
        notifications.value = [...notifications.value, ...formattedNotifications]
      }
    } catch (error) {
      console.error('Error fetching Directus notifications:', error)
    }
  }

  // Fetch notifications from Magento
  const fetchMagentoNotifications = async () => {
    try {
      // Replace with your Magento API endpoint
      const response = await fetch('/api/magento/notifications')
      const data = await response.json()
      
      const formattedNotifications = data.map((notification: any) => ({
        id: notification.id,
        title: notification.title,
        content: notification.message,
        date: notification.created_at,
        type: notification.type,
        isRead: notification.is_read,
        source: 'magento',
        payload: notification.payload
      }))
      notifications.value = [...notifications.value, ...formattedNotifications]
    } catch (error) {
      console.error('Error fetching Magento notifications:', error)
    }
  }

  // Mark notification as read
  const markAsRead = async (notificationId: string, source: 'magento' | 'directus') => {
    try {
      if (source === 'directus') {
        await $directus.request($updateItem('notifications', notificationId, {
          status: 'read'
        }))
      } else {
        // Update Magento notification
        await fetch(`/api/magento/notifications/${notificationId}/read`, {
          method: 'POST'
        })
      }
      
      // Update local state
      const notification = notifications.value.find(n => n.id === notificationId)
      if (notification) {
        notification.isRead = true
        unreadCount.value = Math.max(0, unreadCount.value - 1)
      }
    } catch (error) {
      console.error('Error marking notification as read:', error)
    }
  }

  // Mark all notifications as read
  const markAllAsRead = async () => {
    try {
      // Update Directus notifications
      await $directus.request($updateItem('notifications', {
        filter: {
          recipient: { _eq: 'current_user' },
          status: { _eq: 'inbox' }
        },
        data: {
          status: 'read'
        }
      }))

      // Update Magento notifications
      await fetch('/api/magento/notifications/read-all', {
        method: 'POST'
      })

      // Update local state
      notifications.value.forEach(notification => {
        notification.isRead = true
      })
      unreadCount.value = 0
    } catch (error) {
      console.error('Error marking all notifications as read:', error)
    }
  }

  // Calculate unread count
  const updateUnreadCount = () => {
    unreadCount.value = notifications.value.filter(n => !n.isRead).length
  }

  onMounted(async () => {
    await Promise.all([
      fetchDirectusNotifications(),
      fetchMagentoNotifications()
    ])
    updateUnreadCount()
  })

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    updateUnreadCount
  }
} 