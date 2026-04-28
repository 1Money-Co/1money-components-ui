import type { ButtonProps } from '@/components/Button';
import type { IconName } from '@/components/Icons';

export const DIALOG_NAMESPACE = 'om-component-ui';
export const DIALOG_DEFAULT_PREFIX = 'dialog';

export const DIALOG_SIZE = {
  small: 'small',
  large: 'large',
} as const;

export const DIALOG_SIZES = [DIALOG_SIZE.small, DIALOG_SIZE.large] as const;

export const DIALOG_ACTION_KIND = {
  ok: 'ok',
  cancel: 'cancel',
} as const;

export const DIALOG_CONTROL_TYPE = {
  back: 'back',
  close: 'close',
} as const;

export const DIALOG_SLOT = {
  root: 'root',
  overlay: 'overlay',
  wrapper: 'wrapper',
  control: 'control',
  actionButton: 'action-button',
  media: 'media',
  inner: 'inner',
  header: 'header',
  body: 'body',
  illustration: 'illustration',
  title: 'title',
  content: 'content',
  footer: 'footer',
} as const;

export const DIALOG_MODIFIER = {
  open: 'open',
  closed: 'closed',
  fullWidth: 'full-width',
  withMedia: 'with-media',
} as const;

export const DIALOG_CONTROL_LABELS: Record<DialogControlType, string> = {
  [DIALOG_CONTROL_TYPE.back]: 'Go back',
  [DIALOG_CONTROL_TYPE.close]: 'Close dialog',
};

export const DIALOG_DEFAULT_ICONS: Record<DialogControlType, IconName> = {
  [DIALOG_CONTROL_TYPE.back]: 'arrowLeft',
  [DIALOG_CONTROL_TYPE.close]: 'cross',
};

export const DIALOG_DEFAULT_BUTTON_COLORS: Record<
  DialogActionKind,
  NonNullable<ButtonProps['color']>
> = {
  [DIALOG_ACTION_KIND.cancel]: 'grey',
  [DIALOG_ACTION_KIND.ok]: 'primary',
};

export const DIALOG_DEFAULTS = {
  buttonHtmlType: 'button',
  buttonSize: 'large' satisfies NonNullable<ButtonProps['size']>,
  closeTimeoutMs: 200,
  controlIconSize: 24,
  illustrationSize: 74,
  okText: 'Confirm',
  cancelText: 'Cancel',
  overflowHidden: 'hidden',
  overflowReset: '',
  escapeKey: 'Escape',
  keydownEvent: 'keydown',
} as const;

export type DialogSize = (typeof DIALOG_SIZES)[number];
export type DialogActionKind =
  (typeof DIALOG_ACTION_KIND)[keyof typeof DIALOG_ACTION_KIND];
export type DialogControlType =
  (typeof DIALOG_CONTROL_TYPE)[keyof typeof DIALOG_CONTROL_TYPE];
