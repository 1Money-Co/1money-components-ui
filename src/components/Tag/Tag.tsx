import { memo } from 'react';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { TagProps } from './interface';

const ICON_SIZE_MAP = {
  large: 12,
  medium: 12,
  small: 10,
} as const;

export const Tag: FC<TagProps> = (props) => {
  const {
    className = '',
    prefixCls = 'tag',
    color = 'neutral',
    size = 'large',
    label,
    icon,
    removable = false,
    onRemove,
    ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const iconSize = ICON_SIZE_MAP[size];

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
      {label && <span className={classes('label')}>{label}</span>}
      {removable && (
        <span
          className={classes('remove')}
          onClick={onRemove}
          role="button"
          tabIndex={0}
          aria-label="Remove"
        >
          <Icons name="cross" size={iconSize} />
        </span>
      )}
    </span>
  );
};

export default memo(Tag);
