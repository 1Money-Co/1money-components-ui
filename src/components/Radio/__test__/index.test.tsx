import 'jsdom-global/register';
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio, RadioGroup } from '../index';
import type {
  RadioChangeEvent,
  RadioGroupProps,
  RadioOptionItem,
  RadioProps,
  RadioValueType,
} from '../interface';

const readRadioStylesSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../style/Radio.scss'), 'utf8');

// @ts-expect-error RadioGroup no longer supports the orientation prop.
const invalidRadioGroupProps: RadioGroupProps = { orientation: 'vertical' };
// @ts-expect-error Radio no longer supports the orientation prop.
const invalidRadioProps: RadioProps = { orientation: 'vertical' };
// @ts-expect-error Radio options no longer support the orientation prop.
const invalidRadioOption: RadioOptionItem = { value: 'a', orientation: 'vertical' };

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

  it('renders the cell variant with icon and tag content', () => {
    render(
      <Radio
        variant="cell"
        size="large"
        alignment="center"
        icon="language"
        tag="Tag"
        label="Global account"
        description="International settlement"
      />
    );

    expect(screen.getByText('Global account')).toBeInTheDocument();
    expect(screen.getByText('International settlement')).toBeInTheDocument();
    expect(screen.getByText('Tag')).toBeInTheDocument();
  });

  it('maps alignment="center" to the centered cell layout', () => {
    render(
      <Radio
        variant="cell"
        alignment="center"
        label="Centered"
      />
    );

    const radioRoot = screen.getByText('Centered').closest('label');

    expect(radioRoot).toHaveClass('om-component-ui-radio-cell-vertical');
    expect(radioRoot).not.toHaveClass('om-component-ui-radio-cell-horizontal');
  });

  it('uses labelPlacement="right" to place the radio dot on the right', () => {
    render(
      <Radio
        labelPlacement="right"
        label="Aligned right"
      />
    );

    const radioRoot = screen.getByText('Aligned right').closest('label');

    expect(radioRoot).toHaveClass('om-component-ui-radio-right');
  });

  it('renders custom icon nodes for unchecked medium cell options', () => {
    render(
      <Radio
        variant="cell"
        size="medium"
        alignment="left"
        icon={<span data-testid="coin-icon" />}
        label="USD1"
      />
    );

    expect(screen.getByTestId('coin-icon')).toBeInTheDocument();
  });

  it('maps cell panel backgrounds to the Figma default and checked tokens', () => {
    const stylesSource = readRadioStylesSource();

    expect(stylesSource).toContain("background-color: theme.palette(bg, 'default');");
    expect(stylesSource).toContain(
      "&-cell-input:checked + .#{theme.$prefix}-#{$component}-cell-panel {\n    background-color: theme.palette(bg, 'default-secondary');",
    );
  });

  it('uses labelPlacement="right" for the default radio layout', () => {
    render(
      <Radio labelPlacement="right" label="Right placed" />
    );

    const radioRoot = screen.getByText('Right placed').closest('label');

    expect(radioRoot).toHaveClass('om-component-ui-radio-right');
  });

  it('ignores labelPlacement for the cell variant', () => {
    render(
      <Radio variant="cell" labelPlacement="right" alignment="center" label="Cell ignores" />
    );

    const radioRoot = screen.getByText('Cell ignores').closest('label');

    expect(radioRoot).toHaveClass('om-component-ui-radio-cell-vertical');
    expect(radioRoot).not.toHaveClass('om-component-ui-radio-right');
  });

  it('keeps small horizontal cell typography aligned with the Figma beta radio spec', () => {
    const stylesSource = readRadioStylesSource();

    expect(stylesSource).toContain(
      ".#{theme.$prefix}-#{$component}-description {\n      @include theme.typography(body, md, $strong: true);",
    );
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

  it('applies direction classes to the group root', () => {
    render(
      <RadioGroup value="a" direction="horizontal">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );

    expect(screen.getByRole('radiogroup')).toHaveClass(
      'om-component-ui-radio-group-horizontal',
    );
  });

  it('prefers direction over layout when both are provided', () => {
    render(
      <RadioGroup value="a" direction="horizontal" layout="vertical">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );

    const groupRoot = screen.getByRole('radiogroup');

    expect(groupRoot).toHaveClass('om-component-ui-radio-group-horizontal');
    expect(groupRoot).not.toHaveClass('om-component-ui-radio-group-vertical');
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

  it('supports cell options mode and preserves selection updates', () => {
    const handleChange = jest.fn();

    render(
      <RadioGroup
        defaultValue="swift"
        variant="cell"
        size="large"
        alignment="left"
        direction="horizontal"
        onChange={handleChange}
        options={[
          {
            value: 'swift',
            label: 'SWIFT',
            description: 'Receive via bank rails',
          },
          {
            value: 'global',
            label: 'Global account',
            description: 'International settlement',
            icon: 'language',
          },
        ]}
      />
    );

    const swift = screen.getByRole('radio', { name: 'SWIFT' });
    const global = screen.getByRole('radio', { name: 'Global account' });

    expect(swift).toBeChecked();
    expect(global).not.toBeChecked();

    fireEvent.click(screen.getByText('International settlement'));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0]).toMatchObject({
      target: {
        value: 'global',
      },
    });
    expect(global).toBeChecked();
    expect(swift).not.toBeChecked();
  });

  it('inherits centered cell alignment from the group API', () => {
    render(
      <RadioGroup
        defaultValue="global"
        variant="cell"
        size="large"
        alignment="center"
        direction="horizontal"
        options={[
          {
            value: 'global',
            label: 'Global account',
            description: 'International settlement',
            icon: 'language',
          },
        ]}
      />
    );

    const radioRoot = screen.getByText('Global account').closest('label');

    expect(radioRoot).toHaveClass('om-component-ui-radio-cell-vertical');
    expect(radioRoot).not.toHaveClass('om-component-ui-radio-cell-horizontal');
  });

  it('inherits labelPlacement="right" from the group API for default radios', () => {
    render(
      <RadioGroup defaultValue="a" labelPlacement="right">
        <Radio value="a" label="From group" />
      </RadioGroup>
    );

    const radioRoot = screen.getByText('From group').closest('label');

    expect(radioRoot).toHaveClass('om-component-ui-radio-right');
  });

});
