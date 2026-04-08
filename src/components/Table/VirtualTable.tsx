import { forwardRef, memo, useMemo, type Key, type ReactElement, type Ref } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { useMemoizedFn } from '@1money/hooks';
import { Pagination } from '@/components/Pagination';
import { Spinner } from '@/components/Spinner';
import { InternalRcVirtualTable } from './internal';
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
import type { TableRef, VirtualTableProps } from './interface';
import type { ColumnsType as InternalColumnsType, ExpandableConfig, Reference } from './internal/kernel/interface';

const VirtualTableInner = <T extends Record<string, any> = Record<string, any>>(
  props: VirtualTableProps<T>,
  ref: Ref<TableRef>,
) => {
  const {
    className = '',
    prefixCls = TABLE_DEFAULT_PREFIX,
    size = TABLE_DEFAULT_SIZE,
    variant = TABLE_DEFAULT_VARIANT,
    scroll,
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
    onRow,
    rowClassName,
    summary,
    showHeader,
    tableLayout,
    components,
    direction,
    rowHoverable,
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
    dataSource,
    currentDataSource: pipeline.currentDataSource,
    getRowKey,
  });
  const expand = useTableExpand({ expandable });

  const renderedColumns = useTableColumns({
    columns,
    size,
    variant,
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

  const kernelOnExpand = useMemoizedFn((expanded: boolean, record: T) => {
    const recordKey = getRowKey(record, dataSource.indexOf(record));
    expand.onKernelExpand(expanded, record, recordKey);
  });

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
            onExpand: kernelOnExpand,
          } as ExpandableConfig<T>)
        : undefined,
    [expandable, expand.mergedExpandedRowKeys, kernelOnExpand],
  );

  void bordered;

  if (typeof scroll.x !== 'number' || typeof scroll.y !== 'number') {
    console.error('VirtualTable requires numeric scroll.x and scroll.y');
  }

  return (
    <div className={joinCls(`${prefixCls}-wrapper`, loading && `${prefixCls}-wrapper--loading`)}>
      {loading && (
        <div className={`${prefixCls}-loading-overlay`}>
          <Spinner />
        </div>
      )}
      <InternalRcVirtualTable
        {...(rest as object)}
        ref={ref as Ref<Reference>}
        prefixCls={prefixCls}
        className={joinCls(cls(), cls(size), cls(variant), className)}
        scroll={scroll}
        columns={renderedColumns as unknown as InternalColumnsType<T>}
        data={pipeline.currentDataSource}
        rowKey={rowKey as string | ((record: T) => Key)}
        emptyText={loading && !dataSource.length ? <span /> : <TableEmptyState empty={empty} />}
        childrenColumnName={childrenColumnName}
        indentSize={indentSize}
        expandable={mergedExpandable}
        onRow={onRow}
        rowClassName={rowClassName}
        summary={summary}
        showHeader={showHeader}
        tableLayout={tableLayout}
        components={components}
        direction={direction}
        rowHoverable={rowHoverable}
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

type ForwardGenericVirtualTable = (<T extends Record<string, any> = Record<string, any>>(
  props: VirtualTableProps<T> & { ref?: Ref<TableRef> },
) => ReactElement | null) & { displayName?: string };

const VirtualTableBase = forwardRef(VirtualTableInner) as ForwardGenericVirtualTable;

VirtualTableBase.displayName = 'VirtualTable';

export const VirtualTable = memo(VirtualTableBase) as ForwardGenericVirtualTable;

export default VirtualTable;
