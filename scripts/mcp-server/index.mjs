/* eslint-disable no-undef */
/* eslint-env node */
/**
 * 1money-react-ui MCP stdio server.
 *
 * Loads the committed `index.generated.json`, `drift.json`, and `package.json`
 * at startup (never on per-request basis) and serves 8 MCP tools over a
 * stdio transport.
 *
 * Use `node scripts/mcp-server/index.mjs --selftest` to run each handler
 * with a canned input — useful for smoke-testing without a real MCP client.
 */

import process from 'node:process';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema
} from '@modelcontextprotocol/sdk/types.js';

import listSymbols from './tools/list-symbols.mjs';
import searchSymbols from './tools/search-symbols.mjs';
import getSymbol from './tools/get-symbol.mjs';
import getExamples from './tools/get-examples.mjs';
import listIcons from './tools/list-icons.mjs';
import getToken from './tools/get-token.mjs';
import resolveImport from './tools/resolve-import.mjs';
import getLibraryInfo from './tools/get-library-info.mjs';

const EXPECTED_SCHEMA_VERSION = '1';
const SERVER_NAME = '1money-react-ui';
const SERVER_VERSION = '0.1.0';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');
const indexPath = path.join(__dirname, 'index.generated.json');
const driftPath = path.join(__dirname, 'drift.json');
const pkgPath = path.join(repoRoot, 'package.json');

/**
 * Tool catalog — exposed to clients via tools/list. Input schemas are plain
 * JSON Schema (not Zod) so we don't take a hard dep on zod here; the server
 * routes to plain JS handlers below that do their own manual validation.
 */
const TOOL_CATALOG = [
  {
    name: 'list_symbols',
    description:
      'List top-level exported symbols (components, modules, hooks, types). Namespace roots (ProForm, Icons, Input) surface as kind=module.',
    inputSchema: {
      type: 'object',
      properties: {
        kind: {
          type: 'string',
          enum: ['component', 'module', 'hook', 'function', 'type', 'all'],
          default: 'all',
          description: 'Filter by symbol kind. Use "all" to include every kind.'
        },
        category: {
          type: 'string',
          description: 'Optional category filter (e.g., "input", "display").'
        }
      },
      additionalProperties: false
    },
    handler: listSymbols
  },
  {
    name: 'search_symbols',
    description:
      'Fuzzy search over the symbol index. Searches name, aliases (searchTags), summary, and prop names.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search term.' },
        limit: { type: 'integer', minimum: 1, default: 5 }
      },
      required: ['query'],
      additionalProperties: false
    },
    handler: searchSymbols
  },
  {
    name: 'get_symbol',
    description:
      'Fetch a detailed symbol record. Accepts both flat names (e.g., "ProFormItem") and dotted paths (e.g., "ProForm.Item"). Returns { kind: "not_exported", hint } when the name cannot be resolved.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Flat or dotted symbol name.' },
        include: {
          type: 'array',
          items: { enum: ['props', 'examples', 'members', 'notes', 'related'] },
          default: ['props', 'members']
        }
      },
      required: ['name'],
      additionalProperties: false
    },
    handler: getSymbol
  },
  {
    name: 'get_examples',
    description:
      'Fetch curated usage examples for a symbol. V1 returns an empty list; example extraction lands in a follow-up task.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        limit: { type: 'integer', minimum: 1, default: 3 },
        source: {
          type: 'string',
          enum: ['all', 'readme', 'stories', 'canonical'],
          default: 'all'
        }
      },
      required: ['name'],
      additionalProperties: false
    },
    handler: getExamples
  },
  {
    name: 'list_icons',
    description:
      'List icon names for the <Icons /> component. Optionally filter by case-insensitive substring.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string' },
        limit: { type: 'integer', minimum: 1 }
      },
      additionalProperties: false
    },
    handler: listIcons
  },
  {
    name: 'get_token',
    description:
      'Query design tokens by name, kind, or name prefix. Filters combine with AND semantics.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        kind: {
          type: 'string',
          enum: [
            'color',
            'spacing',
            'radius',
            'shadow',
            'sizing',
            'opacity',
            'typography',
            'breakpoint'
          ]
        },
        prefix: { type: 'string' }
      },
      additionalProperties: false
    },
    handler: getToken
  },
  {
    name: 'resolve_import',
    description:
      'Resolve how to import a symbol. Supports flat names and namespace-member paths (e.g., "ProForm.Item"). Rejects Icons.<Name> with a clear hint.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: { type: 'string' }
      },
      required: ['symbol'],
      additionalProperties: false
    },
    handler: resolveImport
  },
  {
    name: 'get_library_info',
    description:
      'Return package metadata: name, version, peer deps, available subpath exports, CSS entry, and schema version.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false
    },
    handler: getLibraryInfo
  }
];

