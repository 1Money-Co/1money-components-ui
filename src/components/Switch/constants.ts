import type { TypographyBodySize, TypographyColor } from '@/components/Typography';

export const SWITCH_PREFIX_CLS = 'switch';

// ── Label Placement ────────────────────────────────────────────────────────
export const SWITCH_LABEL_PLACEMENT = {
  left: 'left',
  right: 'right',
} as const;

export const SWITCH_LABEL_PLACEMENTS = [
  SWITCH_LABEL_PLACEMENT.left,
  SWITCH_LABEL_PLACEMENT.right,
] as const;

// ── Typography ─────────────────────────────────────────────────────────────
export const SWITCH_TYPOGRAPHY = {
  label: {
    size: 'lg' as TypographyBodySize,
    color: {
      default: 'default' as TypographyColor,
      disabled: 'disabled' as TypographyColor,
    },
  },
  description: {
    size: 'md' as TypographyBodySize,
    color: {
      default: 'default-tertiary' as TypographyColor,
      disabled: 'disabled' as TypographyColor,
    },
  },
} as const;

// ── Defaults ───────────────────────────────────────────────────────────────
export const SWITCH_DEFAULT_LABEL_PLACEMENT = SWITCH_LABEL_PLACEMENT.left;

// ── Derived types ──────────────────────────────────────────────────────────
export type SwitchLabelPlacement = (typeof SWITCH_LABEL_PLACEMENTS)[number];
