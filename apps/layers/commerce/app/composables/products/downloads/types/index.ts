export interface DigitalProduct {
  id: string
  name: string
  type: 'file' | 'license' | 'subscription' | 'course'
  fileUrl?: string
  fileSize?: number
  downloadLimit?: number
  expiryDays?: number
  licenseKey?: string
}

export interface Download {
  id: string
  customerId: string
  productId: string
  orderId: string
  downloadUrl: string
  downloadCount: number
  maxDownloads: number
  expiresAt?: Date
  status: 'active' | 'expired' | 'suspended'
}

export interface DownloadLink {
  url: string
  token: string
  expiresAt: Date
  downloadCount: number
}