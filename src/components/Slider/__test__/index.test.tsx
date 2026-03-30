import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Slider } from '../index';

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

describe('Slider', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Slider label="Price" description="Set your price" valuePrefix="$" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a value', () => {
    const wrapper = render(
      <Slider label="Price" value={40} valuePrefix="$" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled state', () => {
    const wrapper = render(
      <Slider label="Price" disabled valuePrefix="$" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
