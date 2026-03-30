import type { IconName } from '@/components/Icons';

export const PROGRESS_DEFAULT_PREFIX = 'progress';
export const PROGRESS_MIN = 0;
export const PROGRESS_MAX = 100;
export const PROGRESS_DEFAULT_COLOR = 'gray';
export const PROGRESS_DEFAULT_PLACEMENT = 'left';
export const PROGRESS_DEFAULT_SHOW_INFO = true;
export const PROGRESS_FEEDBACK_ICON: Extract<IconName, 'error'> = 'error';

export const PROGRESS_STATE = {
  default: 'default',
  success: 'success',
  error: 'error',
  notStarted: 'not-started',
} as const;

export const PROGRESS_STATES = [
  PROGRESS_STATE.default,
  PROGRESS_STATE.success,
  PROGRESS_STATE.error,
  PROGRESS_STATE.notStarted,
] as const;

export const PROGRESS_COLORS = [
  PROGRESS_DEFAULT_COLOR,
  'white',
] as const;

export const PROGRESS_PLACEMENTS = [
  PROGRESS_DEFAULT_PLACEMENT,
  'right',
] as const;

export type ProgressState = (typeof PROGRESS_STATES)[number];
export type ProgressColor = (typeof PROGRESS_COLORS)[number];
export type ProgressPlacement = (typeof PROGRESS_PLACEMENTS)[number];

export const PROGRESS_TEST_ERROR_MESSAGES = [
  'Could not parse CSS stylesheet',
  'findDOMNode is deprecated and will be removed',
] as const;

export const clampPercent = (percent: number): number => {
  if (percent <= PROGRESS_MIN) return PROGRESS_MIN;
  if (percent >= PROGRESS_MAX) return PROGRESS_MAX;
  return percent;
};

export const resolveProgressState = (
  percent: number,
  state?: ProgressState,
): ProgressState => {
  if (state) return state;
  if (percent <= PROGRESS_MIN) return PROGRESS_STATE.notStarted;
  if (percent >= PROGRESS_MAX) return PROGRESS_STATE.success;
  return PROGRESS_STATE.default;
};
