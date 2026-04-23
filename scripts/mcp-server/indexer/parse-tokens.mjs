/**
 * parse-tokens.mjs
 *
 * Build-time parser for SCSS design tokens under `src/styles/tokens/`.
 *
 * Two passes:
 *   Pass 1 — primitives: flat `$name: literal;` and top-level `$map: (...)`
 *            declarations in `_primitives.scss`. Flat decls emit a record
 *            named by the raw variable (e.g. `blue-700`); map entries emit
 *            records named `<kind>-<key>` (e.g. `spacing-100`, `radius-100`).
 *   Pass 2 — semantics: top-level maps in `_semantic-*.scss` files, plus
 *            `-om-pick-spacing(...)` derived scales. Aliases of the form
 *            `p.$blue-700` or `$om-spacing-scale['100']` are resolved one
 *            level against Pass-1; anything else (rgba(), nested maps,
 *            function calls) is kept verbatim.
 *
 * Regex + light text walking — no SCSS compiler, no extra deps.
 */

import fs from 'fs/promises';
import path from 'path';

// ---------------------------------------------------------------------------
// File walking
// ---------------------------------------------------------------------------

async function listScssFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listScssFiles(full)));
    else if (entry.isFile() && entry.name.endsWith('.scss')) out.push(full);
  }
  return out;
}

// ---------------------------------------------------------------------------
// SCSS walker — yields top-level `$name: <value>;` statements
// ---------------------------------------------------------------------------

/**
 * If a // comment, /* block comment, or quoted string starts at i, return the
 * index just past it; otherwise return i unchanged.
 */
function skipTrivia(src, i) {
  const len = src.length;
  if (src[i] === '/' && src[i + 1] === '/') {
    while (i < len && src[i] !== '\n') i++;
    return i;
  }
  if (src[i] === '/' && src[i + 1] === '*') {
    i += 2;
    while (i < len - 1 && !(src[i] === '*' && src[i + 1] === '/')) i++;
    return i + 2;
  }
  if (src[i] === '"' || src[i] === "'") {
    const quote = src[i++];
    while (i < len && src[i] !== quote) {
      if (src[i] === '\\') i += 2;
      else i++;
    }
    return i + 1;
  }
  return i;
}

/**
 * Like skipTrivia but only skips // and /* comments — leaves quoted strings
 * alone. Used where we need to *see* a leading quote (e.g., map keys).
 */
function skipCommentsOnly(src, i) {
  const len = src.length;
  if (src[i] === '/' && src[i + 1] === '/') {
    while (i < len && src[i] !== '\n') i++;
    return i;
  }
  if (src[i] === '/' && src[i + 1] === '*') {
    i += 2;
    while (i < len - 1 && !(src[i] === '*' && src[i + 1] === '/')) i++;
    return i + 2;
  }
  return i;
}

function* iterateTopLevelDeclarations(source) {
  const len = source.length;
  let i = 0;
  while (i < len) {
    const ch = source[i];
    if (/\s/.test(ch)) { i++; continue; }
    const afterTrivia = skipTrivia(source, i);
    if (afterTrivia !== i) { i = afterTrivia; continue; }

    if (ch === '$') {
      const nameStart = i + 1;
      let j = nameStart;
      while (j < len && /[A-Za-z0-9_-]/.test(source[j])) j++;
      const name = source.slice(nameStart, j);
      while (j < len && /\s/.test(source[j])) j++;
      if (source[j] !== ':') { i = j; continue; }
      j++;
      // Consume value until top-level ';' — track parens, skip strings/comments.
      let depth = 0;
      const vStart = j;
      while (j < len) {
        const after = skipTrivia(source, j);
        if (after !== j) { j = after; continue; }
        const c = source[j];
        if (c === '(') { depth++; j++; continue; }
        if (c === ')') { depth--; j++; continue; }
        if (c === ';' && depth === 0) break;
        j++;
      }
      yield { name, value: source.slice(vStart, j).trim() };
      i = j + 1;
      continue;
    }

    if (ch === '@') {
      let j = i + 1;
      while (j < len && /[A-Za-z-]/.test(source[j])) j++;
      const directive = source.slice(i + 1, j);
      const blockDirectives = ['function', 'mixin', 'if', 'each', 'for', 'while'];
      if (blockDirectives.includes(directive)) {
        while (j < len && source[j] !== '{') j++;
        if (source[j] !== '{') { i = j; continue; }
        let d = 1; j++;
        while (j < len && d > 0) {
          const after = skipTrivia(source, j);
          if (after !== j) { j = after; continue; }
          if (source[j] === '{') d++;
          else if (source[j] === '}') d--;
          j++;
        }
        i = j;
        continue;
      }
      // @use / @forward / @import / @debug — skip to `;` or `{...}`.
      while (j < len && source[j] !== ';' && source[j] !== '{') j++;
      if (source[j] === '{') {
        let d = 1; j++;
        while (j < len && d > 0) {
          if (source[j] === '{') d++;
          else if (source[j] === '}') d--;
          j++;
        }
      } else if (source[j] === ';') j++;
      i = j;
      continue;
    }

    i++;
  }
}

