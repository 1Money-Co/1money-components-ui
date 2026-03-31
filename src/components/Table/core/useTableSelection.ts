import type { Key } from 'react';
import { useControlledState } from '@1money/hooks';
import type { TableRowSelection } from '../interface';

export const useTableSelection = <T,>({
  rowSelection,
  currentDataSource,
  getRowKey,
}: {
  rowSelection?: TableRowSelection<T>;
  currentDataSource: T[];
  getRowKey: (record: T, index: number) => Key;
}) => {
  const [mergedSelectedRowKeys, setMergedSelectedRowKeys] = useControlledState<Key[]>(
    rowSelection?.defaultSelectedRowKeys ?? [],
    rowSelection?.selectedRowKeys,
  );

  const triggerSelection = (recordKey: Key) => {
    const selectionType = rowSelection?.type ?? 'checkbox';
    const nextKeys = selectionType === 'radio'
      ? [recordKey]
      : mergedSelectedRowKeys.includes(recordKey)
        ? mergedSelectedRowKeys.filter(key => key !== recordKey)
        : [...mergedSelectedRowKeys, recordKey];

    setMergedSelectedRowKeys(nextKeys);
    rowSelection?.onChange?.(
      nextKeys,
      currentDataSource.filter((record, index) => nextKeys.includes(getRowKey(record, index))),
    );
  };

  return {
    mergedSelectedRowKeys,
    triggerSelection,
  };
};
