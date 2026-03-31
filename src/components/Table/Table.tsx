import { forwardRef, memo, useEffect } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { Pagination } from '@/components/Pagination';
import { InternalRcTable } from './internal';
import {
  TABLE_DEFAULT_PREFIX,
  TABLE_DEFAULT_SIZE,
  TABLE_DEFAULT_VARIANT,
} from './constants';
import { useTableDataPipeline } from './core/useTableDataPipeline';
import { useTableSelection } from './core/useTableSelection';
import { useTableExpand } from './core/useTableExpand';
import { SelectionControl } from './features/SelectionColumn';
import { ExpandTrigger } from './features/ExpandTrigger';
import { HeaderCell } from './renderers/HeaderCell';
import { BodyCell } from './renderers/BodyCell';
import { ExpandedRowContainer } from './renderers/ExpandedRowContainer';
import { TableEmptyState } from './renderers/EmptyState';
import type { TableColumn, TableProps, TableRef } from './interface';

const TableBase = forwardRef<TableRef, TableProps<any>>((props, ref) => {
  const {
    className = '',
    prefixCls = TABLE_DEFAULT_PREFIX,
    size = TABLE_DEFAULT_SIZE,
    variant = TABLE_DEFAULT_VARIANT,
    columns,
    dataSource,
    rowKey,
    empty,
    bordered,
    pagination,
    rowSelection,
    loading,
    onChange,
    childrenColumnName,
    indentSize,
    expandable,
    ...rest
  } = props;

  const cls = classnames(prefixCls);
  const kernelPrefixCls = cls();
  const getRowKey = (record: any, index: number) => (
    typeof rowKey === 'function' ? rowKey(record) : record[rowKey ?? 'key'] ?? index
  );
  const pipeline = useTableDataPipeline({
    columns,
    dataSource,
    pagination,
  });
  const selection = useTableSelection({
    rowSelection,
    currentDataSource: pipeline.currentDataSource,
    getRowKey,
  });
  const expand = useTableExpand({ expandable });

  const mergedColumns: TableColumn<any>[] = [
    ...(expandable
      ? [{
          key: '__expand__',
          width: 48,
          render: (_: unknown, record: any, index: number) => (
            <ExpandTrigger
              expanded={expand.mergedExpandedRowKeys.includes(getRowKey(record, index))}
              onToggle={() => expand.triggerExpand(getRowKey(record, index), record)}
            />
          ),
        }]
      : []),
    ...(rowSelection
      ? [{
          key: '__selection__',
          width: rowSelection.columnWidth ?? 48,
          render: (_: unknown, record: any, index: number) => (
            <SelectionControl
              type={rowSelection.type ?? 'checkbox'}
              checked={selection.mergedSelectedRowKeys.includes(getRowKey(record, index))}
              onChange={() => selection.triggerSelection(getRowKey(record, index))}
            />
          ),
        }]
      : []),
    ...columns,
  ];

  const renderedColumns = mergedColumns.map(column => ({
    ...column,
    title: column.renderHeader ? (
      column.renderHeader({ column })
    ) : (
      <HeaderCell
        column={column}
        onSortClick={() => pipeline.setSorter(currentSorter => ({
          columnKey: column.key,
          order:
            currentSorter.columnKey !== column.key || currentSorter.order === null
              ? 'ascend'
              : currentSorter.order === 'ascend'
                ? 'descend'
                : null,
        }))}
        onFilterApply={values => pipeline.setFilters(currentFilters => ({
          ...currentFilters,
          [String(column.key)]: values,
        }))}
      />
    ),
    render: (value: unknown, record: any, index: number) => (
      <BodyCell column={column} value={value} record={record} index={index} />
    ),
  }));
  const resolvedPagination = pipeline.pagination === false
    ? { current: 1, pageSize: 10 }
    : pipeline.pagination;

  void bordered;
  void loading;

  useEffect(() => {
    onChange?.({ currentDataSource: pipeline.currentDataSource });
  }, [onChange, pipeline.currentDataSource]);

  return (
    <>
      <InternalRcTable
        {...(rest as object)}
        ref={ref as any}
        prefixCls={kernelPrefixCls}
        className={joinCls(cls(size), cls(variant), className)}
        columns={renderedColumns as any}
        data={pipeline.currentDataSource}
        rowKey={rowKey as any}
        emptyText={<TableEmptyState empty={empty} />}
        childrenColumnName={childrenColumnName}
        indentSize={indentSize}
        expandable={expandable ? ({
          ...expandable,
          expandedRowKeys: expand.mergedExpandedRowKeys,
          expandedRowRender: expandable.expandedRowRender
            ? (record: any, index: number, indent: number, expanded: boolean) => (
              <ExpandedRowContainer>
                {expandable.expandedRowRender?.(record, index, indent, expanded)}
              </ExpandedRowContainer>
            )
            : undefined,
          showExpandColumn: false,
        } as any) : undefined}
      />
      {pagination !== false ? (
        <Pagination
          total={pipeline.total}
          pageSize={resolvedPagination.pageSize}
          current={resolvedPagination.current}
          onChange={(nextPage, nextPageSize) => pipeline.setPagination(currentPagination => ({
            ...currentPagination,
            current: nextPage,
            pageSize: nextPageSize,
          }))}
        />
      ) : null}
    </>
  );
});

TableBase.displayName = 'Table';

export const Table = memo(TableBase);

export default Table;
