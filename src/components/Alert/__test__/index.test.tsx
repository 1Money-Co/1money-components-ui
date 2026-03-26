import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
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
});
