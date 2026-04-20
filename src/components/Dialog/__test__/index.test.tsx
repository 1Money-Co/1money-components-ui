import 'jsdom-global/register';
import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  DIALOG_CONTROL_LABELS,
  DIALOG_CONTROL_TYPE,
  DIALOG_DEFAULT_PREFIX,
  DIALOG_DEFAULTS,
  DIALOG_NAMESPACE,
  DIALOG_SIZE,
  DIALOG_SLOT,
} from '../constants';
import { Dialog } from '../index';

const getDialogClassSelector = (slot: string, modifier?: string) =>
  `.${DIALOG_NAMESPACE}-${DIALOG_DEFAULT_PREFIX}-${slot}${modifier ? `-${modifier}` : ''}`;

const originalConsoleError = console.error;

beforeAll(() => {
  console.error = (message, ...optionalParams) => {
    const errorMessage = typeof message === 'string' ? message : String(message);
    if (
      errorMessage.includes('Could not parse CSS stylesheet') ||
      errorMessage.includes('findDOMNode is deprecated and will be removed')
    ) {
      return;
    }
    originalConsoleError(message, ...optionalParams);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});

describe('Dialog', () => {
  it('renders content in a portal when open', () => {
    render(
      <Dialog
        open
        title="Text Heading"
        description="Body text"
        illustration="illus2FA"
        onOk={jest.fn()}
        onCancel={jest.fn()}
      />
    );

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();
    expect(screen.getByText('Text Heading')).toBeInTheDocument();
    expect(screen.getByText('Body text')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: DIALOG_DEFAULTS.okText }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: DIALOG_DEFAULTS.cancelText }),
    ).toBeInTheDocument();

    const closeButton = screen.getByRole('button', {
      name: DIALOG_CONTROL_LABELS[DIALOG_CONTROL_TYPE.close],
    });
    const closeIcon = closeButton.querySelector('svg');

    expect(closeIcon).toHaveAttribute('width', String(DIALOG_DEFAULTS.controlIconSize));
    expect(closeIcon).toHaveAttribute('height', String(DIALOG_DEFAULTS.controlIconSize));
  });

  it('calls onCancel when clicking the overlay if maskClosable is enabled', async () => {
    const onCancel = jest.fn();
    const user = userEvent.setup();

    render(
      <Dialog
        open
        title="Text Heading"
        description="Body text"
        onOk={jest.fn()}
        onCancel={onCancel}
      />
    );

    const overlay = document.querySelector(getDialogClassSelector(DIALOG_SLOT.overlay));

    expect(overlay).not.toBeNull();

    await user.click(overlay as Element);

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('does not close from overlay clicks when maskClosable is false', async () => {
    const onCancel = jest.fn();
    const user = userEvent.setup();

    render(
      <Dialog
        open
        title="Text Heading"
        description="Body text"
        maskClosable={false}
        onOk={jest.fn()}
        onCancel={onCancel}
      />
    );

    const overlay = document.querySelector(getDialogClassSelector(DIALOG_SLOT.overlay));

    expect(overlay).not.toBeNull();

    await user.click(overlay as Element);

    expect(onCancel).not.toHaveBeenCalled();
  });

  it('renders a large footer layout and supports the back control', async () => {
    const onBack = jest.fn();
    const user = userEvent.setup();

    render(
      <Dialog
        open
        size={DIALOG_SIZE.large}
        showBackIcon
        title="Text Heading"
        description="Body text"
        onBack={onBack}
        onOk={jest.fn()}
        onCancel={jest.fn()}
      />
    );

    const footer = document.querySelector(
      getDialogClassSelector(DIALOG_SLOT.footer, DIALOG_SIZE.large),
    );

    expect(footer).toBeInTheDocument();

    await user.click(screen.getByRole('button', {
      name: DIALOG_CONTROL_LABELS[DIALOG_CONTROL_TYPE.back],
    }));

    expect(onBack).toHaveBeenCalledTimes(1);
  });
});
