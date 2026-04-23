/**
 * Unit tests for the get_symbol tool's dotted-path resolver.
 *
 * Loads the committed `index.generated.json` and exercises the resolution
 * algorithm from plan §4.
 *
 * Run via `pnpm test:mcp-index` once glob is updated, or directly:
 *   node --test scripts/mcp-server/tools/__tests__/*.test.mjs
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import getSymbol from '../get-symbol.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.resolve(__dirname, '..', '..', 'index.generated.json');

let cachedIndex;
async function getCtx() {
  if (!cachedIndex) {
    const raw = await fs.readFile(indexPath, 'utf8');
    cachedIndex = JSON.parse(raw);
  }
  return { index: cachedIndex };
}

test('flat component lookup returns the matching record', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'Button' }, ctx);
  assert.equal(result.name, 'Button');
  assert.equal(result.kind, 'component');
  assert.equal(result.inputName, 'Button');
  assert.ok(Array.isArray(result.props));
  assert.ok(result.imports && result.imports.named.includes('Button'));
});

test('dotted path resolves to flat exported member', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'ProForm.Item' }, ctx);
  assert.equal(result.kind, 'component');
  assert.equal(result.name, 'ProFormItem');
  assert.equal(result.inputName, 'ProForm.Item');
  assert.ok(result.imports.namespaceAccess === 'ProForm.Item');
});

test('dotted path to $local member returns not_exported with internal-member hint', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'ProForm.useForm' }, ctx);
  assert.equal(result.kind, 'not_exported');
  assert.equal(result.inputName, 'ProForm.useForm');
  assert.match(result.hint, /internal member/i);
});

test('Icons.<PascalName> returns not_exported with list_icons hint', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'Icons.ChevronDown' }, ctx);
  assert.equal(result.kind, 'not_exported');
  assert.match(result.hint, /list_icons/);
});

test('missing hook name suggests @1money/hooks package', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'useControlledState' }, ctx);
  assert.equal(result.kind, 'not_exported');
  assert.match(result.hint, /@1money\/hooks/);
});

test('completely unknown symbol returns not_exported with generic hint', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'NonExistent' }, ctx);
  assert.equal(result.kind, 'not_exported');
  assert.equal(result.name, 'NonExistent');
  assert.ok(typeof result.hint === 'string' && result.hint.length > 0);
});

test('module lookup populates non-empty members list', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'ProForm' }, ctx);
  assert.equal(result.kind, 'module');
  assert.ok(Array.isArray(result.members));
  assert.ok(result.members.length > 0, 'ProForm should expose members');
  // At least one member should be an exported flat symbol (isLocal: false).
  assert.ok(result.members.some(m => m.isLocal === false));
  // And at least one should be internal-only (isLocal: true) — e.g. useForm.
  assert.ok(result.members.some(m => m.isLocal === true));
});

test('include filter drops members when not requested', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'ProForm', include: ['props'] }, ctx);
  assert.equal(result.kind, 'module');
  // When `members` is not in include, the record's members array stays empty.
  assert.deepEqual(result.members, []);
  assert.ok(Array.isArray(result.props));
});

test('dotted path where owner is not a module falls through to not_exported', async () => {
  const ctx = await getCtx();
  const result = getSymbol({ name: 'Button.Nope' }, ctx);
  assert.equal(result.kind, 'not_exported');
});
