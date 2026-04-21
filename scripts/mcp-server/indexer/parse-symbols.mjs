/**
 * parse-symbols.mjs
 *
 * Build-time parser that walks `src/index.ts`, follows re-exports to each
 * component's origin file, classifies every public symbol, and extracts props
 * from the sibling `interface.ts` file.
 *
 * Uses the TypeScript parser (not the checker) so we don't need full module
 * resolution. Re-export graph traversal is done manually on the AST with
 * simple path math (barrel-style `./path` imports).
 */

import fs from 'fs/promises';
import path from 'path';
import ts from 'typescript';

// Conservative category mapping. Downstream can override via synonyms.
const CATEGORY_MAP = {
  Accordion: 'display', Alert: 'feedback', Button: 'input', Calendar: 'input',
  Cell: 'display', Carousel: 'display', Checkbox: 'input', CoachMark: 'overlay',
  Copy: 'input', Dialog: 'overlay', Divider: 'layout', Drawer: 'overlay',
  Dropdown: 'overlay', Empty: 'feedback', Flex: 'layout', Grid: 'layout',
  Icons: 'display', Input: 'input', Link: 'navigation', Navigation: 'navigation',
  Notification: 'feedback', Pagination: 'navigation', Popconfirm: 'overlay',
  Portal: 'overlay', ProForm: 'forms', Progress: 'feedback', Radio: 'input',
  ResizeObserver: 'misc', Segment: 'input', Select: 'input', Skeleton: 'feedback',
  Slider: 'input', Space: 'layout', Spinner: 'feedback', Step: 'navigation',
  Switch: 'input', Table: 'display', Tabs: 'navigation', Tag: 'display',
  Tooltip: 'overlay', Tour: 'overlay', Trigger: 'overlay', Typography: 'display',
  Upload: 'input', VirtualList: 'display',
};

const LIB_IMPORT = '@1money/component-ui';

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

async function readFileIfExists(filePath) {
  try { return await fs.readFile(filePath, 'utf8'); } catch { return null; }
}

