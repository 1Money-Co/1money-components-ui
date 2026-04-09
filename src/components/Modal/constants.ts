import type { ButtonProps } from '@/components/Button';
import type { IconName } from '@/components/Icons';

export const MODAL_NAMESPACE = 'om-component-ui';
export const MODAL_DEFAULT_PREFIX = 'modal';

export const MODAL_SIZE = {
  small: 'small',
  large: 'large',
} as const;

export const MODAL_SIZES = [MODAL_SIZE.small, MODAL_SIZE.large] as const;

export const MODAL_ACTION_KIND = {
  ok: 'ok',
  cancel: 'cancel',
} as const;

export const MODAL_CONTROL_TYPE = {
  back: 'back',
  close: 'close',
} as const;

export const MODAL_SLOT = {
  root: 'root',
  overlay: 'overlay',
  wrapper: 'wrapper',
  control: 'control',
  actionButton: 'action-button',
  media: 'media',
  inner: 'inner',
  header: 'header',
  body: 'body',
  summary: 'summary',
  illustration: 'illustration',
  copy: 'copy',
  title: 'title',
  description: 'description',
  content: 'content',
  footer: 'footer',
} as const;

export const MODAL_MODIFIER = {
  open: 'open',
  closed: 'closed',
  fullWidth: 'full-width',
  withMedia: 'with-media',
} as const;

export const MODAL_CONTROL_LABELS: Record<ModalControlType, string> = {
  [MODAL_CONTROL_TYPE.back]: 'Go back',
  [MODAL_CONTROL_TYPE.close]: 'Close modal',
};

export const MODAL_DEFAULT_ICONS: Record<ModalControlType, IconName> = {
  [MODAL_CONTROL_TYPE.back]: 'arrowLeft',
  [MODAL_CONTROL_TYPE.close]: 'cross',
};

export const MODAL_DEFAULT_BUTTON_COLORS: Record<
  ModalActionKind,
  NonNullable<ButtonProps['color']>
> = {
  [MODAL_ACTION_KIND.cancel]: 'grey',
  [MODAL_ACTION_KIND.ok]: 'primary',
};

export const MODAL_BUTTON_HTML_TYPE = 'button';
export const MODAL_BUTTON_SIZE: NonNullable<ButtonProps['size']> = 'large';
export const MODAL_CLOSE_TIMEOUT = 200;
export const MODAL_CONTROL_ICON_SIZE = 24;
export const MODAL_DEFAULT_ILLUSTRATION_SIZE = 74;
export const MODAL_DEFAULT_OK_TEXT = 'Confirm';
export const MODAL_DEFAULT_CANCEL_TEXT = 'Cancel';
export const MODAL_OVERFLOW_HIDDEN = 'hidden';
export const MODAL_OVERFLOW_RESET = '';
export const MODAL_ESCAPE_KEY = 'Escape';
export const MODAL_KEYDOWN_EVENT = 'keydown';

export type ModalSize = (typeof MODAL_SIZES)[number];
export type ModalActionKind =
  (typeof MODAL_ACTION_KIND)[keyof typeof MODAL_ACTION_KIND];
export type ModalControlType =
  (typeof MODAL_CONTROL_TYPE)[keyof typeof MODAL_CONTROL_TYPE];
