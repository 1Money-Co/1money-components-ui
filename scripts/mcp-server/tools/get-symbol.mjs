/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: get_symbol
 *
 * Resolves flat names (`ProFormItem`) AND dotted paths (`ProForm.Item`) and
 * returns a rich record. See plan §3.3 and §4 for the exact resolution
 * algorithm.
 */

const VALID_INCLUDES = ['props', 'examples', 'members', 'notes', 'related'];
const DEFAULT_INCLUDE = ['props', 'members'];
const LOCAL_PREFIX = '$local:';
const EXAMPLES_LIMIT = 3;

const ICONS_DOTTED = /^Icons\.[A-Z][A-Za-z0-9]*$/;
const HOOK_PREFIX = /^use[A-Z]/;

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  if (typeof args.name !== 'string' || args.name.trim().length === 0) {
    throw new Error('get_symbol: `name` must be a non-empty string');
  }
  let include;
  if (args.include === undefined) {
    include = DEFAULT_INCLUDE;
  } else if (Array.isArray(args.include)) {
    for (const entry of args.include) {
      if (!VALID_INCLUDES.includes(entry)) {
        throw new Error(
          `get_symbol: invalid include entry '${entry}', expected one of ${VALID_INCLUDES.join(', ')}`
        );
      }
    }
    include = args.include;
  } else {
    throw new Error('get_symbol: `include` must be an array of strings when provided');
  }
  return { name: args.name.trim(), include };
}

/**
 * Build a name -> symbol map and a reverse owner lookup that maps any flat
 * member name back to its owner module (so we can populate namespaceAccess).
 */
function buildLookups(index) {
  const byName = new Map();
  const ownerLookup = new Map();
  for (const sym of index.symbols) {
    byName.set(sym.name, sym);
  }
  for (const sym of index.symbols) {
    if (sym.kind === 'module' && sym.memberMap && typeof sym.memberMap === 'object') {
      for (const [key, target] of Object.entries(sym.memberMap)) {
        if (typeof target === 'string' && !target.startsWith(LOCAL_PREFIX)) {
          if (!ownerLookup.has(target)) {
            ownerLookup.set(target, { owner: sym.name, memberKey: key });
          }
        }
      }
    }
  }
  return { byName, ownerLookup };
}

function notExported(inputName, hint) {
  return { kind: 'not_exported', name: inputName, inputName, hint };
}

function buildHintForMissing(name) {
  if (ICONS_DOTTED.test(name)) {
    return 'Icon names are string keys, not exported symbols. Use `<Icons name="chevronDown" />` (camelCase) and call `list_icons` to discover available names.';
  }
  if (HOOK_PREFIX.test(name)) {
    return 'This hook may live in `@1money/hooks`, not `@1money/component-ui`. Check that package.';
  }
  return `No exported symbol named '${name}'. Use search_symbols to discover candidates.`;
}

function buildImports(sym, owner, ownerMemberKey) {
  const imports = {
    named: `import { ${sym.name} } from '@1money/component-ui';`,
    css: "import '@1money/component-ui/index.css'; // global, covers all"
  };
  if (owner && ownerMemberKey) {
    imports.namespaceAccess = `${owner}.${ownerMemberKey}`;
  }
  if (sym.subpathImport) {
    imports.subpath = `import { ${sym.name} } from '${sym.subpathImport}';`;
  }
  return imports;
}

function buildMembers(sym) {
  if (sym.kind !== 'module' || !sym.memberMap || typeof sym.memberMap !== 'object') {
    return [];
  }
  return Object.entries(sym.memberMap).map(([key, target]) => {
    const isLocal = typeof target === 'string' && target.startsWith(LOCAL_PREFIX);
    const flatName = isLocal ? target.slice(LOCAL_PREFIX.length) : target;
    return { key, flatName, isLocal };
  });
}

function buildCanonicalUsage(sym) {
  if (typeof sym.canonicalUsage === 'string' && sym.canonicalUsage.length > 0) {
    return sym.canonicalUsage;
  }
  if (sym.kind === 'module') {
    return `// ${sym.name} is a namespace; see members via get_symbol('${sym.name}').members`;
  }
  return `import { ${sym.name} } from '@1money/component-ui';`;
}

function hydrateExamples(sym, examplesIndex) {
  if (!examplesIndex || typeof examplesIndex.examples !== 'object') return [];
  const refs = Array.isArray(sym.examples) ? sym.examples : [];
  const hydrated = [];
  for (const ref of refs) {
    if (!ref || typeof ref.hash !== 'string') continue;
    const body = examplesIndex.examples[ref.hash];
    if (!body) continue;
    hydrated.push({
      title: body.title,
      code: body.code,
      source: body.source,
      compilable: body.compilable,
    });
    if (hydrated.length >= EXAMPLES_LIMIT) break;
  }
  return hydrated;
}

function buildRecord(sym, inputName, { ownerLookup, include, examplesIndex }) {
  const ownerRef = ownerLookup.get(sym.name);
  const imports = buildImports(
    sym,
    ownerRef ? ownerRef.owner : null,
    ownerRef ? ownerRef.memberKey : null
  );

  const record = {
    name: sym.name,
    inputName,
    kind: sym.kind,
    category: sym.category ?? null,
    summary: sym.summary ?? '',
    imports,
    extends: Array.isArray(sym.extends) ? sym.extends : [],
    members: [],
    canonicalUsage: buildCanonicalUsage(sym),
    relatedTypes: [],
    relatedSymbols: Array.isArray(sym.relatedSymbols) ? sym.relatedSymbols : [],
    examples: []
  };

  if (include.includes('props')) {
    record.props = Array.isArray(sym.props) ? sym.props : [];
  }
  if (include.includes('members')) {
    record.members = buildMembers(sym);
  }
  if (include.includes('notes')) {
    record.notes = sym.notes ?? [];
  }
  if (include.includes('related')) {
    // already included as relatedSymbols; include relatedTypes passthrough
    record.relatedTypes = Array.isArray(sym.relatedTypes) ? sym.relatedTypes : [];
  }
  if (include.includes('examples')) {
    record.examples = hydrateExamples(sym, examplesIndex);
  }

  return record;
}

/**
 * Resolve a dotted-path lookup.  Returns either the resolved symbol record
 * or a not_exported object per plan §4.
 */
function resolveDotted(inputName, byName) {
  const dotIdx = inputName.indexOf('.');
  const owner = inputName.slice(0, dotIdx);
  const member = inputName.slice(dotIdx + 1);
  const ownerSym = byName.get(owner);
  if (ownerSym && ownerSym.memberMap && typeof ownerSym.memberMap === 'object') {
    const target = ownerSym.memberMap[member];
    if (target) {
      if (typeof target === 'string' && target.startsWith(LOCAL_PREFIX)) {
        return {
          kind: 'not_exported',
          name: inputName,
          inputName,
          hint: `This is an internal member of ${owner}, not a separately-exported symbol.`
        };
      }
      const flat = byName.get(target);
      if (flat) {
        return { __sym: flat };
      }
    }
  }
  return null;
}

export default function getSymbol(input, ctx) {
  const { name, include } = validateInput(input);
  const { index, examplesIndex } = ctx;
  const { byName, ownerLookup } = buildLookups(index);
  const recordCtx = { ownerLookup, include, examplesIndex };

  // Step 1: dotted-path attempt.
  if (name.includes('.')) {
    const dotted = resolveDotted(name, byName);
    if (dotted && dotted.__sym) {
      return buildRecord(dotted.__sym, name, recordCtx);
    }
    if (dotted && dotted.kind === 'not_exported') {
      return dotted;
    }
    // fall through to fallback handlers.
    return notExported(name, buildHintForMissing(name));
  }

  // Step 2: flat lookup.
  const flat = byName.get(name);
  if (flat) {
    return buildRecord(flat, name, recordCtx);
  }

  return notExported(name, buildHintForMissing(name));
}