function makeSourceFile(filePath, text) {
  return ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

/** Resolve a relative module specifier to a concrete file. */
async function resolveModulePath(fromFile, specifier) {
  const base = path.resolve(path.dirname(fromFile), specifier);
  const attempts = [base + '.ts', base + '.tsx', path.join(base, 'index.ts'), path.join(base, 'index.tsx')];
  for (const a of attempts) {
    try { await fs.access(a); return a; } catch { /* try next */ }
  }
  return null;
}

/** First JSDoc paragraph/sentence for a node. */
function getLeadingSummary(node, sourceText) {
  const ranges = ts.getLeadingCommentRanges(sourceText, node.getFullStart());
  if (!ranges) return '';
  for (const range of ranges) {
    const raw = sourceText.slice(range.pos, range.end);
    if (!raw.startsWith('/**')) continue;
    const lines = raw.replace(/^\/\*\*/, '').replace(/\*\/$/, '').split('\n')
      .map(l => l.replace(/^\s*\*\s?/, '').trim());
    const out = [];
    for (const line of lines) {
      if (line.startsWith('@')) break;
      if (line === '' && out.length > 0) break;
      if (line === '') continue;
      out.push(line);
    }
    const text = out.join(' ').trim();
    if (!text) continue;
    const m = text.match(/^(.*?[.!?])\s/);
    return m ? m[1].trim() : text;
  }
  return '';
}

/** Find `@default` tag in a JSDoc block attached to a node. */
function getJsDocDefault(node, sourceText) {
  const ranges = ts.getLeadingCommentRanges(sourceText, node.getFullStart());
  if (!ranges) return null;
  for (const range of ranges) {
    const raw = sourceText.slice(range.pos, range.end);
    if (!raw.startsWith('/**')) continue;
    const m = raw.match(/@default(?:Value)?\s+([^\n*]+)/);
    if (m) return m[1].trim();
  }
  return null;
}

function isUppercaseFirst(name) {
  const c = name[0];
  return c && c === c.toUpperCase() && c !== c.toLowerCase();
}
function isHookName(name) { return /^use[A-Z]/.test(name); }

function toRelPath(repoRoot, abs) {
  return path.relative(repoRoot, abs).split(path.sep).join('/');
}

function getComponentFolder(repoRoot, absPath) {
  const rel = toRelPath(repoRoot, absPath);
  const m = rel.match(/^src\/components\/([^/]+)\//);
  return m ? m[1] : null;
}

// ---------------------------------------------------------------------------
// src/index.ts → public export map
// ---------------------------------------------------------------------------

/** Returns Map<exportedName, { originPath, isType, sourceName }>. */
async function collectPublicExports(indexFile) {
  const text = await fs.readFile(indexFile, 'utf8');
  const source = makeSourceFile(indexFile, text);
  const exports = new Map();
  for (const stmt of source.statements) {
    if (!ts.isExportDeclaration(stmt)) continue;
    if (!stmt.moduleSpecifier || !ts.isStringLiteral(stmt.moduleSpecifier)) continue;
    const spec = stmt.moduleSpecifier.text;
    if (!spec.startsWith('.')) continue;
    const originPath = await resolveModulePath(indexFile, spec);
    if (!originPath) continue;
    if (!stmt.exportClause || !ts.isNamedExports(stmt.exportClause)) continue;
    const isType = stmt.isTypeOnly;
    for (const el of stmt.exportClause.elements) {
      const exportedName = el.name.text;
      const sourceName = el.propertyName ? el.propertyName.text : exportedName;
      exports.set(exportedName, { originPath, isType: isType || el.isTypeOnly, sourceName });
    }
  }
  return exports;
}

// ---------------------------------------------------------------------------
// Declaration lookup (follows re-export / import graph)
// ---------------------------------------------------------------------------

function findLocalDeclaration(source, name, sourceText, filePath) {
  for (const stmt of source.statements) {
    if (ts.isVariableStatement(stmt)) {
      for (const decl of stmt.declarationList.declarations) {
        if (ts.isIdentifier(decl.name) && decl.name.text === name) {
          return { declFile: filePath, declNode: decl, statementNode: stmt, sourceText };
        }
      }
    } else if (
      (ts.isFunctionDeclaration(stmt) || ts.isClassDeclaration(stmt)) &&
      stmt.name && stmt.name.text === name
    ) {
      return { declFile: filePath, declNode: stmt, statementNode: stmt, sourceText };
    } else if (
      (ts.isInterfaceDeclaration(stmt) || ts.isTypeAliasDeclaration(stmt)) &&
      stmt.name.text === name
    ) {
      return { declFile: filePath, declNode: stmt, statementNode: stmt, sourceText };
    } else if (ts.isEnumDeclaration(stmt) && stmt.name.text === name) {
      return { declFile: filePath, declNode: stmt, statementNode: stmt, sourceText };
    }
  }
  return null;
}

function isReExportedLocally(source, name) {
  for (const stmt of source.statements) {
    if (!ts.isExportDeclaration(stmt) || stmt.moduleSpecifier) continue;
    if (!stmt.exportClause || !ts.isNamedExports(stmt.exportClause)) continue;
    for (const el of stmt.exportClause.elements) {
      const localName = el.propertyName ? el.propertyName.text : el.name.text;
      if (localName === name) return true;
    }
  }
  return false;
}

async function resolveViaImports(source, originPath, name, visited) {
  for (const stmt of source.statements) {
    if (!ts.isImportDeclaration(stmt)) continue;
    if (!stmt.moduleSpecifier || !ts.isStringLiteral(stmt.moduleSpecifier)) continue;
    const spec = stmt.moduleSpecifier.text;
    if (!spec.startsWith('.')) continue;
    const ic = stmt.importClause;
    if (!ic) continue;
    if (ic.name && ic.name.text === name) {
      const nextPath = await resolveModulePath(originPath, spec);
      if (nextPath) {
        const found = await locateDeclaration(nextPath, 'default', new Set(visited));
        if (found) return found;
      }
    }
    if (ic.namedBindings && ts.isNamedImports(ic.namedBindings)) {
      for (const el of ic.namedBindings.elements) {
        if (el.name.text !== name) continue;
        const importedName = el.propertyName ? el.propertyName.text : el.name.text;
        const nextPath = await resolveModulePath(originPath, spec);
        if (nextPath) {
          const found = await locateDeclaration(nextPath, importedName, new Set(visited));
          if (found) return found;
        }
      }
    }
  }
  return null;
}

async function resolveDefaultExport(source, originPath, text, visited) {
  for (const stmt of source.statements) {
    // `export default <identifier>`
    if (ts.isExportAssignment(stmt) && ts.isIdentifier(stmt.expression)) {
      const expr = stmt.expression;
      const inner = findLocalDeclaration(source, expr.text, text, originPath);
      if (inner) return inner;
      const viaImport = await resolveViaImports(source, originPath, expr.text, visited);
      if (viaImport) return viaImport;
    }
    // `export default function Foo()` / `export default class Foo`
    const hasDefault = stmt.modifiers?.some(m => m.kind === ts.SyntaxKind.DefaultKeyword);
    if (hasDefault && (ts.isFunctionDeclaration(stmt) || ts.isClassDeclaration(stmt)) && stmt.name) {
      return { declFile: originPath, declNode: stmt, statementNode: stmt, sourceText: text };
    }
  }
  return null;
}

async function locateDeclaration(originPath, name, visited = new Set()) {
  if (visited.has(originPath)) return null;
  visited.add(originPath);
  const text = await readFileIfExists(originPath);
  if (text == null) return null;
  const source = makeSourceFile(originPath, text);

  // 1) Direct declaration in this file.
  const localMatch = findLocalDeclaration(source, name, text, originPath);
  if (localMatch) {
    const hasExportMod = localMatch.statementNode.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
    if (hasExportMod) return localMatch;
    if (isReExportedLocally(source, name)) return localMatch;
  }

  // 2) Module-specifier re-exports.
  for (const stmt of source.statements) {
    if (!ts.isExportDeclaration(stmt)) continue;
    if (!stmt.moduleSpecifier || !ts.isStringLiteral(stmt.moduleSpecifier)) continue;
    const spec = stmt.moduleSpecifier.text;
    if (!spec.startsWith('.')) continue;
    const nextPath = await resolveModulePath(originPath, spec);
    if (!nextPath) continue;
    if (stmt.exportClause && ts.isNamedExports(stmt.exportClause)) {
      for (const el of stmt.exportClause.elements) {
        if (el.name.text !== name) continue;
        const importedName = el.propertyName ? el.propertyName.text : el.name.text;
        const found = await locateDeclaration(nextPath, importedName, new Set(visited));
        if (found) return found;
      }
    } else if (!stmt.exportClause) {
      // `export * from './path'`
      const found = await locateDeclaration(nextPath, name, new Set(visited));
      if (found) return found;
    }
  }

  // 3) `import X from './path'; export { X }` patterns.
  if (isReExportedLocally(source, name)) {
    const viaImport = await resolveViaImports(source, originPath, name, visited);
    if (viaImport) return viaImport;
  }

  // 4) Default export chains.
  if (name === 'default') {
    const fromDefault = await resolveDefaultExport(source, originPath, text, visited);
    if (fromDefault) return fromDefault;
  }

  // 5) Fallback local match.
  return localMatch || null;
}

// ---------------------------------------------------------------------------
// Object.assign / signature detection
// ---------------------------------------------------------------------------

function detectObjectAssignMembers(decl) {
  if (!ts.isVariableDeclaration(decl)) return null;
  let init = decl.initializer;
  // Unwrap `as X` / `<X>x` / parens / satisfies.
  while (init && (
    ts.isAsExpression(init) || ts.isTypeAssertionExpression(init) ||
    ts.isParenthesizedExpression(init) ||
    (ts.isSatisfiesExpression && ts.isSatisfiesExpression(init))
  )) {
    init = init.expression;
  }
  if (!init || !ts.isCallExpression(init)) return null;
  const expr = init.expression;
  const isObjectAssign = ts.isPropertyAccessExpression(expr) &&
    ts.isIdentifier(expr.expression) &&
    expr.expression.text === 'Object' && expr.name.text === 'assign';
  if (!isObjectAssign) return null;
  const members = {};
  for (let i = 1; i < init.arguments.length; i++) {
    const arg = init.arguments[i];
    if (!ts.isObjectLiteralExpression(arg)) continue;
    for (const prop of arg.properties) {
      if (ts.isPropertyAssignment(prop)) {
        const key = (prop.name && (ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name)))
          ? prop.name.text : null;
        if (!key) continue;
        members[key] = ts.isIdentifier(prop.initializer)
          ? prop.initializer.text : prop.initializer.getText();
      } else if (ts.isShorthandPropertyAssignment(prop)) {
        members[prop.name.text] = prop.name.text;
      }
    }
  }
  return members;
}

function extractFunctionSignature(fn) {
  const params = fn.parameters.map(p => p.getText()).join(', ');
  const ret = fn.type ? `: ${fn.type.getText()}` : '';
  return `(${params})${ret}`;
}

function extractVariableSignature(decl) {
  if (!decl.initializer) return '';
  const init = decl.initializer;
  if (ts.isArrowFunction(init) || ts.isFunctionExpression(init)) {
    const params = init.parameters.map(p => p.getText()).join(', ');
    const ret = init.type ? `: ${init.type.getText()}` : '';
    return `(${params})${ret}`;
  }
  if (decl.type) return decl.type.getText();
  return '';
}

function getDeclKindAndDetails(name, found) {
  const { declNode, statementNode, sourceText } = found;
  const summary = getLeadingSummary(statementNode, sourceText);

  if (ts.isTypeAliasDeclaration(declNode)) {
    return { kind: 'type', summary, typeText: declNode.type ? declNode.type.getText() : '' };
  }
  if (ts.isInterfaceDeclaration(declNode)) {
    const extendsClause = declNode.heritageClauses
      ?.filter(c => c.token === ts.SyntaxKind.ExtendsKeyword)
      .flatMap(c => c.types.map(t => t.getText())) || [];
    const typeText = extendsClause.length
      ? `interface ${declNode.name.text} extends ${extendsClause.join(', ')} { ... }`
      : `interface ${declNode.name.text} { ... }`;
    return { kind: 'type', summary, typeText };
  }
  if (ts.isFunctionDeclaration(declNode)) {
    const signature = extractFunctionSignature(declNode);
    const kind = isHookName(name) ? 'hook' : (isUppercaseFirst(name) ? 'component' : 'function');
    return { kind, summary, signature };
  }
  if (ts.isClassDeclaration(declNode)) {
    return { kind: 'component', summary };
  }
  if (ts.isVariableDeclaration(declNode)) {
    const members = detectObjectAssignMembers(declNode);
    if (members) return { kind: 'module', summary, memberMap: members };
    if (isHookName(name)) return { kind: 'hook', summary, signature: extractVariableSignature(declNode) };
    if (isUppercaseFirst(name)) return { kind: 'component', summary };
    return { kind: 'function', summary, signature: extractVariableSignature(declNode) };
  }
  return { kind: 'function', summary };
}

// ---------------------------------------------------------------------------
// Props extraction from <ComponentName>Props interface
// ---------------------------------------------------------------------------

async function extractProps(componentName, originPath) {
  const dir = path.dirname(originPath);
  const interfaceName = `${componentName}Props`;
  for (const candidate of [path.join(dir, 'interface.ts'), path.join(dir, 'interface.tsx')]) {
    const text = await readFileIfExists(candidate);
    if (text == null) continue;
    const source = makeSourceFile(candidate, text);
    const result = findInterfaceInSource(source, interfaceName, text);
    if (result) return result;
  }
  return { props: [], extends: [], summary: '' };
}

function findInterfaceInSource(source, interfaceName, sourceText) {
  for (const stmt of source.statements) {
    if (ts.isInterfaceDeclaration(stmt) && stmt.name.text === interfaceName) {
      return buildPropsFromInterface(stmt, sourceText);
    }
    if (ts.isTypeAliasDeclaration(stmt) && stmt.name.text === interfaceName) {
      const summary = getLeadingSummary(stmt, sourceText);
      if (stmt.type && ts.isTypeLiteralNode(stmt.type)) {
        const props = stmt.type.members.filter(ts.isPropertySignature)
          .map(m => readPropertySignature(m, sourceText));
        return { props, extends: [], summary };
      }
      return { props: [], extends: [stmt.type.getText()], summary };
    }
  }
  return null;
}

function buildPropsFromInterface(decl, sourceText) {
  const summary = getLeadingSummary(decl, sourceText);
  const extendsList = [];
  for (const clause of decl.heritageClauses || []) {
    if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
      for (const t of clause.types) extendsList.push(t.getText());
    }
  }
  const props = decl.members.filter(ts.isPropertySignature)
    .map(m => readPropertySignature(m, sourceText));
  return { props, extends: extendsList, summary };
}

