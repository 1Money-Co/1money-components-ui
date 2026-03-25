import { memo, isValidElement } from 'react';
import { Icons } from '@/components/Icons';
import { TypographyTitle, TypographyBody } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { IconName } from '@/components/Icons';
import type { EmptyProps } from './interface';

const ICON_SIZE = 24;

export const Empty: FC<EmptyProps> = (props) => {
  const {
    className = '',
    prefixCls = 'empty',
    variant = 'stroke',
    icon,
    title,
    description,
    action,
    ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const renderIcon = () => {
    if (!icon) return null;
    if (isValidElement(icon)) return icon;
    if (typeof icon === 'string') {
      return <Icons name={icon as IconName} size={ICON_SIZE} />;
    }
    return null;
  };

  return (
    <div
      {...rest}
      ref={ref}
      className={classes(
        undefined,
        joinCls(classes(variant), className),
      )}
    >
      {icon && <div className={classes('icon')}>{renderIcon()}</div>}
      {(title || description) && (
        <div className={classes('content')}>
          {title && (
            <TypographyTitle size="sm" strong color="default-tertiary">
              {title}
            </TypographyTitle>
          )}
          {description && (
            <TypographyBody size="md" color="default-tertiary">
              {description}
            </TypographyBody>
          )}
        </div>
      )}
      {action && <div className={classes('action')}>{action}</div>}
    </div>
  );
};

export default memo(Empty);
