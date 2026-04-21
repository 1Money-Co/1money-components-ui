/* eslint-disable no-undef */
/* eslint-env node */
/**
 * Tool: get_examples
 *
 * V1 placeholder — `examples.generated.json` is populated by Task 10 in a
 * separate change. Until then, this tool returns an empty list plus a note.
 */

const VALID_SOURCES = ['all', 'readme', 'stories', 'canonical'];
const DEFAULT_LIMIT = 3;

function validateInput(input) {
  const args = input && typeof input === 'object' ? input : {};
  if (typeof args.name !== 'string' || args.name.trim().length === 0) {
    throw new Error('get_examples: `name` must be a non-empty string');
  }
  const source = args.source ?? 'all';
  if (!VALID_SOURCES.includes(source)) {
    throw new Error(
      `get_examples: invalid source '${source}', expected one of ${VALID_SOURCES.join(', ')}`
    );
  }
  const limit =
    typeof args.limit === 'number' && Number.isFinite(args.limit) && args.limit > 0
      ? Math.floor(args.limit)
      : DEFAULT_LIMIT;
  return { name: args.name.trim(), source, limit };
}

export default function getExamples(input, _ctx) {
  // Validate (and throw early) so client sees clean errors on malformed input.
  validateInput(input);
  return {
    examples: [],
    note: 'examples.generated.json not yet populated in v1'
  };
}
