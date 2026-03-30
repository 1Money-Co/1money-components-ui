import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation } from '../index';

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

const MOCK_ITEMS = [
  { key: 'home', label: 'Home', icon: 'home' as const },
  { key: 'settings', label: 'Settings', icon: 'settings' as const },
];

describe('Navigation', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Navigation items={MOCK_ITEMS} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with collapsed state', () => {
    const wrapper = render(
      <Navigation items={MOCK_ITEMS} collapsed />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with sub-menu items', () => {
    const items = [
      {
        key: 'menu',
        label: 'Menu',
        icon: 'home' as const,
        defaultOpen: true,
        children: [
          { key: 'sub1', label: 'Sub Item 1' },
          { key: 'sub2', label: 'Sub Item 2' },
        ],
      },
    ];
    const wrapper = render(
      <Navigation items={items} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
