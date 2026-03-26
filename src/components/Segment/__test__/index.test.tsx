import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Segment } from '../index';

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

const defaultItems = [
  { value: 'tab1', label: 'Tab 1' },
  { value: 'tab2', label: 'Tab 2' },
  { value: 'tab3', label: 'Tab 3' },
];

describe('Segment', () => {
  it('renders correctly', () => {
    const wrapper = render(<Segment items={defaultItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with default value', () => {
    const wrapper = render(<Segment defaultValue="tab2" items={defaultItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with disabled item', () => {
    const items = [
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2', disabled: true },
    ];
    const wrapper = render(<Segment items={items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
