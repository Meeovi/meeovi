// types/pageComponentMap.ts
// Typed mapping for page name/slug -> async component loader
import type { DefineComponent } from 'vue'
import type { AsyncComponentLoader } from './componentMap'

export const pageComponentMap: Record<string, AsyncComponentLoader> = {
  'meeovi global': () => import('#commerce/app/components/content/pages/meeoviGlobal.vue'),
  'pickup-locations': () => import('#commerce/app/components/content/pages/pickup-locations.vue'),
  'upload center': () => import('../../../../app/components/pages/upload.vue'),
  'memories': () => import('#social/app/components/features/memories.vue'),
  'birthdays-center': () => import('#social/app/components/features/birthdays.vue'),
  'events': () => import('#social/app/components/features/events.vue'),
  'friends': () => import('#social/app/components/features/friends.vue'),
  'hashtags': () => import('#social/app/components/features/hashtags.vue'),
  'feeds': () => import('#social/app/components/features/feeds.vue'),
  'radio': () => import('#social/app/components/features/radio.vue'),
  'media-center': () => import('#social/app/components/features/media.vue'),
  'members': () => import('#social/app/components/features/members.vue'),
  'spaces': () => import('#social/app/components/features/spaces.vue'),
  'vibez': () => import('#social/app/components/features/vibez.vue'),
  'showcases': () => import('#commerce/app/components/content/pages/showcases.vue'),
  'notifications': () => import('../../../../app/components/pages/notifications.vue'),
  'offline': () => import('../../../../app/components/pages/offline.vue'),
  'checkout': () => import('#commerce/app/components/content/pages/checkout.vue'),
  'success': () => import('#commerce/app/components/content/pages/success.vue'),
  'transactions': () => import('#commerce/app/components/sales/transactions.vue'),
  'invoices': () => import('#commerce/app/components/sales/invoices.vue'),
  'orders': () => import('#commerce/app/components/sales/orders.vue'),
  'shipments': () => import('#commerce/app/components/sales/shipments.vue'),
  'incentives': () => import('#commerce/app/components/sales/incentives.vue'),
}

export default pageComponentMap
