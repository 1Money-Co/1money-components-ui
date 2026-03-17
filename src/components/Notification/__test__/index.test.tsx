import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Notification } from '../index';

const originalConsoleError = console.error;
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

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('NotificationBeta', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Notification title="Test title" body="Test body" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all status variants', () => {
    const statuses = ['info', 'success', 'warning', 'error'] as const;
    statuses.forEach(status => {
      const { container } = render(
        <Notification status={status} title={status} />
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  it('handles close button click', async () => {
    const onClose = jest.fn();
    render(
      <Notification title="Closable" closable onClose={onClose} />
    );
    const user = userEvent.setup();
    await user.click(screen.getByLabelText('Close notification'));
    expect(onClose).toHaveBeenCalled();
  });

  it('handles action link click', async () => {
    const onLink = jest.fn();
    render(
      <Notification
        title="With link"
        link={{ label: 'Click me', onClick: onLink }}
      />
    );
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByText('Click me'));
    expect(onLink).toHaveBeenCalled();
  });

  it('renders href links as anchors', () => {
    render(
      <Notification
        title="With href"
        link={{ label: 'Open docs', href: 'https://example.com/docs', target: '_blank' }}
      />
    );

    expect(screen.getByRole('link', { name: 'Open docs' })).toHaveAttribute(
      'href',
      'https://example.com/docs'
    );
  });

  it('hides icon when showIcon is false', () => {
    const { container } = render(
      <Notification title="No icon" showIcon={false} />
    );
    expect(container.querySelector('.om-react-ui-notification-beta-icon')).toBeNull();
  });

  it('hides close button when closable is false', () => {
    render(
      <Notification title="Not closable" closable={false} />
    );
    expect(screen.queryByLabelText('Close notification')).toBeNull();
  });
});
