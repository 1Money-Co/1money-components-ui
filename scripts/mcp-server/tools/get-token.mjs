/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: get_token
 *
 * Looks up design tokens by name, kind, or name prefix.  All filters
 * combine with AND semantics when multiple are supplied.
 */

const VALID_KINDS = [
  'color',
  'spacing',
  'radius',
  'shadow',
  'sizing',
  'opacity',
  'typography',
  'breakpoint'
];

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  const name = typeof args.name === 'string' ? args.name.trim() : null;
  const prefix = typeof args.prefix === 'string' ? args.prefix.trim() : null;
  let kind = null;
  if (args.kind !== undefined) {
    if (typeof args.kind !== 'string' || !VALID_KINDS.includes(args.kind)) {
      throw new Error(
        `get_token: invalid kind '${args.kind}', expected one of ${VALID_KINDS.join(', ')}`
      );
    }
    kind = args.kind;
  }
  return { name, prefix, kind };
}

export default function getToken(input, ctx) {
  const { name, prefix, kind } = validateInput(input);
  const { index } = ctx;

  const tokens = Array.isArray(index.tokens) ? index.tokens : [];

  let result = tokens;
  if (name) {
    result = result.filter(
      t =>
        t.name === name ||
        t.cssVar === name ||
        t.scss === name
    );
  }
  if (kind) {
    result = result.filter(t => t.kind === kind);
  }
  if (prefix) {
    result = result.filter(t => typeof t.name === 'string' && t.name.startsWith(prefix));
  }

  return { tokens: result };
}
