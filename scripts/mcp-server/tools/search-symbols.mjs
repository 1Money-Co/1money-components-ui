/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: search_symbols
 *
 * Fuzzy search over symbol records. Simple rule-based scorer.
 */

const DEFAULT_LIMIT = 5;

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  if (typeof args.query !== 'string' || args.query.trim().length === 0) {
    throw new Error('search_symbols: `query` must be a non-empty string');
  }
  const limit =
    typeof args.limit === 'number' && Number.isFinite(args.limit) && args.limit > 0
      ? Math.floor(args.limit)
      : DEFAULT_LIMIT;
  return { query: args.query.trim(), limit };
}

function scoreSymbol(sym, q) {
  const name = sym.name ?? '';
  const lowerName = name.toLowerCase();
  const lowerQ = q.toLowerCase();
  const tags = Array.isArray(sym.searchTags) ? sym.searchTags : [];
  const summary = (sym.summary ?? '').toLowerCase();
  const propNames = Array.isArray(sym.props)
    ? sym.props.map(p => (p && p.name ? String(p.name).toLowerCase() : ''))
    : [];

  // Name checks (most specific first).
  if (lowerName === lowerQ) return { score: 100, matchedOn: 'name' };
  if (lowerName.startsWith(lowerQ)) return { score: 80, matchedOn: 'name' };

  // Tag exact.
  if (tags.some(t => String(t).toLowerCase() === lowerQ)) {
    return { score: 70, matchedOn: 'tag' };
  }

  // Name substring.
  if (lowerName.includes(lowerQ)) return { score: 60, matchedOn: 'name' };

  // Tag substring.
  if (tags.some(t => String(t).toLowerCase().includes(lowerQ))) {
    return { score: 50, matchedOn: 'tag' };
  }

  // Summary substring.
  if (summary && summary.includes(lowerQ)) return { score: 30, matchedOn: 'summary' };

  // Prop name match.
  if (propNames.some(n => n === lowerQ || n.includes(lowerQ))) {
    return { score: 20, matchedOn: 'prop' };
  }

  return null;
}

export default function searchSymbols(input, ctx) {
  const { query, limit } = validateInput(input);
  const { index } = ctx;

  const hits = [];
  for (const sym of index.symbols) {
    const result = scoreSymbol(sym, query);
    if (result) {
      hits.push({ name: sym.name, score: result.score, matchedOn: result.matchedOn });
    }
  }

  hits.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.name.localeCompare(b.name);
  });

  return { hits: hits.slice(0, limit) };
}
