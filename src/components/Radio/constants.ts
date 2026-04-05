import type { IconName } from '@/components/Icons';
import type {
  RadioAlignment,
  RadioOrientation,
  RadioSize,
  RadioVariant,
} from './interface';

export const RADIO_PREFIX_CLS = 'radio';
export const RADIO_GROUP_PREFIX_CLS = 'radio-group';

export const RADIO_VARIANT_DEFAULT = 'default';
export const RADIO_VARIANT_CELL = 'cell';
export const RADIO_VARIANTS = [RADIO_VARIANT_DEFAULT, RADIO_VARIANT_CELL] as const;

export const RADIO_SIZE_LARGE = 'large';
export const RADIO_SIZE_MEDIUM = 'medium';
export const RADIO_SIZE_SMALL = 'small';
export const RADIO_SIZES = [RADIO_SIZE_LARGE, RADIO_SIZE_MEDIUM, RADIO_SIZE_SMALL] as const;

export const RADIO_ORIENTATION_HORIZONTAL = 'horizontal';
export const RADIO_ORIENTATION_VERTICAL = 'vertical';
export const RADIO_ORIENTATIONS = [RADIO_ORIENTATION_HORIZONTAL, RADIO_ORIENTATION_VERTICAL] as const;

export const RADIO_ALIGNMENT_LEFT = 'left';
export const RADIO_ALIGNMENT_CENTER = 'center';
export const RADIO_ALIGNMENT_RIGHT = 'right';
export const RADIO_ALIGNMENTS = [
  RADIO_ALIGNMENT_LEFT,
  RADIO_ALIGNMENT_CENTER,
  RADIO_ALIGNMENT_RIGHT,
] as const;

export const RADIO_LAYOUT_VERTICAL = 'vertical';
export const RADIO_LAYOUT_HORIZONTAL = 'horizontal';
export const RADIO_LAYOUTS = [RADIO_LAYOUT_VERTICAL, RADIO_LAYOUT_HORIZONTAL] as const;

export const RADIO_DEFAULT_VARIANT: (typeof RADIO_VARIANTS)[number] = RADIO_VARIANT_DEFAULT;
export const RADIO_DEFAULT_SIZE: (typeof RADIO_SIZES)[number] = RADIO_SIZE_LARGE;
export const RADIO_DEFAULT_ORIENTATION: (typeof RADIO_ORIENTATIONS)[number] = RADIO_ORIENTATION_HORIZONTAL;
export const RADIO_DEFAULT_ALIGNMENT: (typeof RADIO_ALIGNMENTS)[number] = RADIO_ALIGNMENT_LEFT;
export const RADIO_DEFAULT_LAYOUT: (typeof RADIO_LAYOUTS)[number] = RADIO_LAYOUT_VERTICAL;

export const RADIO_INPUT_TYPE = 'radio';
export const RADIO_CELL_CHECK_ICON: IconName = 'check';
export const RADIO_TAG_SIZE = 'small';

export const RADIO_CELL_ICON_SIZE_MAP: Record<RadioOrientation, Record<RadioSize, number>> = {
  horizontal: {
    large: 16,
    medium: 16,
    small: 12,
  },
  vertical: {
    large: 24,
    medium: 20,
    small: 16,
  },
};

export const getRadioAlignmentFromOrientation = (
  orientation: RadioOrientation,
): RadioAlignment => (
  orientation === RADIO_ORIENTATION_VERTICAL
    ? RADIO_ALIGNMENT_CENTER
    : RADIO_ALIGNMENT_LEFT
);

export const getRadioOrientationFromAlignment = (
  alignment: RadioAlignment,
): RadioOrientation => (
  alignment === RADIO_ALIGNMENT_CENTER
    ? RADIO_ORIENTATION_VERTICAL
    : RADIO_ORIENTATION_HORIZONTAL
);

export const getRadioAlignmentFromDirection = (
  direction?: 'left' | 'right',
): RadioAlignment | undefined => {
  if (direction === 'right') {
    return RADIO_ALIGNMENT_RIGHT;
  }

  if (direction === 'left') {
    return RADIO_ALIGNMENT_LEFT;
  }

  return undefined;
};

export const normalizeRadioAlignment = (
  alignment: RadioAlignment,
  variant: RadioVariant,
): RadioAlignment => {
  if (variant === RADIO_VARIANT_CELL) {
    return alignment === RADIO_ALIGNMENT_CENTER
      ? RADIO_ALIGNMENT_CENTER
      : RADIO_ALIGNMENT_LEFT;
  }

  return alignment === RADIO_ALIGNMENT_RIGHT
    ? RADIO_ALIGNMENT_RIGHT
    : RADIO_ALIGNMENT_LEFT;
};

export const RADIO_CELL_INDICATOR_ICON_COLOR = 'var(--om-radio-cell-indicator-icon)';
export const RADIO_CELL_ICON_COLOR = 'var(--om-radio-cell-icon)';
