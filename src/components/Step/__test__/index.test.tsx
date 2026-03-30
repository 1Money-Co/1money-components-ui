import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  STEP_CUSTOM_COPY,
  STEP_CUSTOM_INDICATOR_TEST_ID,
  STEP_ITEM_KEYS,
  STEP_RECOMMENDED_TAG_COLOR,
  STEP_SAMPLE_COPY,
  STEP_STATUS,
  STEP_TEST_ERROR_MESSAGES,
} from '../constants';
import { Step } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  const errorMessage = typeof message === 'string' ? message : String(message);
  if (STEP_TEST_ERROR_MESSAGES.some(expectedMessage => errorMessage.includes(expectedMessage))) {
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

describe('Step', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Step
        items={[
          {
            key: STEP_ITEM_KEYS.one,
            title: STEP_SAMPLE_COPY.title,
            description: STEP_SAMPLE_COPY.description,
            status: STEP_STATUS.completed,
            tag: STEP_SAMPLE_COPY.tag,
          },
          {
            key: STEP_ITEM_KEYS.two,
            title: STEP_SAMPLE_COPY.title,
            description: STEP_SAMPLE_COPY.description,
            status: STEP_STATUS.default,
            tag: STEP_SAMPLE_COPY.tag,
          },
          {
            key: STEP_ITEM_KEYS.three,
            title: STEP_SAMPLE_COPY.title,
            description: STEP_SAMPLE_COPY.description,
            status: STEP_STATUS.error,
            tag: STEP_SAMPLE_COPY.tag,
          },
        ]}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders custom indicators and tag config', () => {
    render(
      <Step
        items={[
          {
            key: STEP_ITEM_KEYS.one,
            title: STEP_CUSTOM_COPY.review,
            description: STEP_CUSTOM_COPY.pendingSignerConfirmation,
            indicator: <span data-testid={STEP_CUSTOM_INDICATOR_TEST_ID}>A</span>,
            tag: {
              label: STEP_CUSTOM_COPY.actionRequired,
              color: STEP_RECOMMENDED_TAG_COLOR,
            },
          },
        ]}
      />,
    );

    expect(screen.getByTestId(STEP_CUSTOM_INDICATOR_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(STEP_CUSTOM_COPY.actionRequired)).toBeInTheDocument();
  });
});
