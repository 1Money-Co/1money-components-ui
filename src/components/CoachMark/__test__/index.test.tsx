import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CoachMark } from '../index';

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

const STEPS = [
  { heading: 'Welcome', body: 'This is the first step' },
  { heading: 'Second', body: 'This is the second step' },
  { heading: 'Done', body: 'All set' },
];

describe('CoachMark', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <CoachMark steps={STEPS} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with icon', () => {
    const wrapper = render(
      <CoachMark
        steps={[
          { heading: 'Title', body: 'Description', icon: <span>Icon</span> },
          ...STEPS.slice(1),
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders last step with finish button', () => {
    const wrapper = render(
      <CoachMark steps={STEPS} activeStep={2} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without dismiss button', () => {
    const wrapper = render(
      <CoachMark
        steps={STEPS.slice(0, 2)}
        dismissible={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