async function loadContext() {
  const [indexRaw, driftRaw, pkgRaw] = await Promise.all([
    fs.readFile(indexPath, 'utf8'),
    fs.readFile(driftPath, 'utf8'),
    fs.readFile(pkgPath, 'utf8')
  ]);

  const index = JSON.parse(indexRaw);
  const drift = JSON.parse(driftRaw);
  const pkg = JSON.parse(pkgRaw);

  if (index.schemaVersion !== EXPECTED_SCHEMA_VERSION) {
    console.error(
      `[mcp] schemaVersion mismatch: expected '${EXPECTED_SCHEMA_VERSION}', got '${index.schemaVersion}'. ` +
        'Regenerate index.generated.json with `pnpm build:mcp-index` and ensure the indexer produces the expected schemaVersion.'
    );
    process.exit(1);
  }

  return { index, drift, pkg };
}

function toToolResult(value) {
  return {
    content: [{ type: 'text', text: JSON.stringify(value, null, 2) }],
    structuredContent: value
  };
}

function toToolError(message) {
  return {
    content: [{ type: 'text', text: message }],
    isError: true
  };
}

function findTool(name) {
  return TOOL_CATALOG.find(t => t.name === name);
}

async function runTool(name, rawInput, ctx) {
  const tool = findTool(name);
  if (!tool) {
    throw new Error(`Unknown tool: ${name}`);
  }
  return Promise.resolve(tool.handler(rawInput ?? {}, ctx));
}

async function runSelfTest(ctx) {
  const cannedInputs = {
    list_symbols: { kind: 'component' },
    search_symbols: { query: 'button', limit: 3 },
    get_symbol: { name: 'ProForm.Item' },
    get_examples: { name: 'Button' },
    list_icons: { query: 'chevron', limit: 5 },
    get_token: { kind: 'breakpoint' },
    resolve_import: { symbol: 'ProForm.Item' },
    get_library_info: {}
  };

  const results = [];
  for (const tool of TOOL_CATALOG) {
    const input = cannedInputs[tool.name] ?? {};
    try {
      const output = await runTool(tool.name, input, ctx);
      results.push({ name: tool.name, ok: true, output });
    } catch (err) {
      results.push({ name: tool.name, ok: false, error: err.message });
    }
  }

  process.stdout.write(JSON.stringify({ selftest: true, toolCount: results.length, results }, null, 2) + '\n');
  const anyFailed = results.some(r => !r.ok);
  process.exit(anyFailed ? 1 : 0);
}

async function startStdioServer(ctx) {
  const server = new Server(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, () => ({
    tools: TOOL_CATALOG.map(({ name, description, inputSchema }) => ({
      name,
      description,
      inputSchema
    }))
  }));

  server.setRequestHandler(CallToolRequestSchema, async request => {
    const { name, arguments: args } = request.params;
    try {
      const output = await runTool(name, args ?? {}, ctx);
      return toToolResult(output);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return toToolError(message);
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    `[mcp] ${SERVER_NAME} v${SERVER_VERSION} listening on stdio (tools: ${TOOL_CATALOG.length})`
  );
}

async function main() {
  const argv = process.argv.slice(2);
  const ctx = await loadContext();
  if (argv.includes('--selftest')) {
    await runSelfTest(ctx);
    return;
  }
  await startStdioServer(ctx);
}

main().catch(err => {
  console.error('[mcp] Fatal error:', err);
  process.exit(1);
});
