// types/componentMap.ts
// Typed central place for space content component loaders
import type { DefineComponent } from 'vue'

export type AsyncComponentLoader = () => Promise<DefineComponent | { default: DefineComponent } | any>

export const componentMap: AsyncComponentLoader[] = [
  () => import('../../layers/social-app/app/components/features/spaceSections/defaultSpaces.vue'),
  () => import('../../layers/social-app/app/components/features/spaceSections/audioSpaces.vue'),
  () => import('../../layers/social-app/app/components/features/spaceSections/videoSpaces.vue'),
  () => import('../../layers/social-app/app/components/features/spaceSections/imageSpaces.vue'),
  () => import('../../layers/social-app/app/components/features/spaceSections/textSpaces.vue'),
]

export default componentMap
