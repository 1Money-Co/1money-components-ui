/**
 * generate-canonical.mjs
 *
 * Produces `canonicalUsage` snippets for every symbol in the MCP index.
 *
 * Priority per symbol:
 *   1. Manual: `src/components/<Folder>/<SymbolName>.canonical.md` (specific)
 *   2. Manual: `src/components/<Folder>/canonical.md` (shared for folder)
 *   3. README: first fenced block in `src/components/<Folder>/README.md`
 *   4. Auto-skeleton: built from required props (components/hooks/functions only)
 *
 * Modules (`kind: 'module'`) MUST use manual canonical. If missing, we emit a
 * diagnostic (not a thrown error — v1 relaxation) and skip the symbol.
 *
 * Every emitted snippet is asserted to be <= 240 characters. Manual content that
 * exceeds the limit is dropped with a diagnostic (never truncated). Auto-skeletons
 * that can't fit within the budget are truncated to the first 3 required props;
 * still-too-long skeletons are dropped with a diagnostic.
 */

import fs from 'fs/promises';
import path from 'path';

const MAX_SNIPPET_LENGTH = 240;

// Max required props to include in a skeleton before truncating.
const SKELETON_PROP_LIMIT = 3;

const TRUNCATION_NOTE = '{/* ...more required props */}';

const FENCED_BLOCK_RE = /^```(?:jsx|tsx|js|javascript|ts|typescript)?\s*\r?\n([\s\S]*?)^```/m;
const FENCED_BLOCK_RE_G = /^```(?:jsx|tsx|js|javascript|ts|typescript)?\s*\r?\n([\s\S]*?)^```/gm;

/**
 * A block is "import-only" when every non-blank line is an import or export
 * statement — those are not usable as standalone component snippets.
 */
function isImportOnly(body) {
  const lines = body.split(/\r?\n/u).map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return true;
  return lines.every(l => /^(import|export)\b/u.test(l));
}

/**
 * Read a file, returning null if it does not exist. Other errors bubble up.
 */
async function readIfExists(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (err) {
    if (err && err.code === 'ENOENT') return null;
    throw err;
  }
}

/**
 * Extract the first fenced code block body from Markdown content.
 * Returns the trimmed body or null if none found.
 */
export function extractFirstFencedBlock(markdown) {
  if (!markdown) return null;
  const match = markdown.match(FENCED_BLOCK_RE);
  if (!match) return null;
  return match[1].replace(/\s+$/u, '');
}

/**
 * Extract all fenced code blocks from Markdown content, in document order.
 * Returns trimmed bodies; empty list if none found.
 */
export function extractAllFencedBlocks(markdown) {
  if (!markdown) return [];
  const blocks = [];
  for (const match of markdown.matchAll(FENCED_BLOCK_RE_G)) {
    const body = match[1].replace(/\s+$/u, '');
    if (body.length > 0) blocks.push(body);
  }
  return blocks;
}

/**
 * Pick the first fenced block that looks like a usable usage snippet — i.e.,
 * NOT a pure import/export listing. Falls back to the first block if every
 * block is import-only.
 */
export function pickUsageFencedBlock(markdown) {
  const blocks = extractAllFencedBlocks(markdown);
  if (blocks.length === 0) return null;
  const firstUsage = blocks.find(b => !isImportOnly(b));
  return firstUsage ?? null;
}

/**
 * Given a symbol's sourceFile (relative path under repo), determine the
 * top-level folder directly under `src/components/`. This is the owning
 * folder used to locate canonical.md / README.md.
 *
 * Returns null if the symbol does not live under src/components/.
 */
