import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';
import { parseSymbols } from './parse-symbols.mjs';
import { parseTokens } from './parse-tokens.mjs';
import { parseIcons } from './parse-icons.mjs';
import { detectDrift } from './parse-exports.mjs';
import { generateCanonical } from './generate-canonical.mjs';
import { parseExamples } from './parse-examples.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..', '..');
const outputPath = path.join(__dirname, '..', 'index.generated.json');
const driftPath = path.join(__dirname, '..', 'drift.json');
const examplesPath = path.join(__dirname, '..', 'examples.generated.json');
const synonymsPath = path.join(__dirname, 'synonyms.json');

function writeJson(filePath, obj) {
  return fs.writeFile(filePath, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

async function loadSynonyms() {
  const raw = await fs.readFile(synonymsPath, 'utf8');
  const map = JSON.parse(raw);
  const bySymbol = new Map();
  for (const [alias, targets] of Object.entries(map)) {
    for (const target of targets) {
      if (!bySymbol.has(target)) bySymbol.set(target, new Set());
      bySymbol.get(target).add(alias);
    }
  }
  return bySymbol;
}

async function buildIndex() {
  try {
    const [symbols, tokens, icons, drift, synonymsBySymbol] = await Promise.all([
      parseSymbols({ repoRoot }),
      parseTokens({ repoRoot }),
      parseIcons({ repoRoot }),
      detectDrift({ repoRoot }),
      loadSynonyms(),
    ]);

    const { canonicals, diagnostics: canonicalDiagnostics } = await generateCanonical({
      repoRoot,
      symbols,
    });

    for (const symbol of symbols) {
      const tags = synonymsBySymbol.get(symbol.name);
      symbol.searchTags = tags ? [...tags].sort() : [];
      const canonical = canonicals[symbol.name];
      if (canonical) symbol.canonicalUsage = canonical;
    }

    // Examples run AFTER canonicals are merged so parse-examples can pick up
    // `canonicalUsage` from every symbol.
    const { examples: exampleBodies, references: exampleRefs } = await parseExamples({
      repoRoot,
      symbols,
    });
    for (const symbol of symbols) {
      symbol.examples = exampleRefs[symbol.name] ?? [];
    }

    const index = {
      schemaVersion: '1',
      symbols,
      tokens,
      icons,
      diagnostics: {
        canonical: canonicalDiagnostics,
      },
    };

    const examplesDoc = {
      schemaVersion: '1',
      examples: exampleBodies,
    };

    await writeJson(outputPath, index);
    await writeJson(driftPath, drift);
    await writeJson(examplesPath, examplesDoc);

    const exampleCount = Object.keys(exampleBodies).length;
    console.log(
      `[mcp-index] wrote ${path.relative(repoRoot, outputPath)} ` +
        `(${symbols.length} symbols, ${tokens.length} tokens, ${icons.length} icons)`,
    );
    console.log(
      `[mcp-index] wrote ${path.relative(repoRoot, driftPath)} ` +
        `(${drift.orphanSubpath.length} orphan subpaths, ${drift.orphanSymbol.length} orphan symbols)`,
    );
    console.log(
      `[mcp-index] wrote ${path.relative(repoRoot, examplesPath)} ` +
        `(${exampleCount} unique examples)`,
    );
    if (canonicalDiagnostics.length > 0) {
      console.log(
        `[mcp-index] canonical diagnostics: ${canonicalDiagnostics.length} symbol(s) need manual canonical.md`,
      );
    }
  } catch (error) {
    console.error('[mcp-index] error:', error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
}

buildIndex();
