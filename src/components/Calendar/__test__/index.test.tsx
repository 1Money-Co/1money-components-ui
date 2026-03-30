import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calendar } from '../index';

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

describe('Calendar', () => {
  it('renders correctly', () => {
    const wrapper = render(<Calendar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with label', () => {
    const wrapper = render(
      <Calendar label="Select Date" required />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with message', () => {
    const wrapper = render(
      <Calendar message="Please select a date" invalid />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
