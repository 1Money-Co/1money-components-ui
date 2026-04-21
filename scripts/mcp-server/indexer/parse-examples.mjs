/**
 * parse-examples.mjs
 *
 * Builds the payload for `examples.generated.json` and the per-symbol
 * reference map consumed by `get_examples`.
 *
 * Three example sources are collected per component folder:
 *   1. README fenced blocks (`src/components/<Folder>/README.md`).
 *   2. Storybook `render: (args) => (...)` bodies
 *      (`src/components/<Folder>/<Folder>.stories.tsx`).
 *   3. Canonical snippets (the `canonicalUsage` string already computed
 *      for each symbol).
 *
 * Every unique code body is content-hashed (sha256) so the main index only
 * stores lightweight references. Ordering within a symbol is deterministic:
 * canonical → README blocks (in document order) → stories (in export order).
 */

import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import ts from 'typescript';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Fenced languages considered compilable example snippets. */
const ACCEPTED_FENCE_LANGS = new Set(['tsx', 'jsx', 'ts', 'js', 'typescript', 'javascript']);

/**
 * Substrings that mark a story render body as non-compilable because it
 * relies on Storybook-injected values that are not available outside of
 * the Storybook runtime.
 */
const STORY_NON_COMPILABLE_MARKERS = ['args', 'fn()', 'meta.args', '{...args}'];

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

async function readIfExists(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (err) {
    if (err && err.code === 'ENOENT') return null;
    throw err;
  }
}

function hashCode(code) {
  return crypto.createHash('sha256').update(code, 'utf8').digest('hex');
}

/** Convert PascalCase / camelCase to Title Case. */
function toTitleCase(name) {
  if (!name) return '';
  // Split on upper-case boundaries while keeping runs of capitals together.
  const parts = name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .split(/\s+/u)
    .filter(Boolean);
  if (parts.length === 0) return name;
  return parts
    .map(p => (p[0] ? p[0].toUpperCase() + p.slice(1) : p))
    .join(' ');
}

// ---------------------------------------------------------------------------
// Source 1: README fenced blocks
// ---------------------------------------------------------------------------

/**
 * Parse a README body and return an ordered list of accepted fenced blocks,
 * each carrying the nearest preceding `##` or `###` heading as its title.
 *
 * Only fences with languages in ACCEPTED_FENCE_LANGS contribute entries.
 */
export function parseReadmeBlocks(markdown, componentName) {
  if (!markdown) return [];
  const lines = markdown.split(/\r?\n/u);
  const blocks = [];
  let currentHeading = null;
  let i = 0;
  let exampleCounter = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Track the latest h2/h3 heading above the cursor.
    const headingMatch = line.match(/^(#{2,3})\s+(.+?)\s*$/u);
    if (headingMatch) {
      currentHeading = headingMatch[2].trim();
      i += 1;
      continue;
    }

    // Fence start. Accept common indentation variants but only at column 0 —
    // deeper indentation means the fence is inside a list item and we leave
    // those alone for deterministic extraction.
    const fenceMatch = line.match(/^```([A-Za-z0-9_-]*)\s*$/u);
    if (fenceMatch) {
      const lang = fenceMatch[1].trim().toLowerCase();
      const isAccepted = ACCEPTED_FENCE_LANGS.has(lang);
      // Scan forward to matching fence.
      const bodyLines = [];
      let j = i + 1;
      let closed = false;
      while (j < lines.length) {
        if (/^```\s*$/u.test(lines[j])) {
          closed = true;
          break;
        }
        bodyLines.push(lines[j]);
        j += 1;
      }
      if (closed && isAccepted) {
        const body = bodyLines.join('\n').replace(/\s+$/u, '');
        if (body.length > 0) {
          exampleCounter += 1;
          const title =
            currentHeading && currentHeading.length > 0
              ? currentHeading
              : `${componentName} example ${exampleCounter}`;
          blocks.push({ title, code: body });
        }
      }
      // Move past the fence body (or remainder of file if unclosed).
      i = closed ? j + 1 : j;
      continue;
    }

    i += 1;
  }

  return blocks;
}

// ---------------------------------------------------------------------------
// Source 2: Storybook render bodies
// ---------------------------------------------------------------------------

function getRenderInitializer(storyObjExpr) {
  if (!ts.isObjectLiteralExpression(storyObjExpr)) return null;
  for (const prop of storyObjExpr.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const key =
      ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name)
        ? prop.name.text
        : null;
    if (key !== 'render') continue;
    return prop.initializer;
  }
  return null;
}

