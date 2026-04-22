/**
 * Unit tests for parse-symbols.mjs
 *
 * Uses node:test (built-in Node test runner) so we don't need any extra
 * tooling to run `.mjs` files. Invoke via:
 *   pnpm test:mcp-index
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseSymbols } from '../parse-symbols.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..', '..', '..');

// Parse once — expensive, reuse across tests.
let cachedSymbols;
async function getSymbols() {
  if (!cachedSymbols) {
    cachedSymbols = await parseSymbols({ repoRoot });
  }
  return cachedSymbols;
}

function byName(symbols, name) {
  return symbols.find(s => s.name === name);
}

test('symbol list is sorted by name (determinism)', async () => {
  const symbols = await getSymbols();
  for (let i = 1; i < symbols.length; i++) {
    assert.ok(
      symbols[i - 1].name <= symbols[i].name,
      `symbols not sorted: ${symbols[i - 1].name} > ${symbols[i].name}`,
    );
  }
});

test('every symbol has searchTags set to empty array (Task 7 owns it)', async () => {
  const symbols = await getSymbols();
  for (const s of symbols) {
    assert.deepEqual(s.searchTags, []);
  }
});

test('Button: flat component with expected props and extends', async () => {
  const symbols = await getSymbols();
  const button = byName(symbols, 'Button');
  assert.ok(button, 'Button record should exist');
  assert.equal(button.kind, 'component');
  assert.equal(button.importPath, '@1money/component-ui');
  assert.equal(button.subpathImport, '@1money/component-ui/Button');
  assert.equal(button.sourceFile, 'src/components/Button/Button.tsx');

  // Props: verify presence, not exhaustive order, but also source-order preservation.
  const propNames = button.props.map(p => p.name);
  for (const expected of [
    'children',
    'prefixCls',
    'variant',
    'color',
    'size',
    'loading',
    'rounded',
    'iconStart',
    'iconEnd',
  ]) {
    assert.ok(propNames.includes(expected), `Button should expose prop "${expected}"`);
  }

  // Source-order check: children → prefixCls → variant → ... → iconEnd
  const childrenIdx = propNames.indexOf('children');
  const iconEndIdx = propNames.indexOf('iconEnd');
  assert.ok(childrenIdx >= 0 && iconEndIdx > childrenIdx, 'Props should preserve source order');

  // All Button props are optional (no required props on ButtonProps)
  for (const p of button.props) {
    assert.equal(p.optional, true, `Button prop "${p.name}" should be optional`);
  }

  // Extends text preserved exactly.
  assert.deepEqual(
    button.extends,
    ["Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'size'>"],
  );

  // JSDoc description should be captured for the `iconStart` prop.
  const iconStart = button.props.find(p => p.name === 'iconStart');
  assert.ok(iconStart.description.length > 0, 'iconStart should have a JSDoc description');
});

test('ProForm: module with Object.assign memberMap', async () => {
  const symbols = await getSymbols();
  const proForm = byName(symbols, 'ProForm');
  assert.ok(proForm, 'ProForm record should exist');
  assert.equal(proForm.kind, 'module');
  assert.ok(proForm.memberMap, 'ProForm should have memberMap');

  const map = proForm.memberMap;
  assert.equal(map.Item, 'ProFormItem');
  assert.equal(map.Text, 'ProFormText');
  assert.equal(map.Dependency, 'ProFormDependency');
  assert.equal(map.List, 'ProFormList');
  assert.equal(map.Group, 'ProFormGroup');
  assert.equal(map.FieldSet, 'ProFormFieldSet');
  // Local-only members use $local: prefix.
  assert.equal(map.Submitter, '$local:Submitter');
  assert.equal(map.useForm, '$local:useForm');
});

test('Grid / Row / Col: sibling components with cross-linked relatedSymbols', async () => {
  const symbols = await getSymbols();
  const grid = byName(symbols, 'Grid');
  const row = byName(symbols, 'Row');
  const col = byName(symbols, 'Col');

  assert.ok(grid && row && col, 'Grid, Row, Col records should all exist');
  assert.equal(grid.kind, 'component');
  assert.equal(row.kind, 'component');
  assert.equal(col.kind, 'component');

  // No memberMap on any of them (sibling, not namespace).
  assert.equal(grid.memberMap, undefined);
  assert.equal(row.memberMap, undefined);
  assert.equal(col.memberMap, undefined);

  // Cross-linked via relatedSymbols.
  assert.ok(grid.relatedSymbols.includes('Row'), 'Grid.relatedSymbols should include Row');
  assert.ok(grid.relatedSymbols.includes('Col'), 'Grid.relatedSymbols should include Col');
  assert.ok(row.relatedSymbols.includes('Grid'), 'Row.relatedSymbols should include Grid');
  assert.ok(row.relatedSymbols.includes('Col'), 'Row.relatedSymbols should include Col');
  assert.ok(col.relatedSymbols.includes('Grid'), 'Col.relatedSymbols should include Grid');
  assert.ok(col.relatedSymbols.includes('Row'), 'Col.relatedSymbols should include Row');
});

test('Icons: string-keyed module with empty memberMap', async () => {
  const symbols = await getSymbols();
  const icons = byName(symbols, 'Icons');
  assert.ok(icons, 'Icons record should exist');
  assert.equal(icons.kind, 'module');
  assert.ok(icons.memberMap, 'Icons should have memberMap');
  assert.deepEqual(icons.memberMap, {}, 'Icons memberMap should be empty (string-keyed)');
});

test('Props array: every entry has the required shape', async () => {
  const symbols = await getSymbols();
  for (const s of symbols) {
    for (const prop of s.props || []) {
      assert.equal(typeof prop.name, 'string');
      assert.equal(typeof prop.type, 'string');
      assert.equal(typeof prop.optional, 'boolean');
      assert.ok('default' in prop);
      assert.ok('description' in prop);
      assert.ok('inheritedFrom' in prop);
    }
  }
});

test('Module records (ProForm, Icons) carry memberMap; components do not', async () => {
  const symbols = await getSymbols();
  for (const s of symbols) {
    if (s.kind === 'module') {
      assert.ok(s.memberMap !== undefined, `${s.name}: module records must have memberMap`);
    } else {
      assert.equal(s.memberMap, undefined, `${s.name}: non-module records must not have memberMap`);
    }
  }
});

test('Public exports have importPath set to the library barrel', async () => {
  const symbols = await getSymbols();
  for (const s of symbols) {
    assert.equal(s.importPath, '@1money/component-ui');
  }
});
