import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Alert } from '../index';

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

describe('Alert', () => {
  const closeCenterClass = 'om-component-ui-alert-close-center';
  const closeTopClass = 'om-component-ui-alert-close-top';
  const iconCenterClass = 'om-component-ui-alert-icon-center';
  const iconTopClass = 'om-component-ui-alert-icon-top';

  it('renders correctly', () => {
    const wrapper = render(
      <Alert title="Test Title" body="Test body text." />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all status variants', () => {
    const statuses = ['info', 'success', 'warning', 'error'] as const;
    statuses.forEach(status => {
      const wrapper = render(
        <Alert status={status} title={`${status} alert`} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('renders without close button when closable is false', () => {
    const wrapper = render(
      <Alert title="No close" closable={false} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('does not render the close button by default', () => {
    render(
      <Alert title="Default close state" />
    );

    expect(screen.queryByLabelText('Close alert')).not.toBeInTheDocument();
  });

  it('uses body typography when only title is present', () => {
    render(
      <Alert title="Title" />
    );

    expect(screen.getByText('Title')).toHaveClass('om-component-ui-typography-body');
    expect(screen.getByText('Title')).toHaveClass('om-component-ui-typography-body-md');
    expect(screen.getByText('Title')).toHaveClass('om-component-ui-typography-color-default-secondary');
    expect(screen.getByText('Title')).not.toHaveClass('om-component-ui-typography-title');
    expect(screen.getByText('Title')).not.toHaveClass('om-component-ui-typography-strong');
    expect(screen.getByText('Title').closest('.om-component-ui-alert')?.querySelector('.om-component-ui-alert-icon')).toHaveClass(iconCenterClass);
  });

  it('keeps the icon top aligned when title and link are both present', () => {
    render(
      <Alert
        title="Linked title"
        link={{ label: 'View details', onClick: jest.fn() }}
      />
    );

    expect(screen.getByText('Linked title')).toHaveClass('om-component-ui-typography-body');
    expect(screen.getByText('Linked title')).toHaveClass('om-component-ui-typography-body-md');
    expect(screen.getByText('Linked title')).toHaveClass('om-component-ui-typography-color-default-secondary');
    expect(screen.getByText('Linked title')).not.toHaveClass('om-component-ui-typography-title');
    expect(screen.getByText('Linked title')).not.toHaveClass('om-component-ui-typography-strong');
    expect(screen.getByText('Linked title').closest('.om-component-ui-alert')?.querySelector('.om-component-ui-alert-icon')).toHaveClass(iconTopClass);
  });

  it('uses body typography when only body is present', () => {
    render(
      <Alert body="Body only text." />
    );

    expect(screen.getByText('Body only text.')).toHaveClass('om-component-ui-typography-body');
    expect(screen.getByText('Body only text.')).toHaveClass('om-component-ui-typography-body-md');
    expect(screen.getByText('Body only text.')).toHaveClass('om-component-ui-typography-color-default-secondary');
    expect(screen.getByText('Body only text.')).not.toHaveClass('om-component-ui-typography-title');
    expect(screen.getByText('Body only text.')).not.toHaveClass('om-component-ui-typography-strong');
    expect(screen.getByText('Body only text.').closest('.om-component-ui-alert')?.querySelector('.om-component-ui-alert-icon')).toHaveClass(iconCenterClass);
  });

  it('keeps distinct title typography when title and body are both present', () => {
    render(
      <Alert title="Title" body="Body text." />
    );

    expect(screen.getByText('Title')).toHaveClass('om-component-ui-typography-title');
    expect(screen.getByText('Title')).toHaveClass('om-component-ui-typography-title-sm');
    expect(screen.getByText('Body text.')).toHaveClass('om-component-ui-typography-body');
    expect(screen.getByText('Body text.')).toHaveClass('om-component-ui-typography-body-md');
    expect(screen.getByText('Title').closest('.om-component-ui-alert')?.querySelector('.om-component-ui-alert-content')).toHaveClass('om-component-ui-alert-content-title-body');
  });

  it('keeps the icon top aligned when link is the only content section', () => {
    render(
      <Alert link={{ label: 'Only link', onClick: jest.fn() }} />
    );

    expect(screen.getByText('Only link').closest('.om-component-ui-alert')?.querySelector('.om-component-ui-alert-icon')).toHaveClass(iconTopClass);
  });

  it('centers the close button when exactly one text section is rendered', () => {
    render(
      <Alert title="Title only" closable />
    );

    expect(screen.getByLabelText('Close alert')).toHaveClass(closeCenterClass);
  });

  it('centers the close button when link is the only content section', () => {
    render(
      <Alert link={{ label: 'Only link', onClick: jest.fn() }} closable />
    );

    expect(screen.getByLabelText('Close alert')).toHaveClass(closeCenterClass);
  });

  it('top aligns the close button when multiple content sections are rendered', () => {
    render(
      <Alert title="Title" body="Body text." closable />
    );

    expect(screen.getByLabelText('Close alert')).toHaveClass(closeTopClass);
  });

  it('renders action and handles action/close clicks when both are present', async () => {
    const onAction = jest.fn();
    const onClose = jest.fn();

    render(
      <Alert
        title="Action alert"
        body="Body text."
        action={<button type="button" onClick={onAction}>Take action</button>}
        closable
        onClose={onClose}
      />
    );

    const user = userEvent.setup();

    await user.click(screen.getByText('Take action'));
    await user.click(screen.getByLabelText('Close alert'));

    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
