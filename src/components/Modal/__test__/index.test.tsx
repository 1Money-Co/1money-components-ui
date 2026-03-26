import 'jsdom-global/register';
import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../index';

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

describe('Modal', () => {
  it('renders content in a portal when open', () => {
    render(
      <Modal
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
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('calls onCancel when clicking the overlay if maskClosable is enabled', async () => {
    const onCancel = jest.fn();
    const user = userEvent.setup();

    render(
      <Modal
        open
        title="Text Heading"
        description="Body text"
        onOk={jest.fn()}
        onCancel={onCancel}
      />
    );

    const overlay = document.querySelector('.om-react-ui-modal-overlay');

    expect(overlay).not.toBeNull();

    await user.click(overlay as Element);

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('does not close from overlay clicks when maskClosable is false', async () => {
    const onCancel = jest.fn();
    const user = userEvent.setup();

    render(
      <Modal
        open
        title="Text Heading"
        description="Body text"
        maskClosable={false}
        onOk={jest.fn()}
        onCancel={onCancel}
      />
    );

    const overlay = document.querySelector('.om-react-ui-modal-overlay');

    expect(overlay).not.toBeNull();

    await user.click(overlay as Element);

    expect(onCancel).not.toHaveBeenCalled();
  });

  it('renders a large footer layout and supports the back control', async () => {
    const onBack = jest.fn();
    const user = userEvent.setup();

    render(
      <Modal
        open
        size="large"
        showBackIcon
        title="Text Heading"
        description="Body text"
        onBack={onBack}
        onOk={jest.fn()}
        onCancel={jest.fn()}
      />
    );

    const footer = document.querySelector('.om-react-ui-modal-footer-large');

    expect(footer).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Go back' }));

    expect(onBack).toHaveBeenCalledTimes(1);
  });
});
