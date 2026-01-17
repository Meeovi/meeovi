import { prisma } from '../utils/db'
import type { directus_files as DirectusFile } from '../../prisma/generated/models/directus_files'
import type { Prisma } from '../../prisma/generated/client'
import { v7 as uuidv7 } from 'uuid'

export type FileRecord = DirectusFile

export const createFile = async (input: {
  originalName: string
  fileName: string
  mimeType: string
  fileType: string
  size: number
  path: string
  url?: string | null
  storageProvider: string
  uploadedBy?: string | null
  isActive?: boolean
}) => {
  const id = uuidv7()
  // Map to `directus_files` fields
  const data: Prisma.directus_filesCreateInput = {
    id,
    filename_disk: input.fileName,
    filename_download: input.originalName,
    type: input.mimeType,
    filesize: BigInt(input.size as number) as any,
    storage: input.storageProvider,
    uploaded_by: input.uploadedBy ?? null,
    description: input.fileType,
    location: input.path,
    url: input.url ?? null,
    is_public: input.isActive ?? true
  } as any

  return prisma.directus_files.create({ data })
}

export const getFileById = async (id: string) => {
  return prisma.directus_files.findUnique({ where: { id } })
}

export const deleteFileById = async (id: string) => {
  return prisma.directus_files.delete({ where: { id } })
}

export const getFilesByUser = async (userId: string, limit = 50, offset = 0) => {
  return prisma.directus_files.findMany({ where: { uploaded_by: userId, is_public: true }, take: limit, skip: offset, orderBy: { uploaded_on: 'desc' } })
}