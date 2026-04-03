import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Skeleton } from '../index';

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

describe('Skeleton', () => {
  it('renders correctly', () => {
    const wrapper = render(<Skeleton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders circle shape', () => {
    const wrapper = render(<Skeleton shape="circle" size="4rem" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom dimensions', () => {
    const wrapper = render(<Skeleton width="10rem" height="2rem" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with size shorthand', () => {
    const wrapper = render(<Skeleton size="3rem" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with no animation', () => {
    const wrapper = render(<Skeleton animation="none" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom borderRadius', () => {
    const wrapper = render(<Skeleton borderRadius="16px" />);
    expect(wrapper).toMatchSnapshot();
  });
});
