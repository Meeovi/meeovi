export type PathExpression = string // e.g. "media_gallery[0].url"

export interface MappingLeafConfig {
  __path?: PathExpression
  __default?: unknown
}

export interface MappingEachConfig {
  __from?: PathExpression // optional, for explicit source array
  __map: MappingDefinition // how to map each item
}

export interface MappingEachWrapper {
  __each: MappingEachConfig
}

export type MappingValue
  = | PathExpression
    | MappingLeafConfig
    | MappingEachWrapper
    | MappingDefinition

export interface MappingDefinition {
  [key: string]: MappingValue
}
