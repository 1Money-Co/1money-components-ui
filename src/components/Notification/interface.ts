import type {
  HTMLAttributes,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from 'react';

/**
 * Status variants for Notification.
 * Each status maps to a distinct icon and icon-background color.
 */
export const NOTIFICATION_STATUSES = ['info', 'success', 'warning', 'error'] as const;
export type NotificationStatus = (typeof NOTIFICATION_STATUSES)[number];

export interface NotificationLinkConfig {
  /** Display text for the link */
  label: string;
  /** Optional URL. When provided, the link renders as an anchor instead of a button. */
  href?: string;
  /** Anchor target. Only applies when href is provided. */
  target?: HTMLAttributeAnchorTarget;
  /** Anchor rel. Only applies when href is provided. */
  rel?: string;
  /** Click handler for the link or action button. */
  onClick?: MouseEventHandler<HTMLElement>;
}

export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: RefObject<HTMLDivElement | null>;

  /** CSS class prefix for BEM namespace customization */
  prefixCls?: string;

  /** Status variant controlling icon and icon-background color */
  status?: NotificationStatus;

  /** Title text displayed in bold above the body */
  title?: ReactNode;

  /** Body text displayed below the title */
  body?: ReactNode;

  /** Optional link rendered below the body */
  link?: NotificationLinkConfig;

  /** Custom icon element. When provided, overrides the default status icon. */
  icon?: ReactNode;

  /** Whether to show the status icon. Defaults to true. */
  showIcon?: boolean;

  /** Whether to show the close button. Defaults to true. */
  closable?: boolean;

  /** Callback fired when the close button is clicked */
  onClose?: MouseEventHandler<HTMLButtonElement>;
}
