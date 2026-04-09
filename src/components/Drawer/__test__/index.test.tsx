import 'jsdom-global/register';
import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/Button';
import { Drawer } from '../index';

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

describe('Drawer', () => {
  it('renders the figma-aligned header and footer structure when open', () => {
    render(
      <Drawer
        open
        title="Title"
        showBackIcon
        footer={(
          <div style={{ display: 'flex', gap: 12, width: '100%' }}>
            <Button color="secondary" style={{ flex: 1 }}>
              Cancel
            </Button>
            <Button color="primary" style={{ flex: 1 }}>
              Confirm
            </Button>
          </div>
        )}
      >
        <div>Body content</div>
      </Drawer>
    );

    const dialog = screen.getByRole('dialog');
    const root = document.body.querySelector('.om-component-ui-drawer-root');

    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close drawer' })).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });

  it('calls onBack when the back control is clicked', async () => {
    const onBack = jest.fn();
    const user = userEvent.setup();

    render(
      <Drawer open title="Title" showBackIcon onBack={onBack}>
        <div>Body content</div>
      </Drawer>
    );

    await user.click(screen.getByRole('button', { name: 'Go back' }));

    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the overlay if maskClosable is enabled', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    render(
      <Drawer open title="Title" onClose={onClose}>
        <div>Body content</div>
      </Drawer>
    );

    const overlay = document.body.querySelector('.om-component-ui-drawer-overlay');

    expect(overlay).toBeInTheDocument();

    await user.click(overlay as Element);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not close from overlay clicks when maskClosable is false', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    render(
      <Drawer open title="Title" maskClosable={false} onClose={onClose}>
        <div>Body content</div>
      </Drawer>
    );

    const overlay = document.body.querySelector('.om-component-ui-drawer-overlay');

    expect(overlay).toBeInTheDocument();

    await user.click(overlay as Element);

    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when pressing Escape', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    render(
      <Drawer open title="Title" onClose={onClose}>
        <div>Body content</div>
      </Drawer>
    );

    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
