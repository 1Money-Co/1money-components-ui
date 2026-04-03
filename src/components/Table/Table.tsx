import { forwardRef, memo, useMemo, type Key, type ReactElement, type Ref } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { useMemoizedFn } from '@1money/hooks';
import { Pagination } from '@/components/Pagination';
import { Spinner } from '@/components/Spinner';
import { InternalRcTable } from './internal';
import {
  TABLE_BLOCK,
  TABLE_DEFAULT_PREFIX,
  TABLE_DEFAULT_SIZE,
  TABLE_DEFAULT_VARIANT,
} from './constants';
import { useTableDataPipeline } from './core/useTableDataPipeline';
import { useTableSelection } from './core/useTableSelection';
import { useTableExpand } from './core/useTableExpand';
import { useTableColumns } from './core/useTableColumns';
import { ExpandedRowContainer } from './renderers/ExpandedRowContainer';
import { TableEmptyState } from './renderers/EmptyState';
import type { TableProps, TableRef } from './interface';
import type { ColumnsType as InternalColumnsType, ExpandableConfig, Reference } from './internal/kernel/interface';

const TableInner = <T extends Record<string, unknown> = Record<string, unknown>>(
  props: TableProps<T>,
  ref: Ref<TableRef>,
) => {
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

  const cls = classnames(TABLE_BLOCK);
  const getRowKey = useMemoizedFn(
    (record: T, index: number): Key =>
      typeof rowKey === 'function' ? rowKey(record) : (record[rowKey ?? 'key'] as Key) ?? index,
  );

  const pipeline = useTableDataPipeline({ columns, dataSource, pagination, onChange });
  const selection = useTableSelection({
    rowSelection,
    currentDataSource: pipeline.currentDataSource,
    getRowKey,
  });
  const expand = useTableExpand({ expandable });

  const renderedColumns = useTableColumns({
    columns,
    size,
    expandable,
    mergedExpandedRowKeys: expand.mergedExpandedRowKeys,
    triggerExpand: expand.triggerExpand,
    rowSelection,
    mergedSelectedRowKeys: selection.mergedSelectedRowKeys,
    checkboxPropsMap: selection.checkboxPropsMap,
    isAllSelected: selection.isAllSelected,
    isIndeterminate: selection.isIndeterminate,
    triggerSelection: selection.triggerSelection,
    triggerSelectAll: selection.triggerSelectAll,
    sorter: pipeline.sorter,
    setSorter: pipeline.setSorter,
    getRowKey,
  });

  const resolvedPagination = pipeline.pagination === false
    ? { current: 1, pageSize: 10 }
    : pipeline.pagination;

  const mergedExpandable = useMemo(
    () =>
      expandable
        ? ({
            ...expandable,
            expandedRowKeys: expand.mergedExpandedRowKeys,
            expandedRowRender: expandable.expandedRowRender
              ? (record: T, index: number, indent: number, expanded: boolean) => (
                  <ExpandedRowContainer>
                    {expandable.expandedRowRender?.(record, index, indent, expanded)}
                  </ExpandedRowContainer>
                )
              : undefined,
            showExpandColumn: false,
          } as ExpandableConfig<T>)
        : undefined,
    [expandable, expand.mergedExpandedRowKeys],
  );

  void bordered;

  return (
    <div className={joinCls(`${prefixCls}-wrapper`, loading && `${prefixCls}-wrapper--loading`)}>
      {loading && (
        <div className={`${prefixCls}-loading-overlay`}>
          <Spinner />
        </div>
      )}
      <InternalRcTable
        {...(rest as object)}
        ref={ref as Ref<Reference>}
        prefixCls={prefixCls}
        className={joinCls(cls(), cls(size), cls(variant), className)}
        columns={renderedColumns as unknown as InternalColumnsType<T>}
        data={pipeline.currentDataSource}
        rowKey={rowKey as string | ((record: T) => Key)}
        emptyText={loading && !dataSource.length ? <span /> : <TableEmptyState empty={empty} />}
        childrenColumnName={childrenColumnName}
        indentSize={indentSize}
        expandable={mergedExpandable}
      />
      {pagination !== false ? (
        <div className={`${prefixCls}-pagination`}>
          <Pagination
            total={pipeline.total}
            pageSize={resolvedPagination.pageSize}
            current={resolvedPagination.current}
            onChange={(nextPage, nextPageSize) =>
              pipeline.setPagination((currentPagination) => ({
                ...currentPagination,
                current: nextPage,
                pageSize: nextPageSize,
              }))
            }
          />
        </div>
      ) : null}
    </div>
  );
};

type ForwardGenericTable = (<T extends Record<string, unknown> = Record<string, unknown>>(
  props: TableProps<T> & { ref?: Ref<TableRef> },
) => ReactElement | null) & { displayName?: string };

const TableBase = forwardRef(TableInner) as ForwardGenericTable;

TableBase.displayName = 'Table';

export const Table = memo(TableBase) as ForwardGenericTable;

export default Table;
