import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../index';

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

describe('Input', () => {
  it('renders default input with label and errorMsg', () => {
    const wrapper = render(
      <Input
        label="Amount"
        errorMsg="Feedback"
        placeholder="Value"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with prefix and suffix', () => {
    const wrapper = render(
      <Input
        prefix={<span>USD</span>}
        suffix={<button type="button">Max</button>}
        defaultValue="100"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('updates internal value in uncontrolled mode', () => {
    const { getByRole } = render(<Input defaultValue="1" />);

    fireEvent.change(getByRole('textbox'), { target: { value: '2' } });

    expect(getByRole('textbox')).toHaveValue('2');
  });

  it('calls onChange with the next value', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input onChange={onChange} />);

    fireEvent.change(getByRole('textbox'), { target: { value: '42' } });

    expect(onChange).toHaveBeenCalledWith('42', expect.any(Object));
  });

  it('clears the value when allowClear is enabled', () => {
    const onClear = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Input defaultValue="999" allowClear onClear={onClear} />,
    );

    fireEvent.click(getByLabelText('clear input'));

    expect(getByRole('textbox')).toHaveValue('');
    expect(onClear).toHaveBeenCalled();
  });

  it('toggles password visibility', () => {
    const { getByDisplayValue, getByLabelText } = render(
      <Input.Password defaultValue="secret" />,
    );

    expect(getByDisplayValue('secret')).toHaveAttribute('type', 'password');

    fireEvent.click(getByLabelText('toggle password visibility'));

    expect(getByDisplayValue('secret')).toHaveAttribute('type', 'text');
  });

  it('calls onSearch on Enter', () => {
    const onSearch = jest.fn();
    const { getByRole } = render(
      <Input.Search defaultValue="btc" onSearch={onSearch} />,
    );

    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter', code: 'Enter' });

    expect(onSearch).toHaveBeenCalledWith('btc');
  });

  it('clears search value when allowClear is enabled', () => {
    const onClear = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Input.Search defaultValue="usdt" allowClear onClear={onClear} />,
    );

    fireEvent.click(getByLabelText('clear search'));

    expect(getByRole('textbox')).toHaveValue('');
    expect(onClear).toHaveBeenCalled();
  });

  it('renders a textarea with count', () => {
    const { getByRole, getByText } = render(
      <Input.TextArea defaultValue="hello" showCount maxLength={10} />,
    );

    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByText('5/10')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor', () => {
    const { getByRole } = render(<Input label="Email" id="email-input" />);

    const input = getByRole('textbox');
    expect(input).toHaveAttribute('id', 'email-input');
    expect(input.closest('.om-react-ui-input')?.querySelector('label')).toHaveAttribute('for', 'email-input');
  });

  it('renders errorMsg with role=alert on error', () => {
    const { getByRole } = render(<Input status="error" errorMsg="Required" />);
    expect(getByRole('alert')).toHaveTextContent('Required');
  });

  it('moves through OTP cells and calls onComplete', () => {
    const onComplete = jest.fn();
    const { getAllByRole } = render(
      <Input.OTP length={4} onComplete={onComplete} />,
    );

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[0], { target: { value: '1' } });
    fireEvent.change(inputs[1], { target: { value: '2' } });
    fireEvent.change(inputs[2], { target: { value: '3' } });
    fireEvent.change(inputs[3], { target: { value: '4' } });

    expect(onComplete).toHaveBeenCalledWith('1234');
  });

  it('distributes pasted digits across cells', () => {
    const { getAllByRole } = render(<Input.OTP length={4} />);

    const inputs = getAllByRole('textbox');

    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '5678' },
    });

    expect(inputs[0]).toHaveValue('5');
    expect(inputs[1]).toHaveValue('6');
    expect(inputs[2]).toHaveValue('7');
    expect(inputs[3]).toHaveValue('8');
  });

  it('rejects non-digit input in OTP cells', () => {
    const { getAllByRole } = render(<Input.OTP length={4} />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[0], { target: { value: 'a' } });

    expect(inputs[0]).toHaveValue('');
  });

  it('strips non-digits from pasted OTP content', () => {
    const { getAllByRole } = render(<Input.OTP length={4} />);

    const inputs = getAllByRole('textbox');

    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '1a2b' },
    });

    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('');
  });

  it('renders trade input correctly', () => {
    const wrapper = render(
      <Input.Trade
        currencySymbol="$"
        currencyUnit="USD"
        showMax
        onSwap={jest.fn()}
        exchangeText="0 USDT"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('trade input calls onMax when Max button is clicked', () => {
    const onMax = jest.fn();
    const { getByText } = render(
      <Input.Trade showMax onMax={onMax} />,
    );

    fireEvent.click(getByText('Max'));

    expect(onMax).toHaveBeenCalled();
  });

  it('trade input calls onSwap when swap button is clicked', () => {
    const onSwap = jest.fn();
    const { getByLabelText } = render(
      <Input.Trade onSwap={onSwap} exchangeText="0 USDT" />,
    );

    fireEvent.click(getByLabelText('swap currency'));

    expect(onSwap).toHaveBeenCalled();
  });

  it('trade input updates value on change', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <Input.Trade onChange={onChange} />,
    );

    fireEvent.change(getByRole('textbox'), { target: { value: '100' } });

    expect(onChange).toHaveBeenCalledWith('100', expect.any(Object));
  });
});
