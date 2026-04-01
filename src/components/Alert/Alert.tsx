import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '@/components/Icons';
import { TypographyTitle, TypographyBody, TypographyLink } from '@/components/Typography';
import type { FC, ReactElement } from 'react';
import type { AlertProps, AlertStatus } from './interface';

const CLOSE_ALERT_ARIA_LABEL = 'Close alert';

const STATUS_ICON_MAP: Record<AlertStatus, ReactElement> = {
  info: <Icons name="notificationInfo" size={32} />,
  success: <Icons name="notificationSuccess" size={32} />,
  warning: <Icons name="notificationWarning" size={32} />,
  error: <Icons name="notificationError" size={32} />,
};

export const Alert: FC<AlertProps> = props => {
  const {
    className = '',
    prefixCls = 'alert',
    status = 'info',
    title,
    body,
    link,
    icon,
    showIcon = true,
    closable = true,
    onClose,
    ref: _ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const iconElement = icon ?? STATUS_ICON_MAP[status];

  return (
    <div
      {...rest}
      ref={_ref}
      className={classes(
        undefined,
        joinCls(classes(status), className),
      )}
    >
      {showIcon && (
        <span className={classes('icon')}>
          {iconElement}
        </span>
      )}
      <div className={classes('content')}>
        {title && (
          typeof title === 'string'
            ? <TypographyTitle size="sm" strong color="default">{title}</TypographyTitle>
            : title
        )}
        {body && (
          typeof body === 'string'
            ? <TypographyBody size="md" color="default-secondary">{body}</TypographyBody>
            : body
        )}
        {link && (
          <TypographyLink
            size="md"
            href={link.href}
            target={link.target}
            rel={link.target === '_blank' ? (link.rel ?? 'noreferrer') : link.rel}
            onClick={link.onClick}
          >
            {link.label}
          </TypographyLink>
        )}
      </div>
      {closable && (
        <button
          type="button"
          className={classes('close')}
          onClick={onClose}
          aria-label={CLOSE_ALERT_ARIA_LABEL}
        >
          <Icons name="cross" size={16} fill/>
        </button>
      )}
    </div>
  );
};

export default memo(Alert);
