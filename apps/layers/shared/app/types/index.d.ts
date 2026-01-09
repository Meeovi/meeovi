import type { BlobObject } from '@nuxthub/core'
import type { Ref } from 'vue'

export interface FilePlugin {
  getImages: () => Promise<void>
  images: Ref<BlobObject[]>
  uploadImage: (image: File, filter?: boolean) => Promise<void>
  deleteImage: (pathname: string) => Promise<void>
}