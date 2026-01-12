import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module '#imports' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}