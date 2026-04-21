/**
 * Unit tests for parse-exports.mjs
 *
 * Uses node:test (built-in Node test runner).
 * Invoke via: pnpm test:mcp-index
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import { fileURLToPath } from 'url';
import { detectDrift } from '../parse-exports.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..', '..', '..');

let cachedDrift;
async function getDrift() {
  if (!cachedDrift) {
    cachedDrift = await detectDrift({ repoRoot });
  }
  return cachedDrift;
}

test('drift detection returns object with three keys', async () => {
  const drift = await getDrift();
  assert.equal(typeof drift, 'object');
  assert.ok(drift.orphanSubpath !== undefined);
  assert.ok(drift.orphanSymbol !== undefined);
  assert.ok(drift.suggestedFixes !== undefined);
  assert.ok(Array.isArray(drift.orphanSubpath));
  assert.ok(Array.isArray(drift.orphanSymbol));
  assert.ok(Array.isArray(drift.suggestedFixes));
});

test('orphanSubpath contains ./Form (consolidated into ProForm)', async () => {
  const drift = await getDrift();
  const formSubpath = drift.orphanSubpath.find(entry => entry.subpath === './Form');
  assert.ok(formSubpath, 'should find ./Form in orphanSubpath');
  assert.equal(formSubpath.target, './es/components/Form/index.js');
  assert.equal(formSubpath.reason, 'no matching component directory or flat export');
});

test('orphanSubpath is sorted ascending by subpath', async () => {
  const drift = await getDrift();
  for (let i = 1; i < drift.orphanSubpath.length; i++) {
    assert.ok(
      drift.orphanSubpath[i - 1].subpath <= drift.orphanSubpath[i].subpath,
      `orphanSubpath not sorted: ${drift.orphanSubpath[i - 1].subpath} > ${drift.orphanSubpath[i].subpath}`,
    );
  }
});

test('orphanSymbol is sorted ascending by sourceSubpath', async () => {
  const drift = await getDrift();
  for (let i = 1; i < drift.orphanSymbol.length; i++) {
    assert.ok(
      drift.orphanSymbol[i - 1].sourceSubpath <= drift.orphanSymbol[i].sourceSubpath,
      `orphanSymbol not sorted: ${drift.orphanSymbol[i - 1].sourceSubpath} > ${drift.orphanSymbol[i].sourceSubpath}`,
    );
  }
});

test('suggestedFixes includes removeSubpath for ./Form', async () => {
  const drift = await getDrift();
  const formFix = drift.suggestedFixes.find(
    f => f.kind === 'removeSubpath' && f.subpath === './Form',
  );
  assert.ok(formFix, 'should find removeSubpath fix for ./Form');
});

test('suggestedFixes is sorted ascending by subpath', async () => {
  const drift = await getDrift();
  const subpaths = drift.suggestedFixes.map(f => f.subpath || '');
  for (let i = 1; i < subpaths.length; i++) {
    assert.ok(
      subpaths[i - 1] <= subpaths[i],
      `suggestedFixes not sorted: ${subpaths[i - 1]} > ${subpaths[i]}`,
    );
  }
});

test('orphanSubpath entries have required shape', async () => {
  const drift = await getDrift();
  for (const entry of drift.orphanSubpath) {
    assert.equal(typeof entry.subpath, 'string');
    assert.equal(typeof entry.target, 'string');
    assert.equal(typeof entry.reason, 'string');
  }
});

test('orphanSymbol entries have required shape', async () => {
  const drift = await getDrift();
  for (const entry of drift.orphanSymbol) {
    assert.equal(typeof entry.sourceSubpath, 'string');
    assert.ok(Array.isArray(entry.exports));
    assert.equal(typeof entry.reason, 'string');
  }
});

test('suggestedFixes entries have required shape', async () => {
  const drift = await getDrift();
  for (const entry of drift.suggestedFixes) {
    assert.equal(typeof entry.kind, 'string');
    assert.ok(['removeSubpath', 'addSubpath'].includes(entry.kind));
    assert.equal(typeof entry.subpath, 'string');
    assert.equal(typeof entry.note, 'string');
  }
});
