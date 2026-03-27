import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Step } from '../index';

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

describe('Step', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Step
        items={[
          {
            key: 'one',
            title: 'Text Heading',
            description: 'Body text',
            status: 'completed',
            tag: 'Tag',
          },
          {
            key: 'two',
            title: 'Text Heading',
            description: 'Body text',
            status: 'default',
            tag: 'Tag',
          },
          {
            key: 'three',
            title: 'Text Heading',
            description: 'Body text',
            status: 'error',
            tag: 'Tag',
          },
        ]}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders custom indicators and tag config', () => {
    render(
      <Step
        items={[
          {
            key: 'one',
            title: 'Review',
            description: 'Pending signer confirmation',
            indicator: <span data-testid="custom-indicator">A</span>,
            tag: {
              label: 'Action required',
              color: 'recommended',
            },
          },
        ]}
      />,
    );

    expect(screen.getByTestId('custom-indicator')).toBeInTheDocument();
    expect(screen.getByText('Action required')).toBeInTheDocument();
  });
});
