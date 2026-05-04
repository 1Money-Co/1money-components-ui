import type { TypographyBodySize, TypographyColor, TypographyTitleSize } from '@/components/Typography';

// ── Title ──
export const NOTIFICATION_TITLE_SIZE: TypographyTitleSize = 'sm';
export const NOTIFICATION_TITLE_COLOR: TypographyColor = 'default-secondary';

// ── Body ──
export const NOTIFICATION_BODY_SIZE: TypographyBodySize = 'md';
export const NOTIFICATION_BODY_COLOR: TypographyColor = 'default-secondary';

// ── Accessibility ──
export const NOTIFICATION_CLOSE_ARIA_LABEL = 'Close notification';

// ── Status icons ──
export const NOTIFICATION_STATUS_ICON = {
  info: 'notificationInfo',
  success: 'notificationSuccess',
  warning: 'notificationWarning',
  error: 'notificationError',
} as const;
