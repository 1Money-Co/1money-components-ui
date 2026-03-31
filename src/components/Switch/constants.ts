export const SWITCH_PREFIX_CLS = 'switch';

export const SWITCH_LABEL_PLACEMENT_LEFT = 'left';
export const SWITCH_LABEL_PLACEMENT_RIGHT = 'right';
export const SWITCH_LABEL_PLACEMENTS = [SWITCH_LABEL_PLACEMENT_LEFT, SWITCH_LABEL_PLACEMENT_RIGHT] as const;
export const SWITCH_DEFAULT_LABEL_PLACEMENT: (typeof SWITCH_LABEL_PLACEMENTS)[number] = SWITCH_LABEL_PLACEMENT_LEFT;

export const SWITCH_LABEL_COLOR_DEFAULT = 'default';
export const SWITCH_LABEL_COLOR_DISABLED = 'disabled';
export const SWITCH_DESCRIPTION_COLOR_DEFAULT = 'default-tertiary';
export const SWITCH_DESCRIPTION_COLOR_DISABLED = 'disabled';

export const SWITCH_LABEL_SIZE = 'lg';
export const SWITCH_DESCRIPTION_SIZE = 'md';
