# Downloads Module

Enterprise digital product delivery system with secure download management and access control.

## Features

- **Digital Product Management** - Files, licenses, courses, subscriptions
- **Secure Download Links** - Time-limited, token-based access
- **Download Limits** - Configurable download restrictions
- **Access Control** - Customer-specific download permissions
- **File Streaming** - Efficient large file delivery
- **Analytics** - Download tracking and reporting

## Quick Start

```typescript
// Create download access
const { createDownload, generateDownloadLink } = useDownloads()
const download = await createDownload(orderId, customerId, productId)
const link = await generateDownloadLink(download.id)

// Customer downloads
const downloads = await getCustomerDownloads(customerId)
```

## Directus Collections

- `digital_products` - Digital product definitions
- `downloads` - Customer download permissions
- `download_logs` - Download activity tracking