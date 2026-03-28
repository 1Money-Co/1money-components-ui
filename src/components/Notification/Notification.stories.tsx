import { useEffect } from 'react';

import type { CSSProperties, FC, ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';
import { NOTIFICATION_PLACEMENTS, NOTIFICATION_STATUSES, notification } from './index';

import './style';

const getStatusLabel = (status: string) => `${status.charAt(0).toUpperCase()}${status.slice(1)}`;

const WRAPPER_STYLE: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'flex-start',
};

const ACTIONS_STYLE: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
};

const DESCRIPTION_STYLE: CSSProperties = {
  maxWidth: 640,
  margin: 0,
  color: '#6b7280',
  fontSize: 14,
  lineHeight: '20px',
};

const meta: Meta = {
  title: 'Components/Notification',
  parameters: {
    docs: {
      description: {
        component: 'Notification is exposed as a static API via `notification.open/info/success/warning/error`, and the rendered surface keeps the Figma `Drop Shadow(Beta)/200` treatment.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

interface NotificationStoryLayoutProps {
  description: string;
  children: ReactNode;
}

const NotificationStoryLayout: FC<NotificationStoryLayoutProps> = ({ description, children }) => {
  useEffect(() => () => {
    notification.destroy();
    notification.config({
      placement: 'topRight',
      duration: 4.5,
      maxCount: Number.POSITIVE_INFINITY,
    });
  }, []);

  return (
    <div style={WRAPPER_STYLE}>
      <p style={DESCRIPTION_STYLE}>{description}</p>
      <div style={ACTIONS_STYLE}>{children}</div>
    </div>
  );
};

export const StatusMethods: Story = {
  render: () => (
    <NotificationStoryLayout description="Trigger each status helper and the generic open method.">
      {NOTIFICATION_STATUSES.map(status => (
        <Button
          key={status}
          onClick={() => {
            notification[status]({
              title: `${getStatusLabel(status)} notification`,
              body: 'Triggered through the public static notification API.',
            });
          }}
        >
          {`Open ${status}`}
        </Button>
      ))}
      <Button
        color="grey"
        onClick={() => {
          notification.open({
            status: 'success',
            title: 'Open with explicit status',
            body: 'Use notification.open when you want full control over the config.',
          });
        }}
      >
        Open generic
      </Button>
      <Button
        color="grey"
        onClick={() => {
          notification.destroy();
        }}
      >
        Destroy all
      </Button>
    </NotificationStoryLayout>
  ),
  tags: ['!autodocs', 'dev'],
};

export const PlacementAndConfig: Story = {
  render: () => (
    <NotificationStoryLayout description="Preview each placement, then compare global defaults with per-call overrides.">
      {NOTIFICATION_PLACEMENTS.map(placement => (
        <Button
          key={placement}
          onClick={() => {
            notification.open({
              title: placement,
              body: `Rendered in the ${placement} stack.`,
              placement,
            });
          }}
        >
          {placement}
        </Button>
      ))}
      <Button
        color="grey"
        onClick={() => {
          notification.config({
            placement: 'bottomRight',
            duration: 6,
            maxCount: 3,
          });

          notification.open({
            title: 'Uses global defaults',
            body: 'This notification uses the shared config set by notification.config.',
          });
        }}
      >
        Apply global config
      </Button>
      <Button
        color="grey"
        onClick={() => {
          notification.config({
            placement: 'bottomRight',
            duration: 6,
            maxCount: 3,
          });

          notification.open({
            title: 'Override placement',
            body: 'This call overrides the global placement and duration.',
            placement: 'topLeft',
            duration: 0,
          });
        }}
      >
        Override global config
      </Button>
      <Button
        color="grey"
        onClick={() => {
          notification.config({
            placement: 'topRight',
            duration: 4.5,
            maxCount: Number.POSITIVE_INFINITY,
          });
          notification.destroy();
        }}
      >
        Reset config
      </Button>
    </NotificationStoryLayout>
  ),
  tags: ['!autodocs', 'dev'],
};

export const LinksAndCallbacks: Story = {
  render: () => (
    <NotificationStoryLayout description="Show action buttons, anchor links, and removal callbacks.">
      <Button
        onClick={() => {
          notification.open({
            title: 'Action link',
            body: 'This example renders a button-style action.',
            link: {
              label: 'Run action',
              onClick: () => {
                notification.success({
                  title: 'Action executed',
                  body: 'The link callback can trigger another notification.',
                });
              },
            },
          });
        }}
      >
        Open action link
      </Button>
      <Button
        onClick={() => {
          notification.open({
            title: 'External docs',
            body: 'This example renders a normal anchor link.',
            link: {
              label: 'Open docs',
              href: 'https://example.com/docs',
              target: '_blank',
            },
          });
        }}
      >
        Open href link
      </Button>
      <Button
        color="grey"
        onClick={() => {
          notification.open({
            title: 'Closes in 2 seconds',
            body: 'The onClose callback fires after the removal animation finishes.',
            duration: 2,
            onClose: () => {
              notification.info({
                title: 'onClose fired',
                body: 'The previous notification has been fully removed.',
              });
            },
          });
        }}
      >
        Open with onClose
      </Button>
      <Button
        color="grey"
        onClick={() => {
          notification.destroy();
        }}
      >
        Destroy all
      </Button>
    </NotificationStoryLayout>
  ),
  tags: ['!autodocs', 'dev'],
};

export const PersistentAndDestroy: Story = {
  render: () => {
    const sharedKey = 'storybook-notification-shared';

    return (
      <NotificationStoryLayout description="Keep a notification open, update it in place, or remove it by key.">
        <Button
          onClick={() => {
            notification.open({
              key: sharedKey,
              title: 'Sync in progress',
              body: 'The same key updates the existing notification instead of stacking.',
              duration: 0,
            });
          }}
        >
          Open persistent
        </Button>
        <Button
          onClick={() => {
            notification.success({
              key: sharedKey,
              title: 'Sync complete',
              body: 'The existing notification was updated in place.',
            });
          }}
        >
          Update persistent
        </Button>
        <Button
          color="grey"
          onClick={() => {
            notification.destroy(sharedKey);
          }}
        >
          Destroy by key
        </Button>
        <Button
          color="grey"
          onClick={() => {
            const generatedKey = notification.open({
              title: 'Generated key example',
              body: 'This notification returns a key for later updates.',
              duration: 0,
            });

            window.setTimeout(() => {
              notification.success({
                key: generatedKey,
                title: 'Generated key updated',
                body: 'Updated using the key returned by notification.open.',
              });
            }, 800);
          }}
        >
          Open with returned key
        </Button>
        <Button
          color="grey"
          onClick={() => {
            notification.destroy();
          }}
        >
          Destroy all
        </Button>
      </NotificationStoryLayout>
    );
  },
  tags: ['!autodocs', 'dev'],
};

export const AppearanceOverrides: Story = {
  render: () => (
    <NotificationStoryLayout description="Demonstrate custom icon rendering and visibility overrides.">
      <Button
        onClick={() => {
          notification.open({
            title: 'Manual review',
            body: 'This notification uses a custom icon element.',
            icon: <Icons name="notificationWarning" size={32} />,
          });
        }}
      >
        Open custom icon
      </Button>
      <Button
        onClick={() => {
          notification.open({
            title: 'No icon notification',
            body: 'This example hides the leading icon.',
            showIcon: false,
          });
        }}
      >
        Hide icon
      </Button>
      <Button
        onClick={() => {
          notification.open({
            title: 'Not closable',
            body: 'This example removes the close button.',
            closable: false,
            duration: 0,
          });
        }}
      >
        Hide close button
      </Button>
      <Button
        color="grey"
        onClick={() => {
          notification.destroy();
        }}
      >
        Destroy all
      </Button>
    </NotificationStoryLayout>
  ),
  tags: ['!autodocs', 'dev'],
};
