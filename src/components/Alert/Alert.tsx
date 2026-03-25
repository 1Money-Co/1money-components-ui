import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '@/components/Icons';
import type { FC, ReactElement } from 'react';
import type { AlertProps, AlertLinkConfig, AlertStatus } from './interface';

const CLOSE_ALERT_ARIA_LABEL = 'Close alert';

const STATUS_ICON_MAP: Record<AlertStatus, ReactElement> = {
  info: <Icons name="notificationInfo" size={32} />,
  success: <Icons name="notificationSuccess" size={32} />,
  warning: <Icons name="notificationWarning" size={32} />,
  error: <Icons name="notificationError" size={32} />,
};

const AlertLink: FC<{
  link: AlertLinkConfig;
  className: string;
}> = ({ link, className }) => {
  const linkRel = link.target === '_blank' ? (link.rel ?? 'noreferrer') : link.rel;

  if (link.href) {
    return (
      <a
        className={className}
        href={link.href}
        target={link.target}
        rel={linkRel}
        onClick={link.onClick}
      >
        {link.label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={link.onClick}
    >
      {link.label}
    </button>
  );
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
    action,
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
        {title && <div className={classes('title')}>{title}</div>}
        {body && <div className={classes('body')}>{body}</div>}
        {link && <AlertLink link={link} className={classes('link')} />}
      </div>
      {action && <div className={classes('action')}>{action}</div>}
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
