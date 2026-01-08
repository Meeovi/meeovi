import { createDirectus, rest, readItem, readItems } from '@directus/sdk'

export const useBreadcrumbs = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const generateBreadcrumbs = async (categoryId) => {
    const breadcrumbs = []
    let currentId = categoryId

    while (currentId) {
      const category = await client.request(
        readItem('categories', currentId, {
          fields: ['id', 'name', 'slug', 'parent_id']
        })
      )
      
      breadcrumbs.unshift({
        id: category.id,
        name: category.name,
        slug: category.slug,
        url: `/category/${category.slug}`
      })
      
      currentId = category.parent_id
    }

    return [{ name: 'Home', url: '/' }, ...breadcrumbs]
  }

  const getProductBreadcrumbs = async (productId) => {
    const product = await client.request(
      readItem('products', productId, {
        fields: ['name', 'slug', 'category_id']
      })
    )

    const categoryBreadcrumbs = await generateBreadcrumbs(product.category_id)
    
    return [
      ...categoryBreadcrumbs,
      { name: product.name, url: `/product/${product.slug}` }
    ]
  }

  return { generateBreadcrumbs, getProductBreadcrumbs }
}