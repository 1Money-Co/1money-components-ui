import type {
  HTMLAttributes,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from 'react';

/**
 * Status variants for Alert.
 * Each status maps to a distinct container background, icon, and icon-background color.
 */
export const ALERT_STATUSES = ['info', 'success', 'warning', 'error'] as const;
export type AlertStatus = (typeof ALERT_STATUSES)[number];

export interface AlertLinkConfig {
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

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: RefObject<HTMLDivElement | null>;

  /** CSS class prefix for BEM namespace customization */
  prefixCls?: string;

  /** Status variant controlling container background, icon, and icon-background color */
  status?: AlertStatus;

  /** Title text displayed in bold */
  title?: ReactNode;

  /** Body text displayed below the title */
  body?: ReactNode;

  /** Optional link rendered below the body */
  link?: AlertLinkConfig;

  /** Custom icon element. When provided, overrides the default status icon. */
  icon?: ReactNode;

  /** Whether to show the status icon. Defaults to true. */
  showIcon?: boolean;

  /** Optional action element (e.g., a button) displayed before the close button */
  action?: ReactNode;

  /** Whether to show the close button. Defaults to true. */
  closable?: boolean;

  /** Callback fired when the close button is clicked */
  onClose?: MouseEventHandler<HTMLButtonElement>;
}
