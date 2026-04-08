import { useEffect, useMemo, useRef, type Key } from 'react';
import { useControlledState, useMemoizedFn } from '@1money/hooks';
import type { TableRowSelection } from '../interface';

export const useTableSelection = <T,>({
  rowSelection,
  dataSource,
  currentDataSource,
  getRowKey,
}: {
  rowSelection?: TableRowSelection<T>;
  dataSource: T[];
  currentDataSource: T[];
  getRowKey: (record: T, index: number) => Key;
}) => {
  const [mergedSelectedRowKeys, setMergedSelectedRowKeys] = useControlledState<Key[]>(
    rowSelection?.defaultSelectedRowKeys ?? [],
    rowSelection?.selectedRowKeys,
  );

  // Lazy key→record map, rebuilt when dataSource reference changes
  const kvMapRef = useRef<{ data: T[]; map: Map<Key, T> }>({ data: [], map: new Map() });

  const getKvMap = useMemoizedFn((): Map<Key, T> => {
    if (kvMapRef.current.data !== dataSource) {
      const map = new Map<Key, T>();
      for (let i = 0; i < dataSource.length; i++) {
        map.set(getRowKey(dataSource[i], i), dataSource[i]);
      }
      kvMapRef.current = { data: dataSource, map };
    }
    return kvMapRef.current.map;
  });

  // Cache for preserveSelectedRowKeys: stores key→record even across pagination
  const preserveRecordsRef = useRef(new Map<Key, T>());

  const getRecordByKey = useMemoizedFn((key: Key): T | undefined => {
    return getKvMap().get(key) ?? preserveRecordsRef.current.get(key);
  });

  // Update cache when selected keys change
  useEffect(() => {
    if (!rowSelection?.preserveSelectedRowKeys) return;
    const nextCache = new Map<Key, T>();
    for (const key of mergedSelectedRowKeys) {
      const record = getRecordByKey(key);
      if (record !== undefined) {
        nextCache.set(key, record);
      } else if (preserveRecordsRef.current.has(key)) {
        nextCache.set(key, preserveRecordsRef.current.get(key)!);
      }
    }
    preserveRecordsRef.current = nextCache;
  }, [mergedSelectedRowKeys, rowSelection?.preserveSelectedRowKeys, getRecordByKey]);

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

  const resolveRecords = useMemoizedFn((keys: Key[]): T[] => {
    if (rowSelection?.preserveSelectedRowKeys) {
      return keys
        .map((key) => getRecordByKey(key))
        .filter((record): record is T => record !== undefined);
    }
    return currentDataSource.filter((record, index) => keys.includes(getRowKey(record, index)));
  });

  const triggerSelection = useMemoizedFn((recordKey: Key) => {
    const selectionType = rowSelection?.type ?? 'checkbox';
    const nextKeys = selectionType === 'radio'
      ? [recordKey]
      : mergedSelectedRowKeys.includes(recordKey)
        ? mergedSelectedRowKeys.filter(key => key !== recordKey)
        : [...mergedSelectedRowKeys, recordKey];

    setMergedSelectedRowKeys(nextKeys);
    rowSelection?.onChange?.(nextKeys, resolveRecords(nextKeys), { type: 'single' });
  });

  const triggerSelectAll = useMemoizedFn(() => {
    let nextKeys: Key[];
    let method: 'all' | 'none';
    if (isAllSelected) {
      nextKeys = mergedSelectedRowKeys.filter(
        (key) => checkboxPropsMap.get(key)?.disabled,
      );
      method = 'none';
    } else {
      const disabledSelected = mergedSelectedRowKeys.filter(
        (key) => checkboxPropsMap.get(key)?.disabled,
      );
      nextKeys = [...disabledSelected, ...selectableKeys];
      method = 'all';
    }

    setMergedSelectedRowKeys(nextKeys);
    rowSelection?.onChange?.(nextKeys, resolveRecords(nextKeys), { type: method });
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
