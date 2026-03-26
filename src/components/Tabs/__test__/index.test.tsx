import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tabs } from '../index';

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
  { key: 'tab1', label: 'Tab 1' },
  { key: 'tab2', label: 'Tab 2' },
  { key: 'tab3', label: 'Tab 3' },
];

describe('Tabs', () => {
  it('renders correctly', () => {
    const wrapper = render(<Tabs items={defaultItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with badges', () => {
    const items = [
      { key: 'tab1', label: 'Tab 1', badge: 5 },
      { key: 'tab2', label: 'Tab 2', badge: 10 },
    ];
    const wrapper = render(<Tabs items={items} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with disabled tab', () => {
    const items = [
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2', disabled: true },
    ];
    const wrapper = render(<Tabs items={items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
