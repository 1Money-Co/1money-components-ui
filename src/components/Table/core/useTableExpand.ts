import type { Key } from 'react';
import { useControlledState } from '@1money/hooks';
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

  const triggerExpand = (recordKey: Key, record: T) => {
    const expanded = mergedExpandedRowKeys.includes(recordKey);
    const nextKeys = expanded
      ? mergedExpandedRowKeys.filter(key => key !== recordKey)
      : [...mergedExpandedRowKeys, recordKey];

    setMergedExpandedRowKeys(nextKeys);
    expandable?.onExpand?.(!expanded, record);
    expandable?.onExpandedRowsChange?.(nextKeys);
  };

  return {
    mergedExpandedRowKeys,
    triggerExpand,
  };
};
