/**
 * Shallow-aware equality check. When `shallow` is true,
 * only compares one level deep (arrays/objects by reference after level 1).
 */
export default function isEqual(obj1: any, obj2: any, shallow = false): boolean {
  const refSet = new Set();

  function deepEqual(a: any, b: any, level = 1): boolean {
    if (refSet.has(a)) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    const newLevel = level + 1;

    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }

    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) {
        return false;
      }
      return keys.every((key) => deepEqual(a[key], b[key], newLevel));
    }

    return false;
  }

  return deepEqual(obj1, obj2);
}