function readPropertySignature(member, sourceText) {
  const name = (ts.isIdentifier(member.name) || ts.isStringLiteral(member.name))
    ? member.name.text : member.name.getText();
  return {
    name,
    type: member.type ? member.type.getText() : 'unknown',
    optional: member.questionToken !== undefined,
    default: getJsDocDefault(member, sourceText),
    description: getLeadingSummary(member, sourceText),
    inheritedFrom: null,
  };
}

// ---------------------------------------------------------------------------
// Subpath import lookup
// ---------------------------------------------------------------------------

async function loadSubpathIndex(repoRoot) {
  const pkgRaw = await fs.readFile(path.join(repoRoot, 'package.json'), 'utf8');
  const pkg = JSON.parse(pkgRaw);
  const byFolder = new Map();
  for (const [key, value] of Object.entries(pkg.exports || {})) {
    if (!key.startsWith('./') || key === '.' || key === './index.css') continue;
    const entry = (typeof value === 'object' && value !== null) ? (value.import || value.types) : null;
    if (typeof entry !== 'string') continue;
    const m = entry.match(/components\/([^/]+)\//);
    if (!m) continue;
    if (!byFolder.has(m[1])) byFolder.set(m[1], `${LIB_IMPORT}${key.slice(1)}`);
  }
  return byFolder;
}

// ---------------------------------------------------------------------------
// Entrypoint
// ---------------------------------------------------------------------------

export async function parseSymbols({ repoRoot }) {
  if (!repoRoot) throw new Error('parseSymbols: repoRoot is required');
  const indexFile = path.join(repoRoot, 'src', 'index.ts');
  const publicExports = await collectPublicExports(indexFile);
  const subpathByFolder = await loadSubpathIndex(repoRoot);

  // Flat exports grouped by component folder (for relatedSymbols).
  const folderExportNames = new Map();
  for (const [name, info] of publicExports) {
    const folder = getComponentFolder(repoRoot, info.originPath);
    if (!folder) continue;
    if (!folderExportNames.has(folder)) folderExportNames.set(folder, []);
    folderExportNames.get(folder).push(name);
  }

  const records = [];
  for (const [name, info] of publicExports) {
    const record = await buildSymbolRecord({
      repoRoot, name, info, folderExportNames, subpathByFolder, publicExports,
    });
    if (record) records.push(record);
  }

  records.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  return records;
}

async function buildSymbolRecord({ repoRoot, name, info, folderExportNames, subpathByFolder, publicExports }) {
  const found = await locateDeclaration(info.originPath, info.sourceName);
  if (!found) {
    // Declaration not located — emit a minimal record so downstream tools still see it.
    return {
      name,
      kind: info.isType ? 'type' : 'function',
      category: 'misc',
      summary: '',
      importPath: LIB_IMPORT,
      subpathImport: null,
      sourceFile: toRelPath(repoRoot, info.originPath),
      props: [],
      extends: [],
      relatedSymbols: [],
      searchTags: [],
    };
  }

  const folder = getComponentFolder(repoRoot, found.declFile) ||
    getComponentFolder(repoRoot, info.originPath);
  const category = folder && CATEGORY_MAP[folder] ? CATEGORY_MAP[folder] : 'misc';
  const subpathImport = folder && subpathByFolder.has(folder) ? subpathByFolder.get(folder) : null;
  const sourceFile = toRelPath(repoRoot, found.declFile);

  const details = getDeclKindAndDetails(name, found);

  // Icons is a namespace-like module whose members are string keys (IconList),
  // handled by the icon parser. Promote to module with empty memberMap.
  if (!info.isType && name === 'Icons' && details.kind === 'component') {
    details.kind = 'module';
    details.memberMap = {};
  }

  // When Object.assign attaches only sibling flat exports (e.g. Grid.Row →
  // Row, Checkbox.Group → CheckboxGroup), treat as plain component instead of
  // module. Real modules (like ProForm) have at least one local-only member.
  if (
    !info.isType && details.kind === 'module' &&
    details.memberMap && Object.keys(details.memberMap).length > 0 &&
    Object.values(details.memberMap).every(v => publicExports.has(v))
  ) {
    details.kind = 'component';
    delete details.memberMap;
  }

  const kind = info.isType ? 'type' : details.kind;

  let relatedSymbols = [];
  if (folder && folderExportNames.has(folder)) {
    relatedSymbols = folderExportNames.get(folder).filter(n => n !== name).sort();
  }

  const record = {
    name, kind, category, summary: details.summary || '',
    importPath: LIB_IMPORT, subpathImport, sourceFile,
    props: [], extends: [], relatedSymbols, searchTags: [],
  };

  if (kind === 'component' || kind === 'module') {
    const { props, extends: ext, summary: ifaceSummary } = await extractProps(name, info.originPath);
    record.props = props;
    record.extends = ext;
    if (!record.summary && ifaceSummary) record.summary = ifaceSummary;
  }
  if (kind === 'module') {
    const raw = details.memberMap || {};
    const memberMap = {};
    for (const [key, value] of Object.entries(raw)) {
      memberMap[key] = publicExports.has(value) ? value : `$local:${value}`;
    }
    record.memberMap = memberMap;
  }
  if (kind === 'type' && details.typeText) record.typeText = details.typeText;
  if ((kind === 'hook' || kind === 'function') && details.signature) record.signature = details.signature;

  return record;
}
