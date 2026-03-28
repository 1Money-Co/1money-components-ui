import React, { forwardRef, memo } from 'react';
import { useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { usePagination } from './usePagination';
import type { PaginationControlItem, PaginationPageItem, PaginationProps } from './interface';

const ROOT_ARIA_LABEL = 'Pagination';
const PREVIOUS_TEXT = 'Previous';
const NEXT_TEXT = 'Next';
const CONTROL_ICON_SIZE = 16;

const getButtonAriaLabel = (item: PaginationPageItem | PaginationControlItem) => {
  if (item.type === 'page') {
    return item.current ? `Page ${item.page}, current page` : `Go to page ${item.page}`;
  }

  return item.type === 'previous' ? 'Previous page' : 'Next page';
};

const PaginationBase = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const {
    className = '',
    prefixCls = 'pagination',
    total,
    pageSize,
    current,
    defaultCurrent = 1,
    disabled = false,
    boundaryCount,
    middlePageCount,
    onChange,
    'aria-label': ariaLabel = ROOT_ARIA_LABEL,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const { items, goTo, total: resolvedTotal } = usePagination({
    total,
    pageSize,
    current,
    defaultCurrent,
    disabled,
    boundaryCount,
    middlePageCount,
    onChange,
  });

  const handleListClick = useEventCallback((e: React.MouseEvent<HTMLUListElement>) => {
    const button = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-page]');

    if (button?.dataset.page) {
      goTo(Number(button.dataset.page));
    }
  });

  if (resolvedTotal === 0) {
    return null;
  }

  return (
    <nav
      {...rest}
      ref={ref}
      aria-label={ariaLabel}
      className={classes(
        undefined,
        joinCls(
          disabled && classes('disabled'),
          className,
        ),
      )}
    >
      <ul className={classes('list')} onClick={handleListClick}>
        {items.map(item => {
          if (item.type === 'ellipsis') {
            return (
              <li
                key={item.key}
                className={classes('item', classes('item-ellipsis'))}
                aria-hidden="true"
              >
                <span className={classes('ellipsis')}>...</span>
              </li>
            );
          }

          const isPage = item.type === 'page';
          const isPrevious = item.type === 'previous';

          return (
            <li
              key={item.key}
              className={classes('item')}
            >
              <button
                type="button"
                className={classes(
                  'button',
                  joinCls(
                    isPage ? classes('button-page') : classes('button-control'),
                    isPage && item.current && classes('button-current'),
                    item.disabled && classes('button-disabled'),
                  ),
                )}
                disabled={item.disabled}
                aria-label={getButtonAriaLabel(item)}
                aria-current={item.type === 'page' && item.current ? 'page' : undefined}
                data-page={item.page}
              >
                {!isPage && isPrevious && (
                  <span className={classes('icon')}>
                    <Icons
                      name="arrowLeft"
                      size={CONTROL_ICON_SIZE}
                      color="currentColor"
                    />
                  </span>
                )}
                <span>{isPage ? item.page : isPrevious ? PREVIOUS_TEXT : NEXT_TEXT}</span>
                {!isPage && !isPrevious && (
                  <span className={classes('icon')}>
                    <Icons
                      name="arrowRight"
                      size={CONTROL_ICON_SIZE}
                      color="currentColor"
                    />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

PaginationBase.displayName = 'Pagination';

export const Pagination = memo(PaginationBase);

export default Pagination;
