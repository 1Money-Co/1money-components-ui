import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from '../index';

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

const ITEMS = [
  { key: '1', title: 'Item 1', children: 'Content 1' },
  { key: '2', title: 'Item 2', children: 'Content 2' },
  { key: '3', title: 'Item 3', children: 'Content 3' },
];

describe('Accordion', () => {
  it('renders correctly', () => {
    const wrapper = render(<Accordion items={ITEMS} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with active keys', () => {
    const wrapper = render(
      <Accordion items={ITEMS} defaultActiveKeys={['1']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders stroke variant', () => {
    const wrapper = render(
      <Accordion items={ITEMS} variant="stroke" defaultActiveKeys={['1']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small size', () => {
    const wrapper = render(
      <Accordion items={ITEMS} size="small" defaultActiveKeys={['1']} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
