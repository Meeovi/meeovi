import type { MappingDefinition } from './types'

// Map Magento `Customer` → Directus `profiles`
export const magentoToDirectusCustomerMapping: MappingDefinition = {
  id: 'email',
  username: 'email',
  slug: 'email',
  birth_date: 'date_of_birth',
  company: 'company',
  description: 'taxvat',
  // basic name fields (Directus `profiles` may use `username` and `user` relations)
  username_display: {
    __path: 'email',
    __default: '',
  },
}
