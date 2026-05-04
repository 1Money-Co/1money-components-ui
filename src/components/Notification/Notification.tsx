import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '@/components/Icons';
import { TypographyBody, TypographyTitle } from '@/components/Typography';
import type { FC } from 'react';
import type { NotificationLinkConfig, NotificationProps } from './interface';
import {
  NOTIFICATION_TITLE_SIZE,
  NOTIFICATION_TITLE_COLOR,
  NOTIFICATION_BODY_SIZE,
  NOTIFICATION_BODY_COLOR,
  NOTIFICATION_CLOSE_ARIA_LABEL,
  NOTIFICATION_STATUS_ICON,
} from './constants';

const NotificationLink: FC<{
  link: NotificationLinkConfig;
  className: string;
}> = ({ link, className }) => {
  // Default to 'noreferrer' for target="_blank" to prevent window.opener access
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

const Notification: FC<NotificationProps> = props => {
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
  const iconElement = icon ?? <Icons name={NOTIFICATION_STATUS_ICON[status]} size={32} />;

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
          {title && <TypographyTitle className={classes('title')} size={NOTIFICATION_TITLE_SIZE} strong color={NOTIFICATION_TITLE_COLOR}>{title}</TypographyTitle>}
          {body && <TypographyBody className={classes('body')} as="div" size={NOTIFICATION_BODY_SIZE} color={NOTIFICATION_BODY_COLOR}>{body}</TypographyBody>}
          {link && <NotificationLink link={link} className={classes('link')} />}
        </div>
      </div>
      {closable && (
        <button
          type="button"
          className={classes('close')}
          onClick={onClose}
          aria-label={NOTIFICATION_CLOSE_ARIA_LABEL}
        >
          <Icons name="cross" size={16} fill color="currentColor" />
        </button>
      )}
    </div>
  );
};

const MemoizedNotification = memo(Notification);

export { Notification, MemoizedNotification };
export default MemoizedNotification;
