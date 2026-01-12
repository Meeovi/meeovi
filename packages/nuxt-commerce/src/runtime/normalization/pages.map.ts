import type { MappingDefinition } from './types'

export const magentoToDirectusPagesMapping: MappingDefinition = {
  id: 'url_key',
  name: 'title',
  slug: 'url_key',
  content: 'content',
  meta_title: 'meta_title',
  meta_description: 'meta_description',

  image: {
    filename_disk: 'image',
  },
}
