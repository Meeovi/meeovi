import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'
import { LocalFileProvider } from '../providers/base'
import type { Download, DigitalProduct } from '../types'

export const useDownloads = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const provider = new LocalFileProvider()

  const createDownload = async (orderId: string, customerId: string, productId: string): Promise<Download> => {
    const product = await client.request(
      readItems('digital_products', { filter: { id: { _eq: productId } } })
    )

    const download = await client.request(createItem('downloads', {
      customer_id: customerId,
      product_id: productId,
      order_id: orderId,
      download_count: 0,
      max_downloads: product[0]?.download_limit || 5,
      expires_at: product[0]?.expiry_days ? 
        new Date(Date.now() + product[0].expiry_days * 24 * 60 * 60 * 1000) : null,
      status: 'active'
    }))

    return download
  }

  const generateDownloadLink = async (downloadId: string) => {
    const downloads = await client.request(
      readItems('downloads', { filter: { id: { _eq: downloadId } } })
    )
    
    if (!downloads.length || downloads[0].status !== 'active') return null
    
    const download = downloads[0]
    if (download.download_count >= download.max_downloads) return null
    
    return await provider.generateDownloadLink(download)
  }

  const processDownload = async (token: string) => {
    const download = await provider.validateDownload(token)
    if (!download) return null

    await client.request(updateItem('downloads', download.id, {
      download_count: download.downloadCount + 1,
      last_downloaded: new Date()
    }))

    await provider.trackDownload(download.id)
    return download
  }

  const getCustomerDownloads = async (customerId: string) => {
    return await client.request(
      readItems('downloads', {
        filter: { customer_id: { _eq: customerId } },
        fields: ['*', 'product.*', 'order.*']
      })
    )
  }

  const revokeDownload = async (downloadId: string) => {
    await client.request(updateItem('downloads', downloadId, { status: 'suspended' }))
    return await provider.revokeAccess(downloadId)
  }

  return {
    createDownload,
    generateDownloadLink,
    processDownload,
    getCustomerDownloads,
    revokeDownload
  }
}