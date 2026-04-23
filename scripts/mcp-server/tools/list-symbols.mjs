/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: list_symbols
 *
 * Lists top-level exports from the generated index. Namespace roots (ProForm,
 * Icons, Input) are surfaced as `kind: 'module'`.
 */

const VALID_KINDS = ['component', 'module', 'hook', 'function', 'type', 'all'];

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  const kind = args.kind ?? 'all';
  if (!VALID_KINDS.includes(kind)) {
    throw new Error(
      `list_symbols: invalid kind '${kind}', expected one of ${VALID_KINDS.join(', ')}`
    );
  }
  const category = typeof args.category === 'string' ? args.category : undefined;
  return { kind, category };
}

export default function listSymbols(input, ctx) {
  const { kind, category } = validateInput(input);
  const { index } = ctx;

  const filtered = index.symbols.filter(sym => {
    if (kind !== 'all' && sym.kind !== kind) return false;
    if (category && sym.category !== category) return false;
    return true;
  });

  const symbols = filtered.map(sym => ({
    name: sym.name,
    kind: sym.kind,
    category: sym.category ?? null,
    summary: sym.summary ?? '',
    importPath: sym.importPath ?? null
  }));

  // Stable alphabetical sort for predictable output.
  symbols.sort((a, b) => a.name.localeCompare(b.name));

  return { symbols };
}
