import * as React from 'react';
import { findListDiffIndex } from '../utils/algorithmUtil';
import type { GetKey } from '../interface';

export default function useDiffItem<T>(
  data: T[],
  getKey: GetKey<T>,
  onDiff?: (diffIndex: number) => void,
): [T | null] {
  const prevDataRef = React.useRef(data);
  const diffItemRef = React.useRef<T | null>(null);

  if (prevDataRef.current !== data) {
    const diff = findListDiffIndex(prevDataRef.current || [], data || [], getKey);
    if (diff?.index !== undefined) {
      onDiff?.(diff.index);
      diffItemRef.current = data[diff.index];
    }
    prevDataRef.current = data;
  }

  return [diffItemRef.current];
}
