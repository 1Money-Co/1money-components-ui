import type { Key } from 'react';
import { useControlledState, useMemoizedFn } from '@1money/hooks';
import type { TableExpandableConfig } from '../interface';

export const useTableExpand = <T,>({
  expandable,
}: {
  expandable?: TableExpandableConfig<T>;
}) => {
  const [mergedExpandedRowKeys, setMergedExpandedRowKeys] = useControlledState<Key[]>(
    expandable?.defaultExpandedRowKeys ?? [],
    expandable?.expandedRowKeys,
  );

  const triggerExpand = useMemoizedFn((recordKey: Key, record: T) => {
    const expanded = mergedExpandedRowKeys.includes(recordKey);
    const nextKeys = expanded
      ? mergedExpandedRowKeys.filter(key => key !== recordKey)
      : [...mergedExpandedRowKeys, recordKey];

    setMergedExpandedRowKeys(nextKeys);
    expandable?.onExpand?.(!expanded, record);
    expandable?.onExpandedRowsChange?.(nextKeys);
  });

  // Called by the kernel's onExpand (e.g. expandRowByClick) — updates state
  // and delegates to user callbacks
  const onKernelExpand = useMemoizedFn((expanded: boolean, record: T, recordKey: Key) => {
    const nextKeys = expanded
      ? [...mergedExpandedRowKeys, recordKey]
      : mergedExpandedRowKeys.filter(key => key !== recordKey);

    setMergedExpandedRowKeys(nextKeys);
    expandable?.onExpand?.(expanded, record);
    expandable?.onExpandedRowsChange?.(nextKeys);
  });

  return {
    mergedExpandedRowKeys,
    triggerExpand,
    onKernelExpand,
  };
};
