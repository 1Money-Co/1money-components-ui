import 'jsdom-global/register';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Notification as NotificationCard } from '../Notification';
import * as notificationModule from '../index';

const SUPPRESSED_ERRORS = [
  'Could not parse CSS stylesheet',
  'findDOMNode is deprecated and will be removed',
];

let consoleErrorSpy: jest.SpyInstance;

beforeAll(() => {
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(
    (message, ...args) => {
      const text = typeof message === 'string' ? message : String(message);
      if (SUPPRESSED_ERRORS.some(pattern => text.includes(pattern))) return;
      // eslint-disable-next-line no-console
      console.warn('[forwarded console.error]', message, ...args);
    },
  );
});

afterAll(() => {
  consoleErrorSpy.mockRestore();
});

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    destroy: jest.fn(),
  })),
}));

const NOTIFICATION_MOTION_DURATION = 240;
let usingFakeTimers = false;
const { notification } = notificationModule;

const enableFakeTimers = () => {
  usingFakeTimers = true;
  jest.useFakeTimers();
};

const runNotificationAction = async (callback: () => void) => {
  await act(async () => {
    callback();
    await Promise.resolve();
    await Promise.resolve();
  });
};

describe('Notification', () => {
  it('only exposes the static api publicly', () => {
    expect(notificationModule).toHaveProperty('notification');
    expect(notificationModule).not.toHaveProperty('Notification');
  });

  afterEach(async () => {
    await runNotificationAction(() => {
      notification.destroy();
      notification.config({
        placement: 'topRight',
        duration: 4.5,
        maxCount: Number.POSITIVE_INFINITY,
      });
    });

    if (usingFakeTimers) {
      await act(async () => {
        jest.runOnlyPendingTimers();
      });
    } else {
      await act(async () => {
        await new Promise(resolve => {
          window.setTimeout(resolve, NOTIFICATION_MOTION_DURATION);
        });
      });
    }

    usingFakeTimers = false;
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    const wrapper = render(
      <NotificationCard title="Test title" body="Test body" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all status variants', () => {
    const statuses = ['info', 'success', 'warning', 'error'] as const;
    statuses.forEach(status => {
      const { container } = render(
        <NotificationCard status={status} title={status} />
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  it('handles close button click', async () => {
    const onClose = jest.fn();
    render(
      <NotificationCard title="Closable" closable onClose={onClose} />
    );
    const user = userEvent.setup();
    await user.click(screen.getByLabelText('Close notification'));
    expect(onClose).toHaveBeenCalled();
  });

  it('handles action link click', async () => {
    const onLink = jest.fn();
    render(
      <NotificationCard
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
      <NotificationCard
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
      <NotificationCard title="No icon" showIcon={false} />
    );
    expect(container.querySelector('.om-react-ui-notification-icon')).toBeNull();
  });

  it('hides close button when closable is false', () => {
    render(
      <NotificationCard title="Not closable" closable={false} />
    );
    expect(screen.queryByLabelText('Close notification')).toBeNull();
  });

  it('renders static notifications in the requested placement', async () => {
    await runNotificationAction(() => {
      notification.open({
        title: 'Placed notification',
        body: 'Rendered by the global notification API.',
        placement: 'bottomLeft',
        duration: 0,
      });
    });

    expect(screen.getByText('Placed notification')).toBeInTheDocument();
    expect(document.querySelector('.om-react-ui-notification-stack-bottomLeft')).toContainElement(
      screen.getByText('Placed notification')
    );
  });

  it('auto closes static notifications after the configured duration', async () => {
    enableFakeTimers();

    await runNotificationAction(() => {
      notification.open({
        title: 'Auto close',
        duration: 1,
      });
    });

    expect(screen.getByText('Auto close')).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText('Auto close')).toBeInTheDocument();
    expect(screen.getByText('Auto close').closest('.om-react-ui-notification-item'))
      .toHaveClass('om-react-ui-notification-item-exit');
    expect(screen.getByText('Auto close').closest('.om-react-ui-notification-item'))
      .not.toHaveClass('om-react-ui-notification-item-exit-collapse');

    await act(async () => {
      jest.advanceTimersByTime(NOTIFICATION_MOTION_DURATION);
    });

    await waitFor(() => {
      expect(screen.queryByText('Auto close')).not.toBeInTheDocument();
    });
  });

  it('updates notifications with the same key instead of stacking duplicates', async () => {
    await runNotificationAction(() => {
      notification.open({
        key: 'sync',
        title: 'Sync in progress',
        body: 'Initial body',
        duration: 0,
      });
    });

    await runNotificationAction(() => {
      notification.success({
        key: 'sync',
        title: 'Sync complete',
        body: 'Updated body',
        duration: 0,
      });
    });

    expect(screen.getByText('Sync complete')).toBeInTheDocument();
    expect(screen.queryByText('Sync in progress')).not.toBeInTheDocument();
    expect(document.querySelectorAll('.om-react-ui-notification-item')).toHaveLength(1);
  });

  it('applies maxCount per placement and removes the oldest notification', async () => {
    enableFakeTimers();

    await runNotificationAction(() => {
      notification.config({
        maxCount: 1,
        duration: 0,
      });
    });

    await runNotificationAction(() => {
      notification.open({
        title: 'First notification',
      });
    });

    await runNotificationAction(() => {
      notification.open({
        title: 'Second notification',
      });
    });

    expect(screen.getByText('First notification')).toBeInTheDocument();
    expect(screen.getByText('Second notification')).toBeInTheDocument();
    expect(screen.getByText('First notification').closest('.om-react-ui-notification-item'))
      .toHaveClass('om-react-ui-notification-item-exit');
    expect(screen.getByText('First notification').closest('.om-react-ui-notification-item'))
      .toHaveClass('om-react-ui-notification-item-exit-collapse');

    await act(async () => {
      jest.advanceTimersByTime(NOTIFICATION_MOTION_DURATION);
    });

    await waitFor(() => {
      expect(screen.queryByText('First notification')).not.toBeInTheDocument();
    });
  });

  it('allows per-call config to override global defaults', async () => {
    await runNotificationAction(() => {
      notification.config({
        placement: 'bottomRight',
        duration: 0,
      });
    });

    await runNotificationAction(() => {
      notification.open({
        title: 'Default placement',
      });
    });

    await runNotificationAction(() => {
      notification.open({
        title: 'Override placement',
        placement: 'topLeft',
      });
    });

    expect(document.querySelector('.om-react-ui-notification-stack-bottomRight')).toContainElement(
      screen.getByText('Default placement')
    );
    expect(document.querySelector('.om-react-ui-notification-stack-topLeft')).toContainElement(
      screen.getByText('Override placement')
    );
  });

  it('destroys a notification by key', async () => {
    enableFakeTimers();

    await runNotificationAction(() => {
      notification.open({
        key: 'destroy-target',
        title: 'Dismiss me',
        duration: 0,
      });
    });

    await runNotificationAction(() => {
      notification.destroy('destroy-target');
    });

    expect(screen.getByText('Dismiss me')).toBeInTheDocument();
    expect(screen.getByText('Dismiss me').closest('.om-react-ui-notification-item'))
      .toHaveClass('om-react-ui-notification-item-exit');

    await act(async () => {
      jest.advanceTimersByTime(NOTIFICATION_MOTION_DURATION);
    });

    expect(screen.queryByText('Dismiss me')).not.toBeInTheDocument();
  });
});
