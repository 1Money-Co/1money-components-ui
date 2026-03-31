import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from '../index';

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

describe('Carousel', () => {
  it('renders correctly', () => {
    const wrapper = render(<Carousel count={4} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with active index', () => {
    const wrapper = render(<Carousel count={3} activeIndex={1} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with zero count', () => {
    const { container } = render(<Carousel count={0} />);
    expect(container.firstChild).toBeNull();
  });
});
