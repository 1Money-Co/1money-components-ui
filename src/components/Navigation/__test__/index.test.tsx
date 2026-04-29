import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation, Nav, NavigationStepper } from '../index';
import type { NavigationStepperStep } from '../interface';

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

const MOCK_NAV_ITEMS = [
  {
    key: 'group1',
    label: 'GROUP ONE',
    icon: 'home' as const,
    children: [
      { key: 'item1', label: 'Item 1' },
      {
        key: 'item2',
        label: 'Item 2',
        defaultOpen: true,
        children: [
          { key: 'sub1', label: 'Sub Item 1' },
          { key: 'sub2', label: 'Sub Item 2' },
        ],
      },
    ],
  },
];

describe('Nav', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Nav items={MOCK_NAV_ITEMS} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with active item', () => {
    const items = [
      {
        key: 'group',
        label: 'GROUP',
        children: [
          { key: 'item1', label: 'Item 1', active: true },
          { key: 'item2', label: 'Item 2' },
        ],
      },
    ];
    const wrapper = render(
      <Nav items={items} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders deep nesting', () => {
    const items = [
      {
        key: 'group',
        label: 'GROUP',
        children: [
          {
            key: 'l1',
            label: 'Level 1',
            defaultOpen: true,
            children: [
              {
                key: 'l2',
                label: 'Level 2',
                defaultOpen: true,
                children: [
                  { key: 'l3', label: 'Level 3' },
                ],
              },
            ],
          },
        ],
      },
    ];
    const wrapper = render(
      <Nav items={items} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

const MOCK_STEPPER_STEPS: NavigationStepperStep[] = [
  { key: '1', label: '1. Business Overview', status: 'done' },
  { key: '2', label: '2. Business Address', status: 'active' },
  { key: '3', label: '3. Tax Information', status: 'done-active' },
  { key: '4', label: '4. Business Details', status: 'todo' },
  { key: '5', label: '5. Compliance Details', status: 'todo', disabled: true },
];

describe('NavigationStepper', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <NavigationStepper steps={MOCK_STEPPER_STEPS} footer={<span>Auto-saved</span>} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without footer', () => {
    const wrapper = render(
      <NavigationStepper
        steps={[
          { key: '1', label: 'Identity', status: 'done' },
          { key: '2', label: 'Verification', status: 'active' },
          { key: '3', label: 'Review', status: 'todo' },
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('invokes onClick for enabled steps and skips disabled ones', () => {
    const onStepClick = jest.fn();
    const onLogoClick = jest.fn();
    const steps: NavigationStepperStep[] = [
      { key: '1', label: 'Step 1', status: 'done', onClick: onStepClick },
      { key: '2', label: 'Step 2', status: 'todo', disabled: true, onClick: onStepClick },
    ];
    const { getByText, getByLabelText } = render(
      <NavigationStepper steps={steps} onLogoClick={onLogoClick} />
    );

    fireEvent.click(getByText('Step 1'));
    expect(onStepClick).toHaveBeenCalledTimes(1);
    expect(onStepClick).toHaveBeenCalledWith(steps[0]);

    fireEvent.click(getByText('Step 2'));
    expect(onStepClick).toHaveBeenCalledTimes(1);

    fireEvent.click(getByLabelText('Sidebar logo'));
    expect(onLogoClick).toHaveBeenCalledTimes(1);
  });
});