// ---------------------------------------------------------------------------
// Value utilities
// ---------------------------------------------------------------------------

const stripFlags = (raw) => raw.replace(/\s*!\s*(default|global)\s*$/g, '').trim();

/**
 * If `value` is a single pair of outer parens, return the inner body; else null.
 * (Validates outer parens match — rejects `(a) + (b)`.)
 */
function unwrapParens(value) {
  const s = value.trim();
  if (!s.startsWith('(') || !s.endsWith(')')) return null;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') depth++;
    else if (s[i] === ')') {
      depth--;
      if (depth === 0 && i !== s.length - 1) return null;
    }
  }
  return s.slice(1, -1);
}

/**
 * Parse the body of a map literal into `{ key, raw }[]` preserving source order.
 * Handles quoted and unquoted keys, nested parens, strings, and comments.
 */
function parseMapEntries(inner) {
  const entries = [];
  const len = inner.length;
  let i = 0;

  const skipWs = () => {
    while (i < len) {
      const after = skipCommentsOnly(inner, i);
      if (after !== i) { i = after; continue; }
      const c = inner[i];
      if (/\s/.test(c) || c === ',') { i++; continue; }
      break;
    }
  };

  while (i < len) {
    skipWs();
    if (i >= len) break;

    let key;
    if (inner[i] === "'" || inner[i] === '"') {
      const quote = inner[i++];
      const kStart = i;
      while (i < len && inner[i] !== quote) {
        if (inner[i] === '\\') i += 2;
        else i++;
      }
      key = inner.slice(kStart, i);
      i++;
    } else {
      const kStart = i;
      while (i < len && /[A-Za-z0-9_-]/.test(inner[i])) i++;
      key = inner.slice(kStart, i);
    }

    skipWs();
    if (inner[i] !== ':') {
      while (i < len && inner[i] !== ',') i++;
      continue;
    }
    i++;

    let depth = 0;
    const vStart = i;
    while (i < len) {
      const after = skipTrivia(inner, i);
      if (after !== i) { i = after; continue; }
      const c = inner[i];
      if (c === '(') { depth++; i++; continue; }
      if (c === ')') { depth--; i++; continue; }
      if (c === ',' && depth === 0) break;
      i++;
    }
    const raw = inner.slice(vStart, i).trim();
    if (key && raw) entries.push({ key, raw });
    if (inner[i] === ',') i++;
  }

  return entries;
}

/** Simple alias (`p.$blue-700` or `$grey-900`) → bare var name, else null. */
function extractPrimitiveRef(raw) {
  const t = raw.trim();
  const m = /^(?:[A-Za-z_][A-Za-z0-9_-]*\.)?\$([A-Za-z0-9_-]+)$/.exec(t);
  return m ? m[1] : null;
}

/** `$map['key']` or `ns.$map['key']` → `{ mapName, key }`, else null. */
function extractMapRef(raw) {
  const t = raw.trim();
  const m = /^(?:[A-Za-z_][A-Za-z0-9_-]*\.)?\$([A-Za-z0-9_-]+)\s*\[\s*['"]([^'"]+)['"]\s*\]$/.exec(t);
  return m ? { mapName: m[1], key: m[2] } : null;
}

