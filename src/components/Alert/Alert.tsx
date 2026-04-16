import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '@/components/Icons';
import { TypographyTitle, TypographyBody, TypographyLink } from '@/components/Typography';
import type { FC, ReactElement } from 'react';
import type { AlertProps, AlertStatus } from './interface';
import './style';

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
    action,
    icon,
    showIcon = true,
    closable = false,
    onClose,
    ref: _ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const iconElement = icon ?? STATUS_ICON_MAP[status];
  const contentSectionCount = [title, body, link].filter(value => value != null).length;
  const closeAlignment = contentSectionCount === 1 ? 'center' : 'top';
  const useBodyTypographyForTitle = title != null && body == null;
  const hasTitleAndBody = title != null && body != null;
  const iconAlignment = link == null && contentSectionCount === 1 && (title != null || body != null) ? 'center' : 'top';

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
        <span className={classes('icon', classes(`icon-${iconAlignment}`))}>
          {iconElement}
        </span>
      )}
      <div className={classes('content', hasTitleAndBody ? classes('content-title-body') : undefined)}>
        {title && useBodyTypographyForTitle
                ? <TypographyBody size="md" color="default-secondary">{title}</TypographyBody>
                : <TypographyTitle size="sm" strong color="default">{title}</TypographyTitle>}
        {body ? <TypographyBody size="md" color="default-secondary">{body}</TypographyBody> : null
        }
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
      {(action || closable) && (
        <div className={classes('right')}>
          {action && (
            <div className={classes('action')}>
              {action}
            </div>
          )}
          {closable && (
            <button
              type="button"
              className={classes('close', classes(`close-${closeAlignment}`))}
              onClick={onClose}
              aria-label={CLOSE_ALERT_ARIA_LABEL}
            >
              <Icons name="cross" size={16} fill/>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(Alert);
