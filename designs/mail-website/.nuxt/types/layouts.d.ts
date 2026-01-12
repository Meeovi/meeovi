import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "website"
declare module '#imports' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}