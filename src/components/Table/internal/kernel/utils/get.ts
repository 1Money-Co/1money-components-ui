export default function get(
  entity: unknown,
  path: (string | number | symbol)[] | readonly (string | number | symbol)[],
): unknown {
  let current: unknown = entity;

  for (let i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = (current as Record<string | number | symbol, unknown>)[path[i]];
  }

  return current;
}
