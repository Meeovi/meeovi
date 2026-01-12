import type { MappingDefinition } from './types'

export const magentoToDirectusCollectionMapping: MappingDefinition = {
  id: 'uid',
  name: 'name',
  description: 'description',

  image: {
    filename_disk: 'image',
  },

  products: {
    __each: {
      __from: 'products.items',
      __map: {
        collections_products_id: {
          products_id: {
            sku: 'sku',
          },
        },
      },
    },
  },
}