export function resolveOwningFolder(sourceFile) {
  if (!sourceFile) return null;
  const normalized = sourceFile.replace(/\\/gu, '/');
  const m = normalized.match(/^src\/components\/([^/]+)\//u);
  if (!m) return null;
  return `src/components/${m[1]}`;
}

/**
 * Parse a TypeScript type text and produce a best-guess JSX attribute value
 * (or null if we can't represent it cleanly).
 *
 * Returns one of:
 *   { kind: 'attr', text: ' foo="bar"' }   -> attribute to append on the tag
 *   { kind: 'expr', text: '{...}' }        -> JSX expression children
 *   { kind: 'text', text: 'Label' }        -> string children
 *   null                                   -> omit (type too opaque)
 */
function inferAttrValue(name, typeText) {
  const raw = typeText.trim();
  if (!raw) return null;

  // Strip leading readonly/undefined union to simplify matching.
  const normalized = raw
    .replace(/\s*\|\s*undefined\b/gu, '')
    .replace(/\s*\|\s*null\b/gu, '')
    .trim();

  // ReactNode / React.ReactNode / ReactElement variants.
  if (/^(?:React\.)?React(?:Node|Element)\b/u.test(normalized)) {
    return { kind: 'reactNode' };
  }
  // Complex ReactNode unions (e.g., "ReactNode | ((ref: ...) => ReactElement)")
  if (/(?:React\.)?React(?:Node|Element)/u.test(normalized) && normalized.includes('|')) {
    return { kind: 'reactNode' };
  }

  // Pure string literal union: 'primary' | 'secondary'
  if (/^(?:'[^']*'|"[^"]*")(?:\s*\|\s*(?:'[^']*'|"[^"]*"))*$/u.test(normalized)) {
    const first = normalized.match(/'([^']*)'|"([^"]*)"/u);
    const value = first[1] !== undefined ? first[1] : first[2];
    return { kind: 'attrString', value };
  }

  // Pure number literal union: 0 | 1 | 2
  if (/^-?\d+(?:\.\d+)?(?:\s*\|\s*-?\d+(?:\.\d+)?)*$/u.test(normalized)) {
    const first = normalized.match(/-?\d+(?:\.\d+)?/u)[0];
    return { kind: 'attrExpr', value: first };
  }

  // Primitive string.
  if (normalized === 'string') {
    // Use the prop name as a hint where possible.
    return { kind: 'attrString', value: defaultStringForName(name) };
  }

  // Primitive number.
  if (normalized === 'number') {
    return { kind: 'attrExpr', value: '0' };
  }

  // Primitive boolean.
  if (normalized === 'boolean') {
    return { kind: 'attrBoolean' };
  }

  // Function-type heuristic: contains `=>`.
  if (/=>/u.test(normalized)) {
    return { kind: 'attrExpr', value: '() => {}' };
  }

  // Array types (e.g., AccordionItem[], string[]) -> empty array literal.
  if (/\[\]$/u.test(normalized) || /^Array<.+>$/u.test(normalized) || /^ReadonlyArray<.+>$/u.test(normalized)) {
    return { kind: 'attrExpr', value: '[]' };
  }

  // Opaque type: omit.
  return null;
}

function defaultStringForName(name) {
  const lower = String(name || '').toLowerCase();
  if (/email/u.test(lower)) return 'email';
  if (/name$/u.test(lower)) return 'name';
  if (/value$/u.test(lower)) return 'value';
  if (/label/u.test(lower)) return 'Label';
  if (/title/u.test(lower)) return 'Title';
  if (/placeholder/u.test(lower)) return 'Placeholder';
  if (/id$/u.test(lower)) return 'id';
  if (/url|src|href/u.test(lower)) return '/path';
  return 'text';
}

/**
 * Build a component skeleton from a symbol's required props.
 * Returns a string <= MAX_SNIPPET_LENGTH or null if we cannot produce one.
 */
export function buildComponentSkeleton(symbol) {
  const tag = symbol.name;
  const requiredProps = (symbol.props || []).filter(p => p && p.optional === false);

  if (requiredProps.length === 0) {
    const snippet = `<${tag} />`;
    return snippet.length <= MAX_SNIPPET_LENGTH ? snippet : null;
  }

  // Always truncate to SKELETON_PROP_LIMIT when more required props exist so
  // the snippet stays scannable and signals "more to discover" via the note.
  // The full-props skeleton is only used as a fallback if the truncated form
  // somehow fails (e.g., blown budget from attribute expansion).
  const candidates =
    requiredProps.length > SKELETON_PROP_LIMIT
      ? [
          { props: requiredProps.slice(0, SKELETON_PROP_LIMIT), truncated: true },
          { props: requiredProps, truncated: false },
        ]
      : [{ props: requiredProps, truncated: false }];

  for (const candidate of candidates) {
    const rendered = renderSkeleton(tag, candidate.props, candidate.truncated);
    if (rendered && rendered.length <= MAX_SNIPPET_LENGTH) return rendered;
  }

  // Last resort: bare self-closing tag.
  const bare = `<${tag} />`;
  if (bare.length <= MAX_SNIPPET_LENGTH) return bare;

  return null;
}

