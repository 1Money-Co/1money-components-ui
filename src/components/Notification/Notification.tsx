import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, ReactElement } from 'react';
import type { NotificationProps, NotificationLinkConfig, NotificationStatus } from './interface';

const CLOSE_NOTIFICATION_ARIA_LABEL = 'Close notification';

const INFO_ICON = (
  <svg width="16" height="16" viewBox="0 0 14.6667 14.6667" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33333 1.33333C10.647 1.33333 13.3333 4.01962 13.3333 7.33333C13.3333 10.647 10.647 13.3333 7.33333 13.3333C4.01962 13.3333 1.33333 10.647 1.33333 7.33333C1.33333 4.01962 4.01962 1.33333 7.33333 1.33333ZM7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.66667 6.66667V11H8V6.66667H6.66667Z"
      fill="currentColor"
    />
    <path
      d="M8.33333 4.66667C8.33333 4.11438 7.88562 3.66667 7.33333 3.66667C6.78105 3.66667 6.33333 4.11438 6.33333 4.66667C6.33333 5.21895 6.78105 5.66667 7.33333 5.66667C7.88562 5.66667 8.33333 5.21895 8.33333 4.66667Z"
      fill="currentColor"
    />
  </svg>
);

const SUCCESS_ICON = (
  <svg width="16" height="16" viewBox="0 0 12.6398 9.74203" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6398 0.866794L5.0465 9.74203L0 4.79852L0.93304 3.84605L4.96062 7.79143L11.6266 0L12.6398 0.866794Z"
      fill="currentColor"
    />
  </svg>
);

const WARNING_ICON = (
  <svg width="16" height="16" viewBox="0 0 14.3662 13.5963" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.51641 8.26297V3.92963H7.84975V8.26297H6.51641Z"
      fill="currentColor"
    />
    <path
      d="M8.18308 10.263C8.18308 10.8152 7.73537 11.263 7.18308 11.263C6.6308 11.263 6.18308 10.8152 6.18308 10.263C6.18308 9.71068 6.6308 9.26297 7.18308 9.26297C7.73537 9.26297 8.18308 9.71068 8.18308 10.263Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.33334 10.1079L2.11698 12.263H12.2492L13.0328 10.1079L7.18308 1.33333L1.33334 10.1079ZM8.29248 0.593732C7.76472 -0.197912 6.60144 -0.19791 6.07368 0.593734L0.22394 9.36834C-0.0113234 9.72124 -0.0646605 10.165 0.0802817 10.5636L0.863926 12.7186C1.05553 13.2455 1.55631 13.5963 2.11698 13.5963H12.2492C12.8099 13.5963 13.3106 13.2455 13.5022 12.7186L14.2859 10.5636C14.4308 10.165 14.3775 9.72124 14.1422 9.36834L8.29248 0.593732Z"
      fill="currentColor"
    />
  </svg>
);

const ERROR_ICON = (
  <svg width="16" height="16" viewBox="0 0 9.60955 9.60948" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.86196 4.8047L7.18037e-05 0.942809L0.942881 0L4.80477 3.86189L8.66667 2.78155e-07L9.60948 0.942809L5.74758 4.8047L9.60955 8.66667L8.66674 9.60948L4.80477 5.74751L0.942809 9.60948L0 8.66667L3.86196 4.8047Z"
      fill="currentColor"
    />
  </svg>
);

const CLOSE_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.47 4.47a.75.75 0 0 1 1.06 0L8 6.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L9.06 8l2.47 2.47a.75.75 0 1 1-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 0 1 0-1.06Z"
      fill="currentColor"
    />
  </svg>
);

const STATUS_ICON_MAP: Record<NotificationStatus, ReactElement> = {
  info: INFO_ICON,
  success: SUCCESS_ICON,
  warning: WARNING_ICON,
  error: ERROR_ICON,
};

const NotificationLink: FC<{
  link: NotificationLinkConfig;
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

export const Notification: FC<NotificationProps> = props => {
  const {
    className = '',
    prefixCls = 'notification',
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
      <div className={classes('content-wrapper')}>
        {showIcon && (
          <div className={classes('icon-wrapper')}>
            <span className={classes('icon')}>
              {iconElement}
            </span>
          </div>
        )}
        <div className={classes('content')}>
          {title && <div className={classes('title')}>{title}</div>}
          {body && <div className={classes('body')}>{body}</div>}
          {link && <NotificationLink link={link} className={classes('link')} />}
        </div>
      </div>
      {closable && (
        <button
          type="button"
          className={classes('close')}
          onClick={onClose}
          aria-label={CLOSE_NOTIFICATION_ARIA_LABEL}
        >
          {CLOSE_ICON}
        </button>
      )}
    </div>
  );
};

export default memo(Notification);
