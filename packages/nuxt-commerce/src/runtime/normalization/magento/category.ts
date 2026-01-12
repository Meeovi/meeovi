import type { CommerceCategory, Image } from '../../types'

/**
 * Normalize Magento category data to standard CommerceCategory format
 */
export function normalizeMagentoCategory(magentoCategory: any): CommerceCategory {
  const image: Image | undefined = magentoCategory.image
    ? {
        url: magentoCategory.image,
        alt: magentoCategory.name,
      }
    : undefined

  const children: CommerceCategory[] = magentoCategory.children
    ? magentoCategory.children.map((child: any) => normalizeMagentoCategory(child))
    : []

  return {
    id: String(magentoCategory.id || magentoCategory.uid),
    name: magentoCategory.name,
    slug: magentoCategory.url_key,
    description: magentoCategory.description,
    image,
    parentId: magentoCategory.parent_id ? String(magentoCategory.parent_id) : undefined,
    children: children.length > 0 ? children : undefined,
    productCount: magentoCategory.product_count,
    path: magentoCategory.url_path,
    level: magentoCategory.level,
  }
}
