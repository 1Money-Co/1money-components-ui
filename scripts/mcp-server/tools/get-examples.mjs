/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: get_examples
 *
 * Returns curated usage examples for a symbol.
 *
 * Input:  { name, limit = 3, source = 'all' }
 * Output: { examples: [{ title, code, source, compilable }] }
 *
 * Name resolution mirrors `get_symbol`:
 *   - dotted paths (`ProForm.Item`) resolve through a module's memberMap
 *   - flat names (`Button`) resolve directly
 *   - unknown names return `{ examples: [], note, hint }`
 *
 * The example bodies live in `examples.generated.json` (content-hashed). The
 * per-symbol references (in `symbol.examples`) are hydrated against that
 * payload at request time.
 */

const VALID_SOURCES = ['all', 'readme', 'stories', 'canonical'];
const DEFAULT_LIMIT = 3;
const LOCAL_PREFIX = '$local:';

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  if (typeof args.name !== 'string' || args.name.trim().length === 0) {
    throw new Error('get_examples: `name` must be a non-empty string');
  }
  const source = args.source ?? 'all';
  if (!VALID_SOURCES.includes(source)) {
    throw new Error(
      `get_examples: invalid source '${source}', expected one of ${VALID_SOURCES.join(', ')}`,
    );
  }
  const limit =
    typeof args.limit === 'number' && Number.isFinite(args.limit) && args.limit > 0
      ? Math.floor(args.limit)
      : DEFAULT_LIMIT;
  return { name: args.name.trim(), source, limit };
}

function buildByName(index) {
  const byName = new Map();
  for (const sym of index.symbols) {
    byName.set(sym.name, sym);
  }
  return byName;
}

/** Resolve a dotted-path lookup against a module's memberMap. */
function resolveDotted(inputName, byName) {
  const dotIdx = inputName.indexOf('.');
  const ownerName = inputName.slice(0, dotIdx);
  const memberKey = inputName.slice(dotIdx + 1);
  const owner = byName.get(ownerName);
  if (!owner || owner.kind !== 'module' || !owner.memberMap) return null;
  const target = owner.memberMap[memberKey];
  if (typeof target !== 'string') return null;
  if (target.startsWith(LOCAL_PREFIX)) {
    return { internal: true, ownerName };
  }
  return byName.get(target) ?? null;
}

function hintForMissing(name) {
  if (/^Icons\.[A-Z]/.test(name)) {
    return 'Icon names are string keys, not exported symbols. Use `<Icons name="chevronDown" />` (camelCase) and call `list_icons` for names.';
  }
  if (/^use[A-Z]/.test(name)) {
    return 'This hook may live in `@1money/hooks`, not `@1money/component-ui`. Check that package.';
  }
  return `No exported symbol named '${name}'. Use search_symbols to discover candidates.`;
}

export default function getExamples(input, ctx) {
  const { name, source, limit } = validateInput(input);
  const { index, examplesIndex } = ctx ?? {};
  if (!index || !Array.isArray(index.symbols)) {
    throw new Error('get_examples: context missing `index`');
  }
  if (!examplesIndex || typeof examplesIndex.examples !== 'object') {
    throw new Error('get_examples: context missing `examplesIndex`');
  }

  const byName = buildByName(index);

  let sym = null;
  if (name.includes('.')) {
    const resolved = resolveDotted(name, byName);
    if (resolved && resolved.internal) {
      return {
        examples: [],
        note: `'${name}' is an internal member of '${resolved.ownerName}'; not separately exported.`,
      };
    }
    sym = resolved ?? null;
  } else {
    sym = byName.get(name) ?? null;
  }

  if (!sym) {
    return { examples: [], note: hintForMissing(name) };
  }

  const refs = Array.isArray(sym.examples) ? sym.examples : [];
  const filtered =
    source === 'all' ? refs : refs.filter(r => r && r.source === source);

  const hydrated = [];
  for (const ref of filtered) {
    if (!ref || typeof ref.hash !== 'string') continue;
    const body = examplesIndex.examples[ref.hash];
    if (!body) continue;
    hydrated.push({
      title: body.title,
      code: body.code,
      source: body.source,
      compilable: body.compilable,
    });
    if (hydrated.length >= limit) break;
  }

  return { examples: hydrated };
}
