import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';
import { parseSymbols } from './parse-symbols.mjs';
import { parseTokens } from './parse-tokens.mjs';
import { parseIcons } from './parse-icons.mjs';
import { detectDrift } from './parse-exports.mjs';
import { generateCanonical } from './generate-canonical.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'index.generated.json');

async function buildIndex() {
  try {
    // Call all parsers (ignore their outputs for now)
    await parseSymbols();
    await parseTokens();
    await parseIcons();
    await detectDrift();
    await generateCanonical();

    // Create the minimal schema
    const index = {
      schemaVersion: '1',
      generatedAt: new Date().toISOString(),
      symbols: [],
    };

    // Write deterministically formatted JSON
    const jsonString = JSON.stringify(index, null, 2) + '\n';
    await fs.writeFile(outputPath, jsonString, 'utf8');

    console.log('[mcp-index] wrote scripts/mcp-server/index.generated.json');
  } catch (error) {
    console.error('[mcp-index] error:', error.message);
    process.exit(1);
  }
}

buildIndex();
