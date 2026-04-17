export const DIVIDER_COMPONENT_NAME = 'Divider';
export const DIVIDER_DEFAULT_PREFIX = 'divider';

// ── Type ────────────────────────────────────────────────────────────────────
export const DIVIDER_TYPE = {
  horizontal: 'horizontal',
  vertical: 'vertical',
} as const;

export const DIVIDER_TYPES = [
  DIVIDER_TYPE.horizontal,
  DIVIDER_TYPE.vertical,
] as const;

// ── Orientation ─────────────────────────────────────────────────────────────
export const DIVIDER_ORIENTATION = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export const DIVIDER_ORIENTATIONS = [
  DIVIDER_ORIENTATION.left,
  DIVIDER_ORIENTATION.center,
  DIVIDER_ORIENTATION.right,
] as const;

// ── Variant ─────────────────────────────────────────────────────────────────
export const DIVIDER_VARIANT = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
} as const;

export const DIVIDER_VARIANTS = [
  DIVIDER_VARIANT.solid,
  DIVIDER_VARIANT.dashed,
  DIVIDER_VARIANT.dotted,
] as const;

// ── Defaults ────────────────────────────────────────────────────────────────
export const DIVIDER_DEFAULTS = {
  type: DIVIDER_TYPE.horizontal,
  orientation: DIVIDER_ORIENTATION.center,
  variant: DIVIDER_VARIANT.solid,
} as const;

// ── BEM Modifiers & Slots ───────────────────────────────────────────────────
export const DIVIDER_MODIFIER = {
  withText: 'with-text',
  plain: 'plain',
  noDefaultMargin: 'no-default-margin',
} as const;

export const DIVIDER_SLOT = {
  innerText: 'inner-text',
} as const;

// ── Orientation → margin CSS property mapping ───────────────────────────────
export const DIVIDER_ORIENTATION_MARGIN_PROPERTY: Partial<
  Record<DividerOrientation, string>
> = {
  [DIVIDER_ORIENTATION.left]: 'marginInlineStart',
  [DIVIDER_ORIENTATION.right]: 'marginInlineEnd',
};

// ── Derived types ───────────────────────────────────────────────────────────
export type DividerType = (typeof DIVIDER_TYPES)[number];
export type DividerOrientation = (typeof DIVIDER_ORIENTATIONS)[number];
export type DividerVariant = (typeof DIVIDER_VARIANTS)[number];
