/**
 * Unit tests for generate-canonical.mjs
 *
 * Uses node:test. Loads the committed `index.generated.json` as the symbol
 * list input (the same shape generateCanonical consumes at build time).
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import {
  generateCanonical,
  buildComponentSkeleton,
  buildCallableSkeleton,
  extractFirstFencedBlock,
  resolveOwningFolder,
} from '../generate-canonical.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..', '..', '..');
const indexPath = path.join(repoRoot, 'scripts', 'mcp-server', 'index.generated.json');

const MAX_SNIPPET_LENGTH = 240;

let cached;
async function getResult() {
  if (!cached) {
    const raw = await fs.readFile(indexPath, 'utf8');
    const { symbols } = JSON.parse(raw);
    cached = { symbols, result: await generateCanonical({ repoRoot, symbols }) };
  }
  return cached;
}

test('resolveOwningFolder picks first segment under src/components/', () => {
  assert.equal(
    resolveOwningFolder('src/components/Button/Button.tsx'),
    'src/components/Button',
  );
  assert.equal(
    resolveOwningFolder('src/components/ProForm/fields/ProFormText.tsx'),
    'src/components/ProForm',
  );
  assert.equal(
    resolveOwningFolder('src/components/Input/Input/Input.tsx'),
    'src/components/Input',
  );
  assert.equal(resolveOwningFolder('src/utils/cn.ts'), null);
  assert.equal(resolveOwningFolder(null), null);
});

test('extractFirstFencedBlock returns the first block body, trimmed', () => {
  const md = [
    '# Title',
    '',
    'Intro',
    '',
    '```tsx',
    '<Button>Click</Button>',
    '',
    '```',
    '',
    'More text',
    '',
    '```tsx',
    '<Other />',
    '```',
  ].join('\n');
  const block = extractFirstFencedBlock(md);
  assert.equal(block, '<Button>Click</Button>');
});

test('extractFirstFencedBlock returns null when no block present', () => {
  assert.equal(extractFirstFencedBlock('no code here'), null);
  assert.equal(extractFirstFencedBlock(''), null);
  assert.equal(extractFirstFencedBlock(null), null);
});

test('buildComponentSkeleton: no required props -> self-closing tag', () => {
  const skel = buildComponentSkeleton({
    name: 'Button',
    kind: 'component',
    props: [
      { name: 'color', type: "'primary' | 'secondary'", optional: true },
      { name: 'children', type: 'ReactNode', optional: true },
    ],
  });
  assert.equal(skel, '<Button />');
});

test('buildComponentSkeleton: required children (ReactNode) wraps Label', () => {
  const skel = buildComponentSkeleton({
    name: 'MyComp',
    kind: 'component',
    props: [{ name: 'children', type: 'ReactNode', optional: false }],
  });
  assert.equal(skel, '<MyComp>Label</MyComp>');
});

test('buildComponentSkeleton: required literal-union uses first literal', () => {
  const skel = buildComponentSkeleton({
    name: 'Badge',
    kind: 'component',
    props: [
      { name: 'tone', type: "'primary' | 'warning'", optional: false },
      { name: 'count', type: 'number', optional: false },
    ],
  });
  assert.equal(skel, '<Badge tone="primary" count={0} />');
});

test('buildComponentSkeleton: omits opaque required props', () => {
  const skel = buildComponentSkeleton({
    name: 'Weird',
    kind: 'component',
    props: [
      { name: 'control', type: 'SomeCustomType', optional: false },
      { name: 'value', type: 'string', optional: false },
    ],
  });
  // Opaque type omitted; `value` kept.
  assert.equal(skel, '<Weird value="value" />');
});

test('buildComponentSkeleton: truncates to 3 props when >3 required', () => {
  const skel = buildComponentSkeleton({
    name: 'Big',
    kind: 'component',
    props: [
      { name: 'a', type: 'string', optional: false },
      { name: 'b', type: 'string', optional: false },
      { name: 'c', type: 'string', optional: false },
      { name: 'd', type: 'string', optional: false },
      { name: 'e', type: 'string', optional: false },
    ],
  });
  assert.ok(skel, 'should produce a skeleton');
  assert.ok(skel.includes('{/* ...more required props */}'), 'should include truncation note');
});

test('buildCallableSkeleton: hook with signature yields const-call form', () => {
  const skel = buildCallableSkeleton({
    name: 'usePagination',
    kind: 'hook',
    signature: '(options: UsePaginationOptions): UsePaginationResult',
  });
  assert.equal(skel, 'const result = usePagination(options);');
});

test('buildCallableSkeleton: function with optional param drops optional', () => {
  const skel = buildCallableSkeleton({
    name: 'useResizeObserver',
    kind: 'hook',
    signature:
      '(enabled: boolean, getTarget: HTMLElement | (() => HTMLElement), onDelayResize?: OnResize, onSyncResize?: OnResize)',
  });
  // Required params are enabled and getTarget (onDelayResize?/onSyncResize? dropped)
  assert.ok(skel.includes('enabled'));
  assert.ok(skel.includes('getTarget'));
  assert.ok(!skel.includes('onDelayResize'));
});

