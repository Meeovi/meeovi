import type {
  MappingDefinition,
  MappingValue,
  MappingLeafConfig,
  MappingEachWrapper,
  PathExpression,
} from './types'

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const getPath = (obj: unknown, path?: PathExpression): unknown => {
  if (obj == null) return undefined
  if (!path) return obj

  const parts = path
    .replace(/\[(\d+)\]/g, '.$1') // [0] -> .0
    .split('.')
    .filter(Boolean)

  let current: unknown = obj
  for (const part of parts) {
    if (current == null) return undefined
    if (Array.isArray(current)) {
      const idx = Number(part)
      if (!Number.isNaN(idx)) {
        current = current[idx]
        continue
      }
      return undefined
    }

    if (isPlainObject(current)) {
      current = (current as Record<string, unknown>)[part]
      continue
    }

    return undefined
  }
  return current
}

const isEachWrapper = (value: MappingValue): value is MappingEachWrapper =>
  isPlainObject(value) && '__each' in value

const isLeafConfig = (value: MappingValue): value is MappingLeafConfig =>
  isPlainObject(value) && ('__path' in value || '__default' in value)

/**
 * Core normalize function (recursive)
 */
export const normalizeWithMapping = <TOutput = unknown>(
  mapping: MappingDefinition,
  source: unknown,
): TOutput => {
  const result: Record<string, unknown> = {}

  for (const [targetKey, rule] of Object.entries(mapping)) {
    // 1) string path → direct field mapping
    if (typeof rule === 'string') {
      result[targetKey] = getPath(source, rule)
      continue
    }

    // 2) array mapping
    if (isEachWrapper(rule)) {
      const eachConfig = rule.__each
      const sourceArray = getPath(source, eachConfig.__from)
      const arr = Array.isArray(sourceArray) ? (sourceArray as unknown[]) : []
      result[targetKey] = arr.map(item =>
        normalizeWithMapping(eachConfig.__map, item),
      )
      continue
    }

    // 3) leaf config with __path / __default
    if (isLeafConfig(rule)) {
      const value = rule.__path != null ? getPath(source, rule.__path) : undefined
      result[targetKey] = value !== undefined && value !== null ? value : rule.__default
      continue
    }

    // 4) nested object mapping
    if (isPlainObject(rule)) {
      result[targetKey] = normalizeWithMapping(
        rule as MappingDefinition,
        source,
      )
      continue
    }

    // 5) fallback
    result[targetKey] = rule as unknown
  }

  return result as unknown as TOutput
}
