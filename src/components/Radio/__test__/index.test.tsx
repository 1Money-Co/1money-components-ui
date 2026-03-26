import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio, RadioGroup } from '../index';
import type { RadioChangeEvent, RadioValueType } from '../interface';

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

describe('Radio', () => {
  it('renders label and description', () => {
    render(<Radio label="Test radio" description="Helper text" />);

    expect(screen.getByText('Test radio')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('supports standalone uncontrolled usage with event-first onChange', () => {
    const handleChange = jest.fn();

    render(
      <Radio
        label="Standalone radio"
        value="standalone"
        onChange={handleChange}
      />
    );

    const radio = screen.getByRole('radio', { name: 'Standalone radio' });

    fireEvent.click(radio);

    expect(radio).toBeChecked();
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0]).toMatchObject({
      target: {
        checked: true,
        disabled: false,
        type: 'radio',
        value: 'standalone',
      },
    });
  });

  it('supports standalone controlled usage', () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Radio
        label="Controlled radio"
        checked={false}
        value="controlled"
        onChange={handleChange}
      />
    );

    const radio = screen.getByRole('radio', { name: 'Controlled radio' });

    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(radio).not.toBeChecked();

    rerender(
      <Radio
        label="Controlled radio"
        checked
        value="controlled"
        onChange={handleChange}
      />
    );

    expect(radio).toBeChecked();
  });
});

describe('RadioGroup', () => {
  it('supports controlled group usage and preserves numeric values', () => {
    const handleChange = jest.fn();

    const Example = () => {
      const [value, setValue] = React.useState<RadioValueType>(1);

      const handleValueChange = (event: RadioChangeEvent) => {
        handleChange(event);

        if (event.target.value !== undefined) {
          setValue(event.target.value);
        }
      };

      return (
        <RadioGroup value={value} onChange={handleValueChange}>
          <Radio value={1} label="Option 1" />
          <Radio value={2} label="Option 2" />
        </RadioGroup>
      );
    };

    render(<Example />);

    const option1 = screen.getByRole('radio', { name: 'Option 1' });
    const option2 = screen.getByRole('radio', { name: 'Option 2' });

    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    fireEvent.click(option2);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0]).toMatchObject({
      target: {
        checked: true,
        type: 'radio',
        value: 2,
      },
    });
    expect(option2).toBeChecked();
    expect(option1).not.toBeChecked();
  });

  it('supports options mode and label-content clicks', () => {
    const handleChange = jest.fn();

    render(
      <RadioGroup
        defaultValue="email"
        onChange={handleChange}
        options={[
          { value: 'email', label: 'Email', description: 'Receive via email' },
          {
            value: 'sms',
            label: 'SMS',
            description: 'Receive via text message',
          },
        ]}
      />
    );

    const email = screen.getByRole('radio', { name: 'Email' });
    const sms = screen.getByRole('radio', { name: 'SMS' });

    expect(email).toBeChecked();

    fireEvent.click(screen.getByText('Receive via text message'));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0]).toMatchObject({
      target: {
        value: 'sms',
      },
    });
    expect(sms).toBeChecked();
    expect(email).not.toBeChecked();
  });

  it('applies layout classes to the group root', () => {
    render(
      <RadioGroup value="a" layout="horizontal">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );

    expect(screen.getByRole('radiogroup')).toHaveClass(
      'om-react-ui-radio-group-horizontal',
    );
  });

  it('does not emit change events when the group is disabled', () => {
    const handleChange = jest.fn();

    render(
      <RadioGroup value="a" disabled onChange={handleChange}>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );

    const optionA = screen.getByRole('radio', { name: 'Option A' });
    const optionB = screen.getByRole('radio', { name: 'Option B' });

    fireEvent.click(optionB);

    expect(handleChange).not.toHaveBeenCalled();
    expect(optionA).toBeChecked();
    expect(optionB).not.toBeChecked();
  });
});
