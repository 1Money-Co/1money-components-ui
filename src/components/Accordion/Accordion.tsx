import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { AccordionItem, AccordionProps } from './interface';

const FILL_ICON_OPEN = 'minus' as const;
const FILL_ICON_CLOSED = 'add' as const;
const STROKE_ICON_OPEN = 'chevronUp' as const;
const STROKE_ICON_CLOSED = 'chevronDown' as const;

const LARGE_ICON_SIZE = 24;
const SMALL_ICON_SIZE = 20;

export const Accordion: FC<AccordionProps> = props => {
  const {
    className = '',
    prefixCls = 'accordion',
    items,
    activeKeys,
    defaultActiveKeys,
    multiple = false,
    variant = 'fill',
    size = 'large',
    onChange,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const [currentKeys, setCurrentKeys] = useControlledState<string[]>(
    defaultActiveKeys ?? [],
    activeKeys,
  );

  const handleToggle = useEventCallback((item: AccordionItem) => {
    if (item.disabled) return;

    const isActive = currentKeys.includes(item.key);
    let nextKeys: string[];

    if (isActive) {
      nextKeys = currentKeys.filter(k => k !== item.key);
    } else {
      nextKeys = multiple ? [...currentKeys, item.key] : [item.key];
    }

    setCurrentKeys(nextKeys);
    onChange?.(nextKeys);
  });

  const iconSize = size === 'large' ? LARGE_ICON_SIZE : SMALL_ICON_SIZE;

  return (
    <div
      {...rest}
      className={classes(
        undefined,
        joinCls(classes(variant), classes(size), className),
      )}
    >
      {items.map(item => {
        const isActive = currentKeys.includes(item.key);
        const isDisabled = item.disabled;

        const iconName = variant === 'fill'
          ? (isActive ? FILL_ICON_OPEN : FILL_ICON_CLOSED)
          : (isActive ? STROKE_ICON_OPEN : STROKE_ICON_CLOSED);

        return (
          <div
            key={item.key}
            className={joinCls(
              classes('item'),
              isActive && classes('item-active'),
              isDisabled && classes('item-disabled'),
            )}
          >
            <button
              type="button"
              className={classes('header')}
              aria-expanded={isActive}
              aria-disabled={isDisabled}
              disabled={isDisabled}
              onClick={() => handleToggle(item)}
            >
              {size === 'large' ? (
                <Typography.Headline size="sm" className={classes('title')}>
                  {item.title}
                </Typography.Headline>
              ) : (
                <Typography.Title size="md" strong className={classes('title')}>
                  {item.title}
                </Typography.Title>
              )}
              <Icons
                name={iconName}
                size={iconSize}
                className={classes('icon')}
              />
            </button>
            {isActive && (
              <Typography.Body
                size={size === 'large' ? 'lg' : 'md'}
                as="div"
                className={classes('content')}
              >
                {item.children}
              </Typography.Body>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Accordion);
