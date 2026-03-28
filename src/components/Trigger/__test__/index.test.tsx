import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Trigger } from '../index';

function SimpleTrigger(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props}>
      Toggle
    </button>
  );
}

const PANEL_TEXT = 'Trigger panel content';

describe('Trigger', () => {
  it('opens on click and renders content', async () => {
    const { getByText, queryByText } = render(
      <Trigger content={<div>{PANEL_TEXT}</div>}>
        <SimpleTrigger />
      </Trigger>,
    );

    expect(queryByText(PANEL_TEXT)).toBeNull();

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(getByText(PANEL_TEXT)).toBeInTheDocument();
    });
  });

  it('closes on second click (toggle behavior)', async () => {
    const { getByText, queryByText } = render(
      <Trigger content={<div>{PANEL_TEXT}</div>}>
        <SimpleTrigger />
      </Trigger>,
    );

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(getByText(PANEL_TEXT)).toBeInTheDocument();
    });

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(queryByText(PANEL_TEXT)).toBeNull();
    });
  });

  it('supports controlled open state', async () => {
    const onOpenChange = jest.fn();

    const { getByText, queryByText, rerender } = render(
      <Trigger
        content={<div>{PANEL_TEXT}</div>}
        open={false}
        onOpenChange={onOpenChange}
      >
        <SimpleTrigger />
      </Trigger>,
    );

    expect(queryByText(PANEL_TEXT)).toBeNull();

    fireEvent.click(getByText('Toggle'));

    expect(onOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <Trigger
        content={<div>{PANEL_TEXT}</div>}
        open={true}
        onOpenChange={onOpenChange}
      >
        <SimpleTrigger />
      </Trigger>,
    );

    await waitFor(() => {
      expect(getByText(PANEL_TEXT)).toBeInTheDocument();
    });
  });

  it('passes close function via render function content', async () => {
    const { getByText, queryByText } = render(
      <Trigger
        content={({ close }) => (
          <div>
            <span>{PANEL_TEXT}</span>
            <button type="button" onClick={close}>
              Close
            </button>
          </div>
        )}
      >
        <SimpleTrigger />
      </Trigger>,
    );

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(getByText(PANEL_TEXT)).toBeInTheDocument();
    });

    fireEvent.click(getByText('Close'));

    await waitFor(() => {
      expect(queryByText(PANEL_TEXT)).toBeNull();
    });
  });

  it('does not open when disabled', () => {
    const onOpenChange = jest.fn();
    const { getByText, queryByText } = render(
      <Trigger
        content={<div>{PANEL_TEXT}</div>}
        disabled
        onOpenChange={onOpenChange}
      >
        <SimpleTrigger />
      </Trigger>,
    );

    fireEvent.click(getByText('Toggle'));

    expect(queryByText(PANEL_TEXT)).toBeNull();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('calls onOpen and onClose callbacks', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    const { getByText } = render(
      <Trigger
        content={<div>{PANEL_TEXT}</div>}
        onOpen={onOpen}
        onClose={onClose}
      >
        <SimpleTrigger />
      </Trigger>,
    );

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(onOpen).toHaveBeenCalledTimes(1);
    });

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  it('renders with defaultOpen=true', () => {
    const { getByText } = render(
      <Trigger content={<div>{PANEL_TEXT}</div>} defaultOpen>
        <SimpleTrigger />
      </Trigger>,
    );

    expect(getByText(PANEL_TEXT)).toBeInTheDocument();
  });

  it('renders without portal when portal=false', async () => {
    const { getByText, container } = render(
      <Trigger content={<div>{PANEL_TEXT}</div>} portal={false}>
        <SimpleTrigger />
      </Trigger>,
    );

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(container.querySelector('.om-trigger-panel')).not.toBeNull();
    });
  });

  it('supports combined trigger actions', async () => {
    const { getByText, queryByText } = render(
      <Trigger content={<div>{PANEL_TEXT}</div>} trigger={['click', 'hover']}>
        <SimpleTrigger />
      </Trigger>,
    );

    expect(queryByText(PANEL_TEXT)).toBeNull();

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(getByText(PANEL_TEXT)).toBeInTheDocument();
    });
  });

  it('accepts custom role prop', async () => {
    const { getByText } = render(
      <Trigger content={<div>{PANEL_TEXT}</div>} role="tooltip" defaultOpen>
        <SimpleTrigger />
      </Trigger>,
    );

    expect(getByText(PANEL_TEXT)).toBeInTheDocument();
  });
});
