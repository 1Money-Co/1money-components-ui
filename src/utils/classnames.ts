import classNames from 'classnames';

export const classnames = (_prefix_: string) => (_prefix?: string) => (
  suffix?: string,
  className?: string
) => {
  let prefix = _prefix_;
  if (_prefix) prefix = _prefix_ + '-' + _prefix;
  return classNames(
    {
      [`${prefix}`]: !!prefix && !suffix,
      [`${prefix}-${suffix}`]: !!prefix && !!suffix,
    },
    className
  );
};

export const joinCls = (...classes: (string | number | null | undefined | boolean)[]) => classes.filter(Boolean).join(' ');

export default classnames('om-react-ui');