function renderSkeleton(tag, props, truncated) {
  const attrs = [];
  let childrenContent = null;

  for (const prop of props) {
    const inferred = inferAttrValue(prop.name, prop.type);
    if (!inferred) continue;

    if (prop.name === 'children') {
      if (inferred.kind === 'reactNode') {
        childrenContent = { kind: 'text', value: 'Label' };
      } else if (inferred.kind === 'attrString') {
        childrenContent = { kind: 'text', value: inferred.value };
      } else if (inferred.kind === 'attrExpr') {
        childrenContent = { kind: 'expr', value: inferred.value };
      } else if (inferred.kind === 'attrBoolean') {
        childrenContent = { kind: 'expr', value: 'true' };
      }
      continue;
    }

    switch (inferred.kind) {
      case 'reactNode':
        attrs.push(`${prop.name}={<span>Label</span>}`);
        break;
      case 'attrString':
        attrs.push(`${prop.name}="${inferred.value}"`);
        break;
      case 'attrExpr':
        attrs.push(`${prop.name}={${inferred.value}}`);
        break;
      case 'attrBoolean':
        attrs.push(prop.name);
        break;
      default:
        break;
    }
  }

  const attrStr = attrs.length > 0 ? ` ${attrs.join(' ')}` : '';
  const suffix = truncated ? ` ${TRUNCATION_NOTE}` : '';

  if (childrenContent) {
    const inner =
      childrenContent.kind === 'text'
        ? childrenContent.value
        : `{${childrenContent.value}}`;
    return `<${tag}${attrStr}>${inner}${suffix ? suffix : ''}</${tag}>`;
  }

  if (truncated) {
    return `<${tag}${attrStr}>${suffix}</${tag}>`;
  }
  return `<${tag}${attrStr} />`;
}

/**
 * Split a parameter list on commas that sit at the outermost bracket depth
 * so nested types like `(a: Array<B, C>, cb: (x: D) => E)` stay intact.
 */
function splitTopLevelParams(paramsText) {
  const params = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < paramsText.length; i += 1) {
    const ch = paramsText[i];
    if (ch === '(' || ch === '<' || ch === '[' || ch === '{') {
      depth += 1;
    } else if (ch === ')' || ch === '>' || ch === ']' || ch === '}') {
      depth = Math.max(0, depth - 1);
    } else if (ch === ',' && depth === 0) {
      params.push(paramsText.slice(start, i));
      start = i + 1;
    }
  }
  params.push(paramsText.slice(start));
  return params;
}

/**
 * Build a skeleton for a hook or function symbol from its signature, if any.
 * Returns a string snippet or null if we cannot produce one.
 */
export function buildCallableSkeleton(symbol) {
  const sig = typeof symbol.signature === 'string' ? symbol.signature.trim() : '';
  const name = symbol.name;

  // If no signature recorded, emit a bare call skeleton.
  if (!sig) {
    const snippet =
      symbol.kind === 'hook' ? `const result = ${name}();` : `${name}();`;
    return snippet.length <= MAX_SNIPPET_LENGTH ? snippet : null;
  }

  // Strip leading "(" through the matching ")" to isolate the param list when
  // the signature looks like a function type. Otherwise fall through.
  const paramMatch = sig.match(/^\(([^)]*)\)/u);
  if (!paramMatch) {
    // Non-callable signature (e.g., "NotificationStaticApi") — emit a usage hint.
    const snippet = `${name}; // see signature: ${sig}`;
    return snippet.length <= MAX_SNIPPET_LENGTH ? snippet : null;
  }

  const paramsText = paramMatch[1].trim();
  const placeholders = paramsText
    ? splitTopLevelParams(paramsText)
        .map(p => p.trim())
        .filter(Boolean)
        // Only keep required params (no `?` and no `=`).
        .filter(p => !p.includes('?:') && !p.includes('='))
        .map(p => {
          const nameOnly = p.split(':')[0].trim().replace(/^\.\.\./u, '');
          return nameOnly;
        })
        .filter(Boolean)
    : [];

  const args = placeholders.join(', ');
  const snippet =
    symbol.kind === 'hook'
      ? `const result = ${name}(${args});`
      : `${name}(${args});`;

  return snippet.length <= MAX_SNIPPET_LENGTH ? snippet : null;
}

/**
 * Build a type-import snippet for type symbols.
 */
export function buildTypeSnippet(symbol) {
  const importPath = symbol.importPath || '@1money/component-ui';
  const snippet = `import type { ${symbol.name} } from '${importPath}';`;
  return snippet.length <= MAX_SNIPPET_LENGTH ? snippet : null;
}

/**
 * Try to resolve a manual canonical for a symbol by scanning the owning
 * component folder for either `<Name>.canonical.md` (specific) or
 * `canonical.md` (shared). Returns the extracted snippet or null.
 */