function extractPickKeys(argList) {
  const keys = [];
  const re = /['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(argList)) !== null) keys.push(m[1]);
  return keys;
}

// ---------------------------------------------------------------------------
// Path / naming helpers
// ---------------------------------------------------------------------------

function kindFromPath(tokensRoot, filePath) {
  const rel = path.relative(tokensRoot, filePath);
  const parts = rel.split(path.sep);
  return parts.length >= 2 ? parts[0] : null;
}

/**
 *   $om-bg-scale                 → 'bg'
 *   $om-gap-scale                → 'gap'
 *   $om-component-height-scale   → 'component-height'
 *   $om-typography-display       → 'typography-display'
 */
function deriveDomain(varName) {
  let n = varName;
  if (n.startsWith('om-')) n = n.slice(3);
  if (n.endsWith('-scale')) n = n.slice(0, -'-scale'.length);
  return n;
}

// ---------------------------------------------------------------------------
// Pass 1 — primitives
// ---------------------------------------------------------------------------

async function collectPrimitives(tokensRoot) {
  const records = [];
  const aliasValues = new Map();
  const mapDicts = new Map();

  const files = await listScssFiles(tokensRoot);
  for (const file of files) {
    if (path.basename(file) !== '_primitives.scss') continue;
    const kind = kindFromPath(tokensRoot, file);
    if (!kind) continue;
    const text = await fs.readFile(file, 'utf8');

    for (const { name: varName, value } of iterateTopLevelDeclarations(text)) {
      const raw = stripFlags(value);
      const mapInner = unwrapParens(raw);

      if (mapInner !== null) {
        const dict = new Map();
        for (const { key, raw: entry } of parseMapEntries(mapInner)) {
          dict.set(key, entry);
          // Skip nested-map entries (emit them as opaque — rare in primitive maps).
          if (unwrapParens(entry) !== null) continue;
          records.push({
            name: `${kind}-${key}`,
            scss: `$${varName}['${key}']`,
            cssVar: `--om-${kind}-${key}`,
            value: entry,
            resolved: entry,
            kind,
            layer: 'primitive',
          });
        }
        mapDicts.set(varName, dict);
        continue;
      }

      records.push({
        name: varName,
        scss: `$${varName}`,
        cssVar: `--om-${kind}-${varName}`,
        value: raw,
        resolved: raw,
        kind,
        layer: 'primitive',
      });
      aliasValues.set(varName, raw);
    }
  }

  return { records, aliasValues, mapDicts };
}

// ---------------------------------------------------------------------------
// Pass 2 — semantics
// ---------------------------------------------------------------------------

async function collectSemantics(tokensRoot, aliasValues, mapDicts) {
  const records = [];
  const files = await listScssFiles(tokensRoot);

  for (const file of files) {
    if (!path.basename(file).startsWith('_semantic-')) continue;
    const kind = kindFromPath(tokensRoot, file);
    if (!kind) continue;
    const text = await fs.readFile(file, 'utf8');

    for (const { name: varName, value } of iterateTopLevelDeclarations(text)) {
      const raw = stripFlags(value);
      const domain = deriveDomain(varName);

      // Case A: -om-pick-spacing('050', '100', ...) — derived spacing scale.
      const pickMatch = /^-om-pick-spacing\s*\((.*)\)$/s.exec(raw);
      if (pickMatch) {
        const keys = extractPickKeys(pickMatch[1]);
        const primitiveMap = mapDicts.get('om-spacing-scale');
        for (const key of keys) {
          const primitiveRaw = primitiveMap?.get(key) ?? null;
          const mapRef = `$om-spacing-scale['${key}']`;
          records.push({
            name: `${domain}-${key}`,
            scss: `$${varName}['${key}']`,
            cssVar: `--om-${kind}-${domain}-${key}`,
            value: mapRef,
            resolved: primitiveRaw ?? mapRef,
            kind,
            layer: 'semantic',
          });
        }
        continue;
      }

      // Case B: `( ... )` — literal semantic map.
      const mapInner = unwrapParens(raw);
      if (mapInner !== null) {
        for (const { key, raw: rhs } of parseMapEntries(mapInner)) {
          records.push({
            name: `${domain}-${key}`,
            scss: `$${varName}['${key}']`,
            cssVar: `--om-${kind}-${domain}-${key}`,
            value: rhs,
            resolved: resolveSemanticRhs(rhs, aliasValues, mapDicts),
            kind,
            layer: 'semantic',
          });
        }
        continue;
      }

      // Anything else (e.g., bare reassignment `$x: $y;`) — skip.
    }
  }

  return records;
}

/**
 * One-level resolver. Handles `p.$blue-700` and `$om-spacing-scale['100']`.
 * Everything else (function calls, nested maps, opaque expressions) is
 * returned verbatim.
 */
function resolveSemanticRhs(rhs, aliasValues, mapDicts) {
  const ref = extractPrimitiveRef(rhs);
  if (ref && aliasValues.has(ref)) return aliasValues.get(ref);

  const mref = extractMapRef(rhs);
  if (mref) {
    const dict = mapDicts.get(mref.mapName);
    if (dict && dict.has(mref.key)) return dict.get(mref.key);
  }

  return rhs;
}

// ---------------------------------------------------------------------------
// Entrypoint
// ---------------------------------------------------------------------------

export async function parseTokens({ repoRoot } = {}) {
  if (!repoRoot) throw new Error('parseTokens: repoRoot is required');
  const tokensRoot = path.join(repoRoot, 'src', 'styles', 'tokens');

  const { records: primitives, aliasValues, mapDicts } = await collectPrimitives(tokensRoot);
  const semantics = await collectSemantics(tokensRoot, aliasValues, mapDicts);

  const all = [...primitives, ...semantics];
  const layerRank = { primitive: 0, semantic: 1 };
  all.sort((a, b) => {
    if (a.kind !== b.kind) return a.kind < b.kind ? -1 : 1;
    const la = layerRank[a.layer] ?? 99;
    const lb = layerRank[b.layer] ?? 99;
    if (la !== lb) return la - lb;
    if (a.name !== b.name) return a.name < b.name ? -1 : 1;
    return 0;
  });
  return all;
}
