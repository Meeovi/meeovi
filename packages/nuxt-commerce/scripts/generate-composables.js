import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// compute script directory and module root (parent of scripts)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const providersDir = path.join(root, 'src', 'runtime', 'providers')
const outDir = path.join(root, 'src', 'runtime', 'composables', 'generated')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

// cleanup stray duplicate declaration files (*.d.d.ts) left by earlier runs
for (const f of fs.readdirSync(outDir)) {
  if (f.endsWith('.d.d.ts')) {
    try { fs.unlinkSync(path.join(outDir, f)) } catch (e) { }
  }
}

function isProviderName(name) {
  // only accept simple provider file basenames like 'magento' or 'mock'
  // skip generated declaration files or helpers (contain dots or dashes like 'generated-')
  return /^[A-Za-z0-9_-]+$/.test(name) && !['registry', 'types', 'index'].includes(name) && !name.startsWith('generated-') && !name.endsWith('.d')
}

const files = (fs.readdirSync(providersDir) || [])
  .filter(f => f.endsWith('.ts') || f.endsWith('.js'))
  .map(f => f.replace(/\.(ts|js)$/, ''))
  .filter(isProviderName)

for (const name of files) {
  const fnName = `use${name.charAt(0).toUpperCase()}${name.slice(1)}`
  const tsPath = path.join(outDir, `${name}.ts`)
  const dtsPath = path.join(outDir, `${name}.d.ts`)

  const tsContent = `import { useCommerce } from '../useCommerce'
export function ${fnName}(opts?: any) {
  return useCommerce({ provider: '${name}', providerOptions: opts })
}
export default ${fnName}
`

  const dtsContent = `import type { CommerceProvider } from '../providers/types'
export function ${fnName}(opts?: any): { provider: CommerceProvider }
export default ${fnName}
`

  // write only if changed (idempotent)
  if (fs.existsSync(tsPath)) {
    const cur = fs.readFileSync(tsPath, 'utf8')
    if (cur !== tsContent) fs.writeFileSync(tsPath, tsContent, 'utf8')
  } else {
    fs.writeFileSync(tsPath, tsContent, 'utf8')
  }

  if (fs.existsSync(dtsPath)) {
    const cur = fs.readFileSync(dtsPath, 'utf8')
    if (cur !== dtsContent) fs.writeFileSync(dtsPath, dtsContent, 'utf8')
  } else {
    fs.writeFileSync(dtsPath, dtsContent, 'utf8')
  }
}

// write an index that re-exports all generated composables for easier imports
const indexPath = path.join(outDir, 'index.ts')
const indexDtsPath = path.join(outDir, 'index.d.ts')
const exportsTs = files.map(n => `export { default as use${n.charAt(0).toUpperCase()}${n.slice(1)} } from './${n}'`).join('\n') + '\n'
const exportsDts = files.map(n => `export { use${n.charAt(0).toUpperCase()}${n.slice(1)} } from './${n}'`).join('\n') + '\n'
if (fs.existsSync(indexPath)) {
  const cur = fs.readFileSync(indexPath, 'utf8')
  if (cur !== exportsTs) fs.writeFileSync(indexPath, exportsTs, 'utf8')
} else {
  fs.writeFileSync(indexPath, exportsTs, 'utf8')
}
if (fs.existsSync(indexDtsPath)) {
  const cur = fs.readFileSync(indexDtsPath, 'utf8')
  if (cur !== exportsDts) fs.writeFileSync(indexDtsPath, exportsDts, 'utf8')
} else {
  fs.writeFileSync(indexDtsPath, exportsDts, 'utf8')
}

console.log('Generated composables:', files)

// --- generate composables from generated GraphQL documents (magento) ---
const graphqlFile = path.join(root, 'src', 'runtime', 'generated', 'magento', 'graphql.ts')
if (fs.existsSync(graphqlFile)) {
  const gf = fs.readFileSync(graphqlFile, 'utf8')
  // find exported Document constants: export const XDocument = gql`
  const docRe = /export\s+const\s+(\\w+?)Document\s*=\s*gql`/g
  const docs = new Set()
  let m
  while ((m = docRe.exec(gf)) !== null) {
    const base = m[1]
    docs.add(base)
  }

  const graphqlExports = []
  for (const base of Array.from(docs)) {
    const safeName = base.replace(/[^A-Za-z0-9]/g, '')
    const fnName = `use${safeName}`
    const fileName = `${safeName}.ts`
    const filePath = path.join(outDir, fileName)

    const content = `// @ts-nocheck\nimport { useGqlQuery } from '../useGqlQuery'\nimport { ${safeName}Document, type ${safeName}Query, type ${safeName}QueryVariables } from '../generated/magento/graphql'\n\nexport function ${fnName}(variables?: ${safeName}QueryVariables, options?: any) {\n  return useGqlQuery<${safeName}Query, ${safeName}QueryVariables>(${safeName}Document, variables)\n}\n\nexport function ${fnName}Lazy(variables?: ${safeName}QueryVariables, options?: any) {\n  // Lazy versions can be implemented to call Vue Apollo lazy query if needed\n  return useGqlQuery<${safeName}Query, ${safeName}QueryVariables>(${safeName}Document, variables)\n}\n\nexport default ${fnName}\n`

    if (!fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf8') !== content) {
      fs.writeFileSync(filePath, content, 'utf8')
    }

    graphqlExports.push(`export { default as ${fnName} } from './${safeName}'`)
  }

  if (graphqlExports.length) {
    const prev = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf8') : ''
    const combined = (prev + '\n' + graphqlExports.join('\n') + '\n').trim() + '\n'
    if (prev !== combined) fs.writeFileSync(indexPath, combined, 'utf8')
  }
}
