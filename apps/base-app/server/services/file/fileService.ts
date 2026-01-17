import type { Buffer } from 'node:buffer'
import type { StorageProvider } from './types'
import { extname } from 'node:path'
import { format } from 'date-fns'
import { v7 as uuidv7 } from 'uuid'
import { logAuditEvent } from '../../utils/auditLogger'
import { useRuntimeConfig, createError } from '#imports'
import { prisma } from '../../utils/db'
import { formatFileSize } from '../../../shared/utils/format'

type FileRecord = {
  id: string
  originalName: string
  fileName: string
  mimeType: string
  fileType: string
  size: number
  path: string
  url?: string | null
  storageProvider: string
  uploadedBy?: string | null
  isActive: boolean
  createdAt?: Date
}

export const useFileManagerConfig = () => {
  const config = useRuntimeConfig().fileManager
  if (!config) {
    throw createError({
      statusCode: 500,
      statusMessage: 'File manager configuration not found'
    })
  }
  return config
}

const getFileTypeFromMimeType = (mimeType: string) => {
  if (mimeType.startsWith('image/'))
    return 'image'
  if (mimeType.startsWith('video/'))
    return 'video'
  if (mimeType.startsWith('audio/'))
    return 'audio'
  if (mimeType.startsWith('text'))
    return 'text'
  if (mimeType.startsWith('application/'))
    return 'application'
  return 'other'
}

export class FileService {
  private storage: StorageProvider

  constructor(storage: StorageProvider) {
    this.storage = storage
  }

  private generateFileName(originalName: string): string {
    const fileId = uuidv7()
    const ext = extname(originalName)

    const dateFolder = format(new Date(), 'yyyy-MM-dd')

    const fileName = `${fileId}${ext}`

    // YYYY-MM-DD/uuid.ext
    return `${dateFolder}/${fileName}`
  }

  async uploadFile(
    fileBuffer: Buffer,
    originalName: string,
    mimeType: string,
    uploadedBy?: string,
    ipAddress?: string,
    userAgent?: string
  ): Promise<FileRecord> {
    const fileId = uuidv7()
    const fileName = this.generateFileName(originalName)
    const fileType = getFileTypeFromMimeType(mimeType)

    try {
      const { path, url } = await this.storage.upload(fileBuffer, fileName, mimeType)

      const fileData = {
        id: fileId,
        filename_download: originalName,
        filename_disk: fileName,
        type: mimeType,
        description: fileType,
        filesize: BigInt(fileBuffer.length) as any,
        location: path,
        url: url ?? null,
        storage: this.storage.name,
        uploaded_by: uploadedBy ?? null,
        is_public: true
      }

      const fileRecord = await prisma.directus_files.create({ data: fileData as any })
      if (!fileRecord) throw createError({ statusCode: 500, message: 'Failed to create file record' })

      await logAuditEvent({
        userId: uploadedBy,
        category: 'file',
        action: 'upload',
        targetType: 'file',
        targetId: fileRecord.id,
        ipAddress,
        userAgent,
        status: 'success',
        details: JSON.stringify({
          originalName,
          fileName,
          mimeType,
          size: formatFileSize(fileBuffer.length),
          storageProvider: this.storage.name
        })
      })

      return fileRecord
    } catch (error) {
      await logAuditEvent({
        userId: uploadedBy,
        category: 'file',
        action: 'upload',
        targetType: 'file',
        ipAddress,
        userAgent,
        status: 'failure',
        details: JSON.stringify({
          originalName,
          mimeType,
          size: formatFileSize(fileBuffer.length),
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      })
      throw error
    }
  }

  async getFile(id: string): Promise<FileRecord | null> {
    try {
      const fileRecord = await prisma.directus_files.findUnique({ where: { id } })
      return (fileRecord as any) || null
    } catch {
      return null
    }
  }

  async deleteFile(id: string, userId?: string, ipAddress?: string, userAgent?: string): Promise<boolean> {
    const file = await this.getFile(id)

    if (!file) {
      return false
    }

    try {
      await this.storage.delete(file.path)
    } catch (error) {
      console.error('Failed to delete file from storage:', error)
    }

    await prisma.directus_files.delete({ where: { id } })

    await logAuditEvent({
      userId,
      category: 'file',
      action: 'delete',
      targetType: 'file',
      targetId: id,
      ipAddress,
      userAgent,
      status: 'success',
      details: JSON.stringify({
        originalName: file.originalName,
        fileName: file.fileName,
        mimeType: file.mimeType,
        size: file.size
      })
    })

    return true
  }

  async getFilesByUser(userId: string, limit = 50, offset = 0): Promise<FileRecord[]> {
    return await prisma.directus_files.findMany({ where: { uploaded_by: userId, is_public: true }, take: limit, skip: offset, orderBy: { uploaded_on: 'desc' } }) as any
  }
}
