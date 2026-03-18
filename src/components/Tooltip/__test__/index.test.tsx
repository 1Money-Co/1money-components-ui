import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tooltip } from '../index';

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

describe('Tooltip', () => {
  it('renders correctly', () => {
    const wrapper = render(<Tooltip id="test-tooltip" body="Test tooltip" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with title', () => {
    const wrapper = render(<Tooltip id="test-title" title="Title" body="Body text" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without arrow', () => {
    const wrapper = render(<Tooltip id="test-no-arrow" body="No arrow" arrow={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with bottom placement', () => {
    const wrapper = render(<Tooltip id="test-bottom" body="Bottom" placement="bottom" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders in controlled open state', () => {
    const wrapper = render(<Tooltip id="test-controlled" body="Controlled" open />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders in controlled closed state', () => {
    const wrapper = render(
      <Tooltip id="test-controlled-closed" body="Controlled closed" open={false} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
