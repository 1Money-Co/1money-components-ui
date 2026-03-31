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

describe('CoachMark', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <CoachMark
        heading="Welcome"
        body="This is the first step"
        steps={3}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with icon', () => {
    const wrapper = render(
      <CoachMark
        heading="Title"
        body="Description"
        steps={4}
        icon={<span>Icon</span>}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders last step with finish button', () => {
    const wrapper = render(
      <CoachMark
        heading="Done"
        body="All set"
        steps={3}
        activeStep={2}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without dismiss button', () => {
    const wrapper = render(
      <CoachMark
        heading="Title"
        steps={2}
        dismissible={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