async function resolveManualCanonical(repoRoot, owningFolder, symbolName, diagnostics) {
  if (!owningFolder) return null;

  const specificPath = path.join(repoRoot, owningFolder, `${symbolName}.canonical.md`);
  const sharedPath = path.join(repoRoot, owningFolder, 'canonical.md');

  for (const candidate of [specificPath, sharedPath]) {
    const content = await readIfExists(candidate);
    if (!content) continue;
    const block = extractFirstFencedBlock(content);
    if (!block) continue;
    if (block.length > MAX_SNIPPET_LENGTH) {
      diagnostics.push({
        symbolName,
        reason: `manual canonical at ${path.relative(repoRoot, candidate)} is ${block.length} chars (max ${MAX_SNIPPET_LENGTH})`,
      });
      return null;
    }
    return block;
  }

  return null;
}

/**
 * Try to resolve a README fallback canonical by reading the owning folder's
 * README.md and extracting the first fenced block.
 */
async function resolveReadmeCanonical(repoRoot, owningFolder) {
  if (!owningFolder) return null;
  const readmePath = path.join(repoRoot, owningFolder, 'README.md');
  const content = await readIfExists(readmePath);
  if (!content) return null;
  const block = pickUsageFencedBlock(content);
  if (!block) return null;
  if (block.length > MAX_SNIPPET_LENGTH) return null;
  return block;
}

/**
 * Main entry point. See module docstring for behavior.
 *
 * @param {object} args
 * @param {string} args.repoRoot — absolute path to the repository root
 * @param {Array} args.symbols — the full symbol list from parseSymbols
 * @returns {Promise<{ canonicals: Record<string,string>, diagnostics: Array<{symbolName: string, reason: string}> }>}
 */
export async function generateCanonical({ repoRoot, symbols }) {
  if (!repoRoot || typeof repoRoot !== 'string') {
    throw new Error('generateCanonical: `repoRoot` is required');
  }
  if (!Array.isArray(symbols)) {
    throw new Error('generateCanonical: `symbols` must be an array');
  }

  const canonicals = {};
  const diagnostics = [];

  for (const symbol of symbols) {
    if (!symbol || typeof symbol.name !== 'string') continue;

    const owningFolder = resolveOwningFolder(symbol.sourceFile);

    // 1 + 2: manual canonical paths (specific then shared).
    const manual = await resolveManualCanonical(repoRoot, owningFolder, symbol.name, diagnostics);
    if (manual) {
      canonicals[symbol.name] = manual;
      continue;
    }

    // Modules MUST use manual canonical — README + auto-skeleton are not
    // appropriate for namespace-style exports. Emit a diagnostic and skip.
    if (symbol.kind === 'module') {
      diagnostics.push({
        symbolName: symbol.name,
        reason: 'module has no canonical.md; manual curation required',
      });
      continue;
    }

    // 3: README fallback (non-module symbols only).
    const readme = await resolveReadmeCanonical(repoRoot, owningFolder);
    if (readme) {
      canonicals[symbol.name] = readme;
      continue;
    }

    if (symbol.kind === 'component') {
      const skel = buildComponentSkeleton(symbol);
      if (skel) {
        canonicals[symbol.name] = skel;
      } else {
        diagnostics.push({
          symbolName: symbol.name,
          reason: 'auto-skeleton exceeds 240 chars; manual canonical required',
        });
      }
      continue;
    }

    if (symbol.kind === 'hook' || symbol.kind === 'function') {
      const skel = buildCallableSkeleton(symbol);
      if (skel) {
        canonicals[symbol.name] = skel;
      } else {
        diagnostics.push({
          symbolName: symbol.name,
          reason: `unable to build callable skeleton for ${symbol.kind}`,
        });
      }
      continue;
    }

    if (symbol.kind === 'type') {
      const snippet = buildTypeSnippet(symbol);
      if (snippet) {
        canonicals[symbol.name] = snippet;
      } else {
        diagnostics.push({
          symbolName: symbol.name,
          reason: 'type-import snippet exceeds 240 chars',
        });
      }
      continue;
    }

    // Unknown kind — record diagnostic so the controller is aware.
    diagnostics.push({
      symbolName: symbol.name,
      reason: `unsupported kind: ${symbol.kind}`,
    });
  }

  // Final safety assertion — every emitted snippet must fit the budget.
  for (const [name, snippet] of Object.entries(canonicals)) {
    if (typeof snippet !== 'string') {
      throw new Error(`generateCanonical: snippet for ${name} is not a string`);
    }
    if (snippet.length > MAX_SNIPPET_LENGTH) {
      throw new Error(
        `generateCanonical: snippet for ${name} exceeds ${MAX_SNIPPET_LENGTH} chars (${snippet.length})`,
      );
    }
  }

  return { canonicals, diagnostics };
}