/**
 * Given a `render` initializer (usually an arrow function), extract the
 * printable body we want to surface as an example.
 */
function extractRenderBody(initializer, sourceFile) {
  if (!initializer) return null;
  if (!ts.isArrowFunction(initializer) && !ts.isFunctionExpression(initializer)) {
    return null;
  }

  const body = initializer.body;
  // Expression body: render: (args) => (<JSX />) — unwrap parentheses and
  // emit the JSX alone.
  if (!ts.isBlock(body)) {
    let expr = body;
    while (ts.isParenthesizedExpression(expr)) expr = expr.expression;
    return expr.getText(sourceFile);
  }

  // Block body: if it's a single return statement, unwrap it. Otherwise,
  // return the whole block including braces so the snippet is at least
  // syntactically complete.
  if (body.statements.length === 1 && ts.isReturnStatement(body.statements[0])) {
    const ret = body.statements[0];
    if (ret.expression) {
      let expr = ret.expression;
      while (ts.isParenthesizedExpression(expr)) expr = expr.expression;
      return expr.getText(sourceFile);
    }
  }

  return body.getText(sourceFile);
}

/**
 * Strip leading indentation common to all non-empty lines so the rendered
 * snippet reads well out of context.
 */
function dedent(text) {
  const lines = text.split('\n');
  let minIndent = Infinity;
  for (const line of lines) {
    if (line.trim().length === 0) continue;
    const match = line.match(/^[ \t]*/u);
    const indent = match ? match[0].length : 0;
    if (indent < minIndent) minIndent = indent;
  }
  if (!Number.isFinite(minIndent) || minIndent === 0) return text;
  return lines.map(l => (l.length >= minIndent ? l.slice(minIndent) : l)).join('\n');
}

function storyIsCompilable(code) {
  for (const marker of STORY_NON_COMPILABLE_MARKERS) {
    if (code.includes(marker)) return false;
  }
  return true;
}

/**
 * Parse a stories file and return ordered example records for each exported
 * `StoryObj` with a `render` property.
 */
export function parseStoryRenders(storiesText, storiesPath) {
  if (!storiesText) return [];
  const source = ts.createSourceFile(
    storiesPath,
    storiesText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const stories = [];
  for (const stmt of source.statements) {
    if (!ts.isVariableStatement(stmt)) continue;
    const hasExport = stmt.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword);
    if (!hasExport) continue;
    const hasDefault = stmt.modifiers?.some(m => m.kind === ts.SyntaxKind.DefaultKeyword);
    if (hasDefault) continue;
    for (const decl of stmt.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name)) continue;
      if (!decl.initializer) continue;
      const renderInit = getRenderInitializer(decl.initializer);
      if (!renderInit) continue;
      const body = extractRenderBody(renderInit, source);
      if (!body) continue;
      const code = dedent(body).trim();
      if (code.length === 0) continue;
      const exportName = decl.name.text;
      const title = toTitleCase(exportName) || exportName;
      stories.push({
        title,
        code,
        compilable: storyIsCompilable(code),
        exportName,
      });
    }
  }
  return stories;
}

// ---------------------------------------------------------------------------
// Folder → primary symbol attribution
// ---------------------------------------------------------------------------

/**
 * Given the full `symbols` list, build a map of folder name → list of
 * primary symbol names that README/story examples should attach to.
 *
 * A primary symbol is one whose `sourceFile` lives directly inside the
 * folder (`src/components/<Folder>/…`), and whose `kind` is component or
 * module. We conservatively include every such symbol that matches the
 * folder name OR is the only component/module in the folder.
 */
