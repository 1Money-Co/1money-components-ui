import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Popconfirm } from '../index';
import { POPCONFIRM_DEMO_COPY } from '../constants';

function SimpleTrigger(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props}>
      {POPCONFIRM_DEMO_COPY.toggleText}
    </button>
  );
}

describe('Popconfirm', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Popconfirm
        defaultOpen
        portal={false}
        title={POPCONFIRM_DEMO_COPY.destructive.title}
        body={POPCONFIRM_DEMO_COPY.destructive.body}
      >
        <SimpleTrigger />
      </Popconfirm>,
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onConfirm and closes by default', async () => {
    const onConfirm = jest.fn();
    const { getByText, queryByText } = render(
      <Popconfirm
        title={POPCONFIRM_DEMO_COPY.destructive.title}
        body={POPCONFIRM_DEMO_COPY.destructive.body}
        confirmText={POPCONFIRM_DEMO_COPY.destructive.confirmText}
        onConfirm={onConfirm}
      >
        <SimpleTrigger />
      </Popconfirm>,
    );

    fireEvent.click(getByText(POPCONFIRM_DEMO_COPY.toggleText));

    await waitFor(() => {
      expect(getByText(POPCONFIRM_DEMO_COPY.destructive.title)).toBeInTheDocument();
    });

    fireEvent.click(getByText(POPCONFIRM_DEMO_COPY.destructive.confirmText));

    expect(onConfirm).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(queryByText(POPCONFIRM_DEMO_COPY.destructive.title)).toBeNull();
    });
  });

  it('keeps the panel open when onConfirm prevents the default close', async () => {
    const { getByText } = render(
      <Popconfirm
        title={POPCONFIRM_DEMO_COPY.destructive.title}
        body={POPCONFIRM_DEMO_COPY.destructive.body}
        confirmText={POPCONFIRM_DEMO_COPY.destructive.confirmText}
        onConfirm={(event) => {
          event.preventDefault();
        }}
      >
        <SimpleTrigger />
      </Popconfirm>,
    );

    fireEvent.click(getByText(POPCONFIRM_DEMO_COPY.toggleText));

    await waitFor(() => {
      expect(getByText(POPCONFIRM_DEMO_COPY.destructive.title)).toBeInTheDocument();
    });

    fireEvent.click(getByText(POPCONFIRM_DEMO_COPY.destructive.confirmText));

    await waitFor(() => {
      expect(getByText(POPCONFIRM_DEMO_COPY.destructive.title)).toBeInTheDocument();
    });
  });
});
