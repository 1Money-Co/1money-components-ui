/**
 * Unit tests for the get_examples tool.
 *
 * Loads the committed `index.generated.json` + `examples.generated.json`
 * (produced by `pnpm build:mcp-index`) and exercises the filter / dotted-path
 * / limit / missing-name behaviors from plan §3.4 and §9 Task 10.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import getExamples from '../get-examples.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.resolve(__dirname, '..', '..', 'index.generated.json');
const examplesPath = path.resolve(__dirname, '..', '..', 'examples.generated.json');

let cached;
async function getCtx() {
  if (!cached) {
    const [idxRaw, exRaw] = await Promise.all([
      fs.readFile(indexPath, 'utf8'),
      fs.readFile(examplesPath, 'utf8'),
    ]);
    cached = {
      index: JSON.parse(idxRaw),
      examplesIndex: JSON.parse(exRaw),
    };
  }
  return cached;
}

test('get_examples: Button returns at least one readme-sourced entry', async () => {
  const ctx = await getCtx();
  const result = getExamples({ name: 'Button' }, ctx);
  assert.ok(Array.isArray(result.examples));
  assert.ok(result.examples.length > 0, 'Button should have examples');
  const readmeEntries = result.examples.filter(e => e.source === 'readme');
  assert.ok(
    readmeEntries.length > 0,
    'Button README has usage fences — at least one readme example expected',
  );
  for (const entry of result.examples) {
    assert.equal(typeof entry.title, 'string');
    assert.equal(typeof entry.code, 'string');
    assert.ok(entry.code.length > 0);
    assert.ok(['readme', 'stories', 'canonical'].includes(entry.source));
    assert.equal(typeof entry.compilable, 'boolean');
  }
});

test('get_examples: source=stories returns only story-sourced entries', async () => {
  const ctx = await getCtx();
  const result = getExamples({ name: 'Button', source: 'stories', limit: 10 }, ctx);
  assert.ok(result.examples.length > 0, 'Button has stories — expected at least one');
  for (const entry of result.examples) {
    assert.equal(entry.source, 'stories');
  }
});

test('get_examples: limit caps the number of returned entries', async () => {
  const ctx = await getCtx();
  const result = getExamples({ name: 'Button', limit: 1 }, ctx);
  assert.equal(result.examples.length, 1);
});

test('get_examples: unknown name returns empty list with a hint note', async () => {
  const ctx = await getCtx();
  const result = getExamples({ name: 'DefinitelyNotAComponent' }, ctx);
  assert.deepEqual(result.examples, []);
  assert.equal(typeof result.note, 'string');
  assert.ok(result.note.length > 0);
});

test('get_examples: missing `name` throws a validation error', async () => {
  const ctx = await getCtx();
  assert.throws(
    () => getExamples({}, ctx),
    /name/,
  );
});

test('get_examples: dotted path ProForm.Item resolves to ProFormItem canonical', async () => {
  const ctx = await getCtx();
  const result = getExamples(
    { name: 'ProForm.Item', source: 'canonical', limit: 5 },
    ctx,
  );
  assert.ok(result.examples.length >= 1, 'ProFormItem should expose a canonical example');
  assert.equal(result.examples[0].source, 'canonical');
  assert.equal(typeof result.examples[0].code, 'string');
  assert.ok(result.examples[0].code.length > 0);
});

test('get_examples: stories entries using args/fn()/spread are flagged compilable=false', async () => {
  const ctx = await getCtx();
  const result = getExamples({ name: 'Button', source: 'stories', limit: 20 }, ctx);
  const nonCompilable = result.examples.filter(e => e.compilable === false);
  assert.ok(
    nonCompilable.length > 0,
    'Button stories reference args/fn() so at least one entry should be compilable=false',
  );
  for (const entry of nonCompilable) {
    // Code must still be populated — plan §10.2 says we ship the raw snippet.
    assert.ok(entry.code.length > 0);
    // At least one of the non-compilable markers should explain the flag.
    assert.ok(
      /args|fn\(\)|meta\.args|\{\.\.\.args\}/.test(entry.code),
      `non-compilable entry should reference Storybook args tokens; got: ${entry.code.slice(0, 80)}`,
    );
  }
});

test('get_examples: source=all is the default and aggregates every source', async () => {
  const ctx = await getCtx();
  const result = getExamples({ name: 'Button', limit: 50 }, ctx);
  const sources = new Set(result.examples.map(e => e.source));
  assert.ok(sources.has('canonical'));
  assert.ok(sources.has('readme'));
  assert.ok(sources.has('stories'));
});
