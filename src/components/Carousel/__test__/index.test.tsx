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
    const wrapper = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with active index', () => {
    const wrapper = render(
      <Carousel activeIndex={1}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without indicators', () => {
    const wrapper = render(
      <Carousel showIndicators={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
