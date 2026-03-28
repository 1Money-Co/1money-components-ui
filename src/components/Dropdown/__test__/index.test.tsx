import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from '../index';

function SimpleTrigger(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props}>Toggle</button>;
}

const PANEL_TEXT = 'Dropdown panel content';

describe('Dropdown', () => {
  it('opens on click and renders content', async () => {
    const { getByText, queryByText } = render(
      <Dropdown content={<div>{PANEL_TEXT}</div>}>
        <SimpleTrigger />
      </Dropdown>,
    );

    expect(queryByText(PANEL_TEXT)).toBeNull();

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(getByText(PANEL_TEXT)).toBeInTheDocument();
    });
  });

  it('closes on second click (toggle behavior)', async () => {
    const { getByText, queryByText } = render(
      <Dropdown content={<div>{PANEL_TEXT}</div>}>
        <SimpleTrigger />
      </Dropdown>,
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
      <Dropdown content={<div>{PANEL_TEXT}</div>} open={false} onOpenChange={onOpenChange}>
        <SimpleTrigger />
      </Dropdown>,
    );

    expect(queryByText(PANEL_TEXT)).toBeNull();

    fireEvent.click(getByText('Toggle'));

    expect(onOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <Dropdown content={<div>{PANEL_TEXT}</div>} open={true} onOpenChange={onOpenChange}>
        <SimpleTrigger />
      </Dropdown>,
    );

    await waitFor(() => {
      expect(getByText(PANEL_TEXT)).toBeInTheDocument();
    });
  });

  it('passes close function via render function content', async () => {
    const { getByText, queryByText } = render(
      <Dropdown
        content={({ close }) => (
          <div>
            <span>{PANEL_TEXT}</span>
            <button type="button" onClick={close}>Close</button>
          </div>
        )}
      >
        <SimpleTrigger />
      </Dropdown>,
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
      <Dropdown content={<div>{PANEL_TEXT}</div>} disabled onOpenChange={onOpenChange}>
        <SimpleTrigger />
      </Dropdown>,
    );

    fireEvent.click(getByText('Toggle'));

    expect(queryByText(PANEL_TEXT)).toBeNull();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('calls onOpen and onClose callbacks', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    const { getByText } = render(
      <Dropdown content={<div>{PANEL_TEXT}</div>} onOpen={onOpen} onClose={onClose}>
        <SimpleTrigger />
      </Dropdown>,
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
      <Dropdown content={<div>{PANEL_TEXT}</div>} defaultOpen>
        <SimpleTrigger />
      </Dropdown>,
    );

    expect(getByText(PANEL_TEXT)).toBeInTheDocument();
  });

  it('renders without portal when portal=false', async () => {
    const { getByText, container } = render(
      <Dropdown content={<div>{PANEL_TEXT}</div>} portal={false}>
        <SimpleTrigger />
      </Dropdown>,
    );

    fireEvent.click(getByText('Toggle'));

    await waitFor(() => {
      expect(container.querySelector('.om-trigger-panel')).not.toBeNull();
    });
  });
});
