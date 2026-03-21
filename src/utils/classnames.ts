import classNames from 'classnames';

export const classnames = (namespace: string) => (block?: string) => (
  modifier?: string,
  className?: string
) => {
  const base = block ? `${namespace}-${block}` : namespace;
  return classNames(
    {
      [base]: !!base && !modifier,
      [`${base}-${modifier}`]: !!base && !!modifier,
    },
    className
  );
};

export const joinCls = (...classes: (string | number | null | undefined | boolean)[]) => classes.filter(Boolean).join(' ');

export default classnames('om-react-ui');
