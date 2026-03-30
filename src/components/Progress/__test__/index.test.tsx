import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  PROGRESS_TEST_ERROR_MESSAGES,
} from '../constants';
import { Progress } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  const errorMessage = typeof message === 'string' ? message : String(message);
  if (PROGRESS_TEST_ERROR_MESSAGES.some(expectedMessage => errorMessage.includes(expectedMessage))) {
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

describe('Progress', () => {
  it('derives not-started when percent is 0 and state is omitted', () => {
    render(<Progress percent={0} />);

    expect(screen.getByTestId('progress-root')).toHaveClass('om-react-ui-progress-state-not-started');
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('derives success when percent is 100 and state is omitted', () => {
    render(<Progress percent={100} />);

    expect(screen.getByTestId('progress-root')).toHaveClass('om-react-ui-progress-state-success');
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('derives default when percent is between 1 and 99 and state is omitted', () => {
    render(<Progress percent={25} />);

    expect(screen.getByTestId('progress-root')).toHaveClass('om-react-ui-progress-state-default');
  });

  it('keeps explicit state over derived state', () => {
    render(<Progress percent={100} state="error" feedback="Failed" />);

    expect(screen.getByTestId('progress-root')).toHaveClass('om-react-ui-progress-state-error');
    expect(screen.getByText('Failed')).toBeInTheDocument();
  });

  it('clamps out-of-range percent values', () => {
    const { rerender } = render(<Progress percent={-10} />);

    expect(screen.getByTestId('progress-root')).toHaveAttribute('aria-valuenow', '0');
    expect(screen.getByTestId('progress-track')).toHaveStyle({ width: '0%' });

    rerender(<Progress percent={140} />);

    expect(screen.getByTestId('progress-root')).toHaveAttribute('aria-valuenow', '100');
    expect(screen.getByTestId('progress-track')).toHaveStyle({ width: '100%' });
  });

  it('hides info when showInfo is false', () => {
    render(<Progress percent={25} showInfo={false} />);

    expect(screen.queryByTestId('progress-info')).not.toBeInTheDocument();
    expect(screen.queryByText('25%')).not.toBeInTheDocument();
  });

  it('uses format output when provided', () => {
    render(
      <Progress
        percent={25}
        format={(percent, context) => `Loaded ${percent}% (${context.state})`}
      />,
    );

    expect(screen.getByText('Loaded 25% (default)')).toBeInTheDocument();
    expect(screen.getByTestId('progress-root')).toHaveAttribute(
      'aria-valuetext',
      'Loaded 25% (default)',
    );
  });

  it('renders feedback only for the error state', () => {
    const { rerender } = render(
      <Progress percent={25} state="error" feedback="Sync failed" />,
    );

    expect(screen.getByTestId('progress-feedback')).toBeInTheDocument();
    expect(screen.getByText('Sync failed')).toBeInTheDocument();

    rerender(<Progress percent={25} state="default" feedback="Sync failed" />);

    expect(screen.queryByTestId('progress-feedback')).not.toBeInTheDocument();
    expect(screen.queryByText('Sync failed')).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const wrapper = render(
      <Progress
        percent={25}
        color="gray"
        placement="left"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
