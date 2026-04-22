/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: list_icons
 *
 * Returns available icon names (string keys) from the generated index.
 */

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  const query = typeof args.query === 'string' ? args.query.trim() : '';
  const limit =
    typeof args.limit === 'number' && Number.isFinite(args.limit) && args.limit > 0
      ? Math.floor(args.limit)
      : null;
  return { query, limit };
}

export default function listIcons(input, ctx) {
  const { query, limit } = validateInput(input);
  const { index } = ctx;

  const source = Array.isArray(index.icons) ? index.icons : [];
  let filtered = source;
  if (query) {
    const lower = query.toLowerCase();
    filtered = source.filter(entry =>
      typeof entry?.name === 'string' && entry.name.toLowerCase().includes(lower)
    );
  }

  const total = filtered.length;
  const icons = (limit != null ? filtered.slice(0, limit) : filtered).map(entry => ({
    name: entry.name
  }));

  return { total, icons };
}
