/**
 * parse-exports.mjs
 *
 * Compares `src/index.ts` exports against `package.json#exports` to detect drift:
 * - orphanSubpath: package.json subpaths that don't have a corresponding source directory
 * - orphanSymbol: source directories exported flat but with no package.json subpath
 * - suggestedFixes: recommendations to fix drift
 */

import fs from 'fs/promises';
import path from 'path';
import ts from 'typescript';

/**
 * Extract exported symbols from src/index.ts and their source subpaths.
 *
 * Returns array of { symbol: string, sourceSubpath: string }
 * Example: { symbol: 'Button', sourceSubpath: './components/Button' }
 */
async function extractSymbolsFromIndex(indexPath) {
  const content = await fs.readFile(indexPath, 'utf8');
  const sourceFile = ts.createSourceFile(
    indexPath,
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  const symbols = [];
  const seen = new Set(); // Deduplicate by sourceSubpath

  function visit(node) {
    // Handle: export { A, B } from './path'
    if (ts.isExportDeclaration(node) && node.exportClause && node.moduleSpecifier) {
      if (!ts.isNamedExports(node.exportClause)) return;

      const specifier = node.moduleSpecifier.text; // e.g., './components/Button'

      if (!seen.has(specifier)) {
        // Extract all named exports from this statement
        const elements = node.exportClause.elements;
        for (const element of elements) {
          const name = element.propertyName ? element.propertyName.text : element.name.text;
          symbols.push({
            symbol: name,
            sourceSubpath: specifier,
          });
        }
        seen.add(specifier);
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return symbols;
}

/**
 * Map source subpath (e.g., './components/Button') to expected package.json subpath (e.g., './Button').
 * Returns array of candidates in order of priority.
 */
function deriveExportSubpaths(sourceSubpath) {
  // e.g., './components/Button' → './Button'
  const match = sourceSubpath.match(/^\.\/components\/(.+)$/);
  if (!match) return [];

  const component = match[1];
  return [`./${component}`];
}

/**
 * Main drift detection function.
 */
export async function detectDrift({ repoRoot }) {
  const indexPath = path.join(repoRoot, 'src', 'index.ts');
  const packageJsonPath = path.join(repoRoot, 'package.json');

  // Read package.json exports
  const pkgContent = await fs.readFile(packageJsonPath, 'utf8');
  const pkg = JSON.parse(pkgContent);
  const exportsMap = pkg.exports || {};

  // Get list of component directories
  const componentsDir = path.join(repoRoot, 'src', 'components');
  const componentDirs = new Set();
  const entries = await fs.readdir(componentsDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      componentDirs.add(entry.name);
    }
  }

  // ===== ORPHAN SUBPATHS =====
  // Check each subpath in package.json#exports to see if its source directory exists
  const orphanSubpath = [];

  for (const [subpath, config] of Object.entries(exportsMap)) {
    // Skip special entries
    if (subpath === '.' || subpath === './index.css') continue;

    // Get the import target
    const target = config.import || config.require || config.types;
    if (!target) continue;

    // Derive expected source directory
    // e.g., './es/components/Form/index.js' → 'src/components/Form/'
    const match = target.match(/^\.\/es\/components\/(.+?)\/(index\.js|index\.d\.ts)$/);
    if (!match) continue;

    const componentName = match[1];
    const sourceDir = path.join(repoRoot, 'src', 'components', componentName);

    // Check if directory exists
    let dirExists = false;
    try {
      const stat = await fs.stat(sourceDir);
      dirExists = stat.isDirectory();
    } catch {
      dirExists = false;
    }

    if (!dirExists) {
      orphanSubpath.push({
        subpath,
        target,
        reason: 'no matching component directory or flat export',
      });
    }
  }

  // ===== ORPHAN SYMBOLS =====
  // Extract symbols from src/index.ts
  const symbols = await extractSymbolsFromIndex(indexPath);

  // Group symbols by sourceSubpath and collect unique source subpaths
  const sourceSubpathMap = new Map(); // sourceSubpath → { exports: Set<symbol>, candidates: string[] }
  for (const { symbol, sourceSubpath } of symbols) {
    if (!sourceSubpathMap.has(sourceSubpath)) {
      sourceSubpathMap.set(sourceSubpath, {
        exports: new Set(),
        candidates: deriveExportSubpaths(sourceSubpath),
      });
    }
    sourceSubpathMap.get(sourceSubpath).exports.add(symbol);
  }

  // For each source subpath, check if any of its candidates exist in package.json#exports
  const orphanSymbol = [];
  for (const [sourceSubpath, { exports, candidates }] of sourceSubpathMap) {
    // Skip if we have no candidates (shouldn't happen for ./components/* paths)
    if (candidates.length === 0) continue;

    // Check if ANY candidate exists in package.json#exports
    const hasExportSubpath = candidates.some(candidate => exportsMap.hasOwnProperty(candidate));

    if (!hasExportSubpath) {
      // Verify the source directory actually exists (only flag real orphans)
      const sourceDir = path.join(repoRoot, sourceSubpath);
      let dirExists = false;
      try {
        const stat = await fs.stat(sourceDir);
        dirExists = stat.isDirectory();
      } catch {
        dirExists = false;
      }

      if (dirExists) {
        orphanSymbol.push({
          sourceSubpath,
          exports: Array.from(exports).sort(),
          reason: 'exported flat but no package.json subpath',
        });
      }
    }
  }

  // ===== SUGGESTED FIXES =====
  const suggestedFixes = [];

  // Fix orphan subpaths by removing them
  for (const { subpath, target } of orphanSubpath) {
    suggestedFixes.push({
      kind: 'removeSubpath',
      subpath,
      note: 'Form module has been consolidated into ProForm; subpath is orphaned.',
    });
  }

  // Fix orphan symbols by adding subpaths
  for (const { sourceSubpath, exports } of orphanSymbol) {
    const candidates = deriveExportSubpaths(sourceSubpath);
    if (candidates.length > 0) {
      const subpath = candidates[0]; // Use first candidate
      const target = subpath.replace(/^\.\//, './es/components/') + '/index.js';
      suggestedFixes.push({
        kind: 'addSubpath',
        subpath,
        target,
        note: `consider adding a subpath for this folder (exports: ${exports.join(', ')})`,
      });
    }
  }

  // Sort results for determinism
  orphanSubpath.sort((a, b) => a.subpath.localeCompare(b.subpath));
  orphanSymbol.sort((a, b) => a.sourceSubpath.localeCompare(b.sourceSubpath));
  suggestedFixes.sort((a, b) => {
    const aSubpath = a.subpath || '';
    const bSubpath = b.subpath || '';
    return aSubpath.localeCompare(bSubpath);
  });

  return {
    orphanSubpath,
    orphanSymbol,
    suggestedFixes,
  };
}
