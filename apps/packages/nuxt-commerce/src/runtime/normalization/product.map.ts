import type { MappingDefinition } from './types'

export const magentoToDirectusProductMapping: MappingDefinition = {
  id: 'id',
  name: 'name',

  image: {
    filename_disk: 'swatch_image',
  },

  rating: {
    __path: 'rating_summary',
    __default: 0,
  },

  brands: {
    __each: {
      __from: 'brands', // provider will build `brands` array
      __map: {
        brands_id: {
          name: 'name',
          slug: 'slug',
        },
      },
    },
  },

  currency: {
    __each: {
      __from: 'currencies',
      __map: {
        currency_id: {
          symbol: 'symbol',
        },
      },
    },
  },

  price: 'price',
}
