/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: resolve_import
 *
 * Resolves how to import a symbol (or namespace member).  Supports flat
 * names (`Button`), namespace roots (`Icons`), and dotted-member paths
 * (`ProForm.Item`).  `Icons.<Name>` is explicitly rejected because icon
 * names are string keys, not exported symbols.
 */

const LOCAL_PREFIX = '$local:';
const ICONS_DOTTED = /^Icons\.[A-Z][A-Za-z0-9]*$/;

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  if (typeof args.symbol !== 'string' || args.symbol.trim().length === 0) {
    throw new Error('resolve_import: `symbol` must be a non-empty string');
  }
  return { symbol: args.symbol.trim() };
}

function buildLookups(index) {
  const byName = new Map();
  const ownerLookup = new Map();
  for (const sym of index.symbols) byName.set(sym.name, sym);
  for (const sym of index.symbols) {
    if (sym.kind === 'module' && sym.memberMap) {
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

function notFound(inputSymbol, hint) {
  return { found: false, inputSymbol, hint };
}

function buildResponse(sym, inputSymbol, { ownerLookup, drift }) {
  const owner = ownerLookup.get(sym.name);
  const sources = [{ specifier: '@1money/component-ui', style: 'named', preferred: true }];
  if (sym.subpathImport) {
    sources.push({ specifier: sym.subpathImport, style: 'named', preferred: false });
  }
  const response = {
    found: true,
    name: sym.name,
    inputSymbol,
    sources,
    css: '@1money/component-ui/index.css'
  };

  const notes = [];
  if (owner) {
    notes.push(`Also accessible via ${owner.owner}.${owner.memberKey} namespace.`);
  }

  // Drift note: if any drift entry's subpath maps to this symbol's subpathImport.
  if (sym.subpathImport && drift && Array.isArray(drift.orphanSubpath)) {
    for (const orphan of drift.orphanSubpath) {
      const orphanSpecifier = `@1money/component-ui${orphan.subpath.replace(/^\./, '')}`;
      if (orphanSpecifier === sym.subpathImport) {
        notes.push(`Note: subpath '${sym.subpathImport}' appears in drift report (${orphan.reason}).`);
      }
    }
  }

  if (notes.length > 0) response.notes = notes.join(' ');
  return response;
}

export default function resolveImport(input, ctx) {
  const { symbol } = validateInput(input);
  const { index, drift } = ctx;

  // Icons.<Name> short-circuit.
  if (ICONS_DOTTED.test(symbol)) {
    return notFound(
      symbol,
      'Icons.<Name> is not a valid import; icons are string keys — use list_icons to discover names and `<Icons name="chevron-down" />`.'
    );
  }

  const { byName, ownerLookup } = buildLookups(index);

  // Dotted path: owner.member
  if (symbol.includes('.')) {
    const dotIdx = symbol.indexOf('.');
    const owner = symbol.slice(0, dotIdx);
    const member = symbol.slice(dotIdx + 1);
    const ownerSym = byName.get(owner);
    if (ownerSym && ownerSym.memberMap) {
      const target = ownerSym.memberMap[member];
      if (target && !target.startsWith(LOCAL_PREFIX)) {
        const flat = byName.get(target);
        if (flat) return buildResponse(flat, symbol, { ownerLookup, drift });
      }
      if (target && target.startsWith(LOCAL_PREFIX)) {
        return notFound(
          symbol,
          `${symbol} is an internal member of ${owner}; access it via the namespace only, e.g. \`import { ${owner} } from '@1money/component-ui'; <${owner}.${member} ... />\`.`
        );
      }
    }
    return notFound(
      symbol,
      `No exported symbol named '${symbol}'. Use search_symbols to discover candidates.`
    );
  }

  // Flat lookup.
  const flat = byName.get(symbol);
  if (flat) return buildResponse(flat, symbol, { ownerLookup, drift });

  return notFound(
    symbol,
    `No exported symbol named '${symbol}'. Use search_symbols to discover candidates.`
  );
}
