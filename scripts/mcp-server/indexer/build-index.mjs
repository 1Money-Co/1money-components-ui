import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';
import { parseSymbols } from './parse-symbols.mjs';
import { parseTokens } from './parse-tokens.mjs';
import { parseIcons } from './parse-icons.mjs';
import { detectDrift } from './parse-exports.mjs';
import { generateCanonical } from './generate-canonical.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..', '..');
const outputPath = path.join(__dirname, '..', 'index.generated.json');

async function buildIndex() {
  try {
    const symbols = await parseSymbols({ repoRoot });
    await parseTokens();
    await parseIcons();
    await detectDrift();
    await generateCanonical();

    const index = {
      schemaVersion: '1',
      generatedAt: new Date().toISOString(),
      symbols,
    };

    // Write deterministically formatted JSON
    const jsonString = JSON.stringify(index, null, 2) + '\n';
    await fs.writeFile(outputPath, jsonString, 'utf8');

    console.log(
      `[mcp-index] wrote scripts/mcp-server/index.generated.json (${symbols.length} symbols)`,
    );
  } catch (error) {
    console.error('[mcp-index] error:', error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
}

buildIndex();
