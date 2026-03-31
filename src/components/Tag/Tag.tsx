import { memo, useCallback } from 'react';
import { Icons } from '@/components/Icons';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, KeyboardEvent, MouseEvent } from 'react';
import type { TagProps } from './interface';
import {
  TAG_PREFIX_CLS,
  TAG_DEFAULT_COLOR,
  TAG_DEFAULT_SIZE,
  TAG_REMOVE_ICON,
  TAG_ICON_SIZE_MAP,
  TAG_LABEL_TYPOGRAPHY_MAP,
} from './constants';

export const Tag: FC<TagProps> = (props) => {
  const {
    className = '',
    prefixCls = TAG_PREFIX_CLS,
    color = TAG_DEFAULT_COLOR,
    size = TAG_DEFAULT_SIZE,
    label,
    icon,
    removable = false,
    onRemove,
    ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const iconSize = TAG_ICON_SIZE_MAP[size];

  const handleRemoveKeyDown = useCallback(
    (e: KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onRemove?.(e as unknown as MouseEvent<HTMLSpanElement>);
      }
    },
    [onRemove],
  );

  return (
    <span
      {...rest}
      ref={ref}
      className={classes(
        undefined,
        joinCls(classes(color), classes(size), className),
      )}
    >
      {icon && (
        <span className={classes('icon')}>
          <Icons name={icon} size={iconSize} />
        </span>
      )}
      {label != null && label !== '' && (() => {
        const typo = TAG_LABEL_TYPOGRAPHY_MAP[size];
        if (typo.variant === 'body') {
          return (
            <TypographyBody className={classes('label')} size={typo.size} strong={typo.strong}>
              {label}
            </TypographyBody>
          );
        }
        return (
          <TypographyLabel className={classes('label')} size={typo.size}>
            {label}
          </TypographyLabel>
        );
      })()}
      {removable && (
        <span
          className={classes('remove')}
          onClick={onRemove}
          onKeyDown={handleRemoveKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Remove"
        >
          <Icons name={TAG_REMOVE_ICON} size={iconSize} />
        </span>
      )}
    </span>
  );
};

export default memo(Tag);
