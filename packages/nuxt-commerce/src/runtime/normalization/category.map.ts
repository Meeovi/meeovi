import type { MappingDefinition } from './types'

export const magentoToDirectusCategoryMapping: MappingDefinition = {
  id: 'uid',
  name: 'name',
  slug: 'path',
  description: 'description',

  image: {
    filename_disk: 'image',
  },

  thumbnail: {
    filename_disk: 'thumbnail',
  },

  meta_title: 'meta_title',
  meta_description: 'meta_description',
}
