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

export const NOTIFICATION_PLACEMENTS = [
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
] as const;
export type NotificationPlacement = (typeof NOTIFICATION_PLACEMENTS)[number];
export type NotificationKey = string | number;

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

export interface NotificationOpenConfig
  extends Omit<NotificationProps, 'prefixCls' | 'ref' | 'onClose'> {
  /** Unique key used to update or destroy a notification */
  key?: NotificationKey;

  /** Screen placement for the notification container */
  placement?: NotificationPlacement;

  /** Auto-close timeout in seconds. Use 0 to disable auto-close. */
  duration?: number;

  /** Callback fired after the notification is removed */
  onClose?: () => void;
}

export interface NotificationStaticConfig {
  /** Default screen placement for new notifications */
  placement?: NotificationPlacement;

  /** Default auto-close timeout in seconds */
  duration?: number;

  /** Maximum number of notifications per placement */
  maxCount?: number;
}

export interface NotificationStaticApi {
  open: (config: NotificationOpenConfig) => NotificationKey;
  info: (config: Omit<NotificationOpenConfig, 'status'>) => NotificationKey;
  success: (config: Omit<NotificationOpenConfig, 'status'>) => NotificationKey;
  warning: (config: Omit<NotificationOpenConfig, 'status'>) => NotificationKey;
  error: (config: Omit<NotificationOpenConfig, 'status'>) => NotificationKey;
  destroy: (key?: NotificationKey) => void;
  config: (config: NotificationStaticConfig) => void;
}
