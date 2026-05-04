import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { AccordionItem, AccordionProps } from './interface';
import { ACCORDION } from './constants';
import './style';

const AccordionInner: FC<AccordionProps> = props => {
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

  const iconSize = ACCORDION.iconSize[size];

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

        const iconName = ACCORDION.icon[variant][isActive ? 'open' : 'closed'];

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

export const Accordion = memo(AccordionInner);

export default Accordion;
