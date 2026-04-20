import type { TypographyColor, TypographyTitleSize } from '@/components/Typography';

export const DRAWER_PLACEMENTS = ['top', 'right', 'bottom', 'left'] as const;
export const DRAWER_HORIZONTAL_PLACEMENTS: ReadonlySet<(typeof DRAWER_PLACEMENTS)[number]> = new Set(['left', 'right']);

export const DRAWER_PHASES = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing',
} as const;

export const DRAWER_DEFAULTS = {
  closeTimeoutMs: 300,
  controlIconSize: 20,
  width: 360,
  height: 360,
  placement: 'right',
} as const;

// ── Typography ──
export const DRAWER_TITLE_SIZE: TypographyTitleSize = 'lg';
export const DRAWER_TITLE_COLOR: TypographyColor = 'default';
