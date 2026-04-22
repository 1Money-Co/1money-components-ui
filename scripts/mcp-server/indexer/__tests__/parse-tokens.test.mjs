/**
 * Unit tests for parse-tokens.mjs
 *
 * Uses node:test (built-in Node test runner) so we don't need any extra
 * tooling to run `.mjs` files. Invoke via:
 *   node --test scripts/mcp-server/indexer/__tests__/parse-tokens.test.mjs
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseTokens } from '../parse-tokens.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..', '..', '..');

// Parse once — reuse across tests.
let cached;
async function getTokens() {
  if (!cached) {
    cached = await parseTokens({ repoRoot });
  }
  return cached;
}

function find(tokens, predicate) {
  return tokens.find(predicate);
}

test('primitive blue-700: hex value, resolved equals value, color/primitive kind/layer', async () => {
  const tokens = await getTokens();
  const blue700 = find(tokens, t => t.name === 'blue-700' && t.layer === 'primitive');
  assert.ok(blue700, 'blue-700 primitive record should exist');
  assert.equal(blue700.value, '#073387');
  assert.equal(blue700.resolved, '#073387');
  assert.equal(blue700.kind, 'color');
  assert.equal(blue700.layer, 'primitive');
  assert.equal(blue700.cssVar, '--om-color-blue-700');
  assert.equal(blue700.scss, '$blue-700');
});

test('semantic bg-brand: value references primitive, resolved to blue-700 hex', async () => {
  const tokens = await getTokens();
  const bgBrand = find(tokens, t => t.name === 'bg-brand' && t.layer === 'semantic');
  assert.ok(bgBrand, 'bg-brand semantic record should exist');
  assert.ok(
    bgBrand.value.includes('p.$blue-700'),
    `bg-brand value should reference p.$blue-700; got: ${bgBrand.value}`,
  );
  assert.equal(bgBrand.resolved, '#073387');
  assert.equal(bgBrand.kind, 'color');
  assert.equal(bgBrand.layer, 'semantic');
  assert.equal(bgBrand.cssVar, '--om-color-bg-brand');
  assert.equal(bgBrand.scss, "$om-bg-scale['brand']");
});

test('derived semantic gap-100 exists with kind=spacing and layer=semantic', async () => {
  const tokens = await getTokens();
  const gap100 = find(tokens, t => t.name === 'gap-100' && t.layer === 'semantic');
  assert.ok(gap100, 'gap-100 semantic record should exist');
  assert.equal(gap100.kind, 'spacing');
  assert.equal(gap100.layer, 'semantic');
  assert.equal(gap100.cssVar, '--om-spacing-gap-100');
  // Value is the primitive-map reference string as written.
  assert.ok(
    gap100.value.includes("$om-spacing-scale") && gap100.value.includes("'100'"),
    `gap-100 value should reference primitive spacing-scale; got: ${gap100.value}`,
  );
  // Resolved should be the primitive entry's raw value (e.g., '1').
  assert.equal(gap100.resolved, '1');
});

test('unresolvable semantic (bg-disabled-black uses rgba()): resolved === value', async () => {
  const tokens = await getTokens();
  const disabledBlack = find(tokens, t => t.name === 'bg-disabled-black' && t.layer === 'semantic');
  assert.ok(disabledBlack, 'bg-disabled-black semantic record should exist');
  assert.ok(
    disabledBlack.value.includes('rgba('),
    `expected rgba(...) RHS; got: ${disabledBlack.value}`,
  );
  assert.equal(
    disabledBlack.resolved,
    disabledBlack.value,
    'rgba() RHS should stay raw — no one-level resolution possible',
  );
});

test('output sort order: (kind, layer, name) strictly ascending from first to last', async () => {
  const tokens = await getTokens();
  assert.ok(tokens.length >= 2, 'need at least 2 records to check sort');
  const first = tokens[0];
  const last = tokens[tokens.length - 1];
  const layerRank = { primitive: 0, semantic: 1 };
  const firstTuple = [first.kind, layerRank[first.layer] ?? 99, first.name];
  const lastTuple = [last.kind, layerRank[last.layer] ?? 99, last.name];
  // Lexicographic compare on the tuple.
  const cmp =
    firstTuple[0] < lastTuple[0] ? -1 :
    firstTuple[0] > lastTuple[0] ? 1 :
    firstTuple[1] !== lastTuple[1] ? firstTuple[1] - lastTuple[1] :
    firstTuple[2] < lastTuple[2] ? -1 :
    firstTuple[2] > lastTuple[2] ? 1 : 0;
  assert.ok(cmp < 0, `first ${JSON.stringify(firstTuple)} should precede last ${JSON.stringify(lastTuple)}`);

  // Also verify monotonic non-decreasing across the full list.
  for (let i = 1; i < tokens.length; i++) {
    const a = tokens[i - 1];
    const b = tokens[i];
    const ak = a.kind, bk = b.kind;
    if (ak !== bk) {
      assert.ok(ak < bk, `kinds not sorted at index ${i}: ${ak} > ${bk}`);
      continue;
    }
    const al = layerRank[a.layer] ?? 99;
    const bl = layerRank[b.layer] ?? 99;
    if (al !== bl) {
      assert.ok(al < bl, `layers not sorted within kind ${ak} at index ${i}: ${a.layer} > ${b.layer}`);
      continue;
    }
    assert.ok(a.name <= b.name, `names not sorted within (${ak}, ${a.layer}) at index ${i}: ${a.name} > ${b.name}`);
  }
});

test('every record has the required shape and non-empty required fields', async () => {
  const tokens = await getTokens();
  for (const t of tokens) {
    assert.equal(typeof t.name, 'string', `name not string: ${JSON.stringify(t)}`);
    assert.ok(t.name.length > 0, `empty name: ${JSON.stringify(t)}`);
    assert.equal(typeof t.scss, 'string');
    assert.equal(typeof t.cssVar, 'string');
    assert.ok(t.cssVar.startsWith('--om-'), `cssVar must start with --om-: ${t.cssVar}`);
    assert.equal(typeof t.value, 'string');
    assert.equal(typeof t.resolved, 'string');
    assert.ok(['primitive', 'semantic'].includes(t.layer), `bad layer: ${t.layer}`);
    assert.ok(t.kind.length > 0, 'kind must be non-empty');
  }
});
