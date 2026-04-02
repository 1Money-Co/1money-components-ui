import { useMemo, type Key } from 'react';
import { useControlledState, useMemoizedFn } from '@1money/hooks';
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

  const checkboxPropsMap = useMemo(() => {
    const map = new Map<Key, Partial<{ disabled: boolean }>>();
    if (!rowSelection?.getCheckboxProps) return map;
    currentDataSource.forEach((record, index) => {
      const key = getRowKey(record, index);
      map.set(key, rowSelection.getCheckboxProps!(record));
    });
    return map;
  }, [currentDataSource, getRowKey, rowSelection?.getCheckboxProps]);

  const selectableKeys = useMemo(
    () =>
      currentDataSource
        .map((record, index) => getRowKey(record, index))
        .filter((key) => !checkboxPropsMap.get(key)?.disabled),
    [currentDataSource, getRowKey, checkboxPropsMap],
  );

  const selectedSelectableKeys = useMemo(
    () => selectableKeys.filter((key) => mergedSelectedRowKeys.includes(key)),
    [selectableKeys, mergedSelectedRowKeys],
  );

  const isAllSelected = selectableKeys.length > 0 && selectedSelectableKeys.length === selectableKeys.length;
  const isIndeterminate = selectedSelectableKeys.length > 0 && !isAllSelected;

  const triggerSelection = useMemoizedFn((recordKey: Key) => {
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
  });

  const triggerSelectAll = useMemoizedFn(() => {
    let nextKeys: Key[];
    if (isAllSelected) {
      nextKeys = mergedSelectedRowKeys.filter(
        (key) => checkboxPropsMap.get(key)?.disabled,
      );
    } else {
      const disabledSelected = mergedSelectedRowKeys.filter(
        (key) => checkboxPropsMap.get(key)?.disabled,
      );
      nextKeys = [...disabledSelected, ...selectableKeys];
    }

    setMergedSelectedRowKeys(nextKeys);
    rowSelection?.onChange?.(
      nextKeys,
      currentDataSource.filter((record, index) => nextKeys.includes(getRowKey(record, index))),
    );
  });

  return {
    mergedSelectedRowKeys,
    checkboxPropsMap,
    isAllSelected,
    isIndeterminate,
    triggerSelection,
    triggerSelectAll,
  };
};
