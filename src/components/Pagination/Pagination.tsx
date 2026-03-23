import { forwardRef, memo } from 'react';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { usePagination } from './usePagination';
import type { PaginationItem, PaginationProps } from './interface';

const ROOT_ARIA_LABEL = 'Pagination';
const PREVIOUS_TEXT = 'Previous';
const NEXT_TEXT = 'Next';

const getButtonAriaLabel = (item: PaginationItem) => {
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
    onChange,
    'aria-label': ariaLabel = ROOT_ARIA_LABEL,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const { items, goTo } = usePagination({
    total,
    pageSize,
    current,
    defaultCurrent,
    disabled,
    onChange,
  });

  return (
    <nav
      {...rest}
      ref={ref}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      className={classes(
        undefined,
        joinCls(
          disabled && classes('disabled'),
          className,
        ),
      )}
    >
      <ul className={classes('list')}>
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
                onClick={() => goTo(item.page)}
              >
                {!isPage && isPrevious && (
                  <span className={classes('icon')}>
                    <Icons
                      name="arrowLeft"
                      size={16}
                      color="currentColor"
                    />
                  </span>
                )}
                <span>{isPage ? item.page : isPrevious ? PREVIOUS_TEXT : NEXT_TEXT}</span>
                {!isPage && !isPrevious && (
                  <span className={classes('icon')}>
                    <Icons
                      name="arrowRight"
                      size={16}
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

Pagination.displayName = 'Pagination';

export default Pagination;