function buildFolderPrimaryMap(symbols) {
  const byFolder = new Map();
  for (const sym of symbols) {
    if (!sym || typeof sym.sourceFile !== 'string') continue;
    if (sym.kind !== 'component' && sym.kind !== 'module') continue;
    const normalized = sym.sourceFile.replace(/\\/gu, '/');
    const m = normalized.match(/^src\/components\/([^/]+)\//u);
    if (!m) continue;
    const folder = m[1];
    if (!byFolder.has(folder)) byFolder.set(folder, []);
    byFolder.get(folder).push(sym);
  }

  const primaryByFolder = new Map();
  for (const [folder, group] of byFolder) {
    // Prefer a symbol whose name matches the folder name.
    const exactMatch = group.filter(s => s.name === folder);
    if (exactMatch.length > 0) {
      primaryByFolder.set(folder, exactMatch.map(s => s.name));
      continue;
    }
    // Otherwise, if there is exactly one component/module, use it.
    if (group.length === 1) {
      primaryByFolder.set(folder, [group[0].name]);
      continue;
    }
    // Ambiguous — attach to every component/module in the folder.
    primaryByFolder.set(folder, group.map(s => s.name));
  }
  return primaryByFolder;
}

// ---------------------------------------------------------------------------
// Entrypoint
// ---------------------------------------------------------------------------

/**
 * @param {object} args
 * @param {string} args.repoRoot absolute path to repo root
 * @param {Array}  args.symbols symbol list (already merged with canonicalUsage)
 * @returns {Promise<{
 *   examples: Record<string, { title: string, code: string, source: 'readme'|'stories'|'canonical', compilable: boolean }>,
 *   references: Record<string, Array<{ hash: string, source: 'readme'|'stories'|'canonical' }>>
 * }>}
 */
export async function parseExamples({ repoRoot, symbols }) {
  if (!repoRoot || typeof repoRoot !== 'string') {
    throw new Error('parseExamples: `repoRoot` is required');
  }
  if (!Array.isArray(symbols)) {
    throw new Error('parseExamples: `symbols` must be an array');
  }

  const examples = {};
  /** @type {Map<string, Array<{hash: string, source: string, order: number}>>} */
  const refs = new Map();
  const seenPerSymbol = new Map();

  function ensureRefList(symbolName) {
    if (!refs.has(symbolName)) refs.set(symbolName, []);
    if (!seenPerSymbol.has(symbolName)) seenPerSymbol.set(symbolName, new Set());
    return refs.get(symbolName);
  }

  function registerExample(entry, symbolNames) {
    const hash = hashCode(entry.code);
    if (!examples[hash]) {
      examples[hash] = {
        title: entry.title,
        code: entry.code,
        source: entry.source,
        compilable: entry.compilable,
      };
    }
    for (const sym of symbolNames) {
      const seen = seenPerSymbol.get(sym) ?? new Set();
      if (seen.has(hash)) continue;
      seen.add(hash);
      seenPerSymbol.set(sym, seen);
      ensureRefList(sym).push({ hash, source: entry.source });
    }
  }

  // -- Canonical first (per symbol) --------------------------------------
  for (const sym of symbols) {
    if (!sym || typeof sym.name !== 'string') continue;
    const canonical =
      typeof sym.canonicalUsage === 'string' ? sym.canonicalUsage.trim() : '';
    if (!canonical) continue;
    registerExample(
      {
        title: 'Canonical usage',
        code: canonical,
        source: 'canonical',
        compilable: true,
      },
      [sym.name],
    );
  }

  // -- README + Stories (folder-scoped) ----------------------------------
  const primaryByFolder = buildFolderPrimaryMap(symbols);
  // Iterate folders in a deterministic order (alpha).
  const folders = [...primaryByFolder.keys()].sort();
  for (const folder of folders) {
    const owners = primaryByFolder.get(folder) ?? [];
    if (owners.length === 0) continue;

    // README
    const readmePath = path.join(repoRoot, 'src', 'components', folder, 'README.md');
    const readmeText = await readIfExists(readmePath);
    if (readmeText) {
      const blocks = parseReadmeBlocks(readmeText, folder);
      for (const block of blocks) {
        registerExample(
          {
            title: block.title,
            code: block.code,
            source: 'readme',
            compilable: true,
          },
          owners,
        );
      }
    }

    // Stories
    const storiesPath = path.join(
      repoRoot,
      'src',
      'components',
      folder,
      `${folder}.stories.tsx`,
    );
    const storiesText = await readIfExists(storiesPath);
    if (storiesText) {
      const stories = parseStoryRenders(storiesText, storiesPath);
      for (const story of stories) {
        registerExample(
          {
            title: story.title,
            code: story.code,
            source: 'stories',
            compilable: story.compilable,
          },
          owners,
        );
      }
    }
  }

  // Produce the reference map with stripped hash-only entries (order kept).
  const references = {};
  const refSymbolNames = [...refs.keys()].sort();
  for (const name of refSymbolNames) {
    references[name] = refs.get(name).map(r => ({ hash: r.hash, source: r.source }));
  }

  // Sort examples keys for deterministic JSON output.
  const sortedExamples = {};
  for (const key of Object.keys(examples).sort()) {
    sortedExamples[key] = examples[key];
  }

  return { examples: sortedExamples, references };
}