test('buildCallableSkeleton: signature with no callable parens falls back to hint', () => {
  const skel = buildCallableSkeleton({
    name: 'notification',
    kind: 'function',
    signature: 'NotificationStaticApi',
  });
  assert.ok(skel.startsWith('notification'));
  assert.ok(skel.length <= MAX_SNIPPET_LENGTH);
});

test('generateCanonical validates inputs', async () => {
  await assert.rejects(() => generateCanonical({}), /repoRoot/u);
  await assert.rejects(() => generateCanonical({ repoRoot }), /symbols/u);
});

test('generateCanonical: Button yields a non-empty canonical within budget', async () => {
  const { result } = await getResult();
  const snippet = result.canonicals['Button'];
  // Button has a README whose first fenced block wins; fall back path should
  // be auto-skeleton (`<Button />`) since Button has no required props.
  assert.ok(snippet, 'Button should get a canonical');
  assert.ok(snippet.length > 0);
  assert.ok(snippet.length <= MAX_SNIPPET_LENGTH);
  // It must at least mention the Button name.
  assert.ok(snippet.includes('Button'), `expected snippet to mention Button: ${snippet}`);
});

test('generateCanonical: a component with no README and no required props yields <Name />', async () => {
  // Construct a minimal mock symbol to force the auto-skeleton branch.
  const tmpRoot = repoRoot; // any path with no canonical.md / README for "ZzzMock"
  const { canonicals, diagnostics } = await generateCanonical({
    repoRoot: tmpRoot,
    symbols: [
      {
        name: 'ZzzMock',
        kind: 'component',
        sourceFile: 'src/components/ZzzMockNoSuchFolder/ZzzMock.tsx',
        props: [],
      },
    ],
  });
  assert.equal(canonicals.ZzzMock, '<ZzzMock />');
  assert.equal(diagnostics.length, 0);
});

test('generateCanonical: component with required ReactNode children produces Label wrap', async () => {
  const { canonicals } = await generateCanonical({
    repoRoot,
    symbols: [
      {
        name: 'MockChild',
        kind: 'component',
        sourceFile: 'src/components/__no_such_folder__/X.tsx',
        props: [{ name: 'children', type: 'ReactNode', optional: false }],
      },
    ],
  });
  assert.equal(canonicals.MockChild, '<MockChild>Label</MockChild>');
});

test('generateCanonical: ProForm (module) produces diagnostic, no canonical', async () => {
  const { result } = await getResult();
  assert.equal(result.canonicals['ProForm'], undefined);
  const diag = result.diagnostics.find(d => d.symbolName === 'ProForm');
  assert.ok(diag, 'should have a diagnostic for ProForm');
  assert.match(diag.reason, /module/u);
});

test('generateCanonical: Icons (module) produces diagnostic, no canonical', async () => {
  const { result } = await getResult();
  assert.equal(result.canonicals['Icons'], undefined);
  const diag = result.diagnostics.find(d => d.symbolName === 'Icons');
  assert.ok(diag, 'should have a diagnostic for Icons');
  assert.match(diag.reason, /module/u);
});

test('generateCanonical: Input (module) produces diagnostic, no canonical', async () => {
  const { result } = await getResult();
  assert.equal(result.canonicals['Input'], undefined);
  const diag = result.diagnostics.find(d => d.symbolName === 'Input');
  assert.ok(diag, 'should have a diagnostic for Input');
});

test('generateCanonical: usePagination (hook) does not crash and produces output', async () => {
  const { result } = await getResult();
  // Either gets a canonical (skeleton), or is in diagnostics — must not error.
  const snippet = result.canonicals['usePagination'];
  const diag = result.diagnostics.find(d => d.symbolName === 'usePagination');
  assert.ok(snippet || diag, 'usePagination should be handled (canonical or diagnostic)');
  if (snippet) assert.ok(snippet.length <= MAX_SNIPPET_LENGTH);
});

test('generateCanonical: every emitted snippet is <= 240 chars', async () => {
  const { result } = await getResult();
  for (const [name, snippet] of Object.entries(result.canonicals)) {
    assert.ok(typeof snippet === 'string', `${name} canonical should be a string`);
    assert.ok(
      snippet.length <= MAX_SNIPPET_LENGTH,
      `${name} snippet length ${snippet.length} > ${MAX_SNIPPET_LENGTH}: ${snippet}`,
    );
  }
});

test('generateCanonical: every canonical maps to an existing symbol', async () => {
  const { symbols, result } = await getResult();
  const names = new Set(symbols.map(s => s.name));
  for (const key of Object.keys(result.canonicals)) {
    assert.ok(names.has(key), `canonical key ${key} should refer to an existing symbol`);
  }
});

test('generateCanonical: all 3 known modules end up in diagnostics', async () => {
  const { result } = await getResult();
  const moduleNames = ['ProForm', 'Icons', 'Input'];
  for (const name of moduleNames) {
    const diag = result.diagnostics.find(d => d.symbolName === name);
    assert.ok(diag, `${name} should have a diagnostic entry`);
  }
});
