import type { TypographyColor, TypographyTitleSize } from '@/components/Typography';

export const DRAWER_PLACEMENTS = ['top', 'right', 'bottom', 'left'] as const;
export const DRAWER_PHASES = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing',
} as const;

export const CLOSE_TIMEOUT_MS = 300;
export const CONTROL_ICON_SIZE = 20;
export const DEFAULT_WIDTH = 360;
export const DEFAULT_HEIGHT = 360;
export const DEFAULT_PLACEMENT = 'right';

// ── Typography ──
export const DRAWER_TITLE_SIZE: TypographyTitleSize = 'lg';
export const DRAWER_TITLE_COLOR: TypographyColor = 'default';
