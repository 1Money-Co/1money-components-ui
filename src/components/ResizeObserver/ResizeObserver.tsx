import * as React from 'react';
import type { ResizeObserverProps } from './interface';
import { toArray } from './utils/reactUtil';
import SingleObserver from './SingleObserver';
import { Collection } from './Collection';

const INTERNAL_PREFIX_KEY = 'om-react-ui-observer-key';

function ResizeObserver(props: ResizeObserverProps, ref: React.Ref<HTMLElement>) {
  const { children } = props;
  const childNodes = typeof children === 'function' ? [children] : toArray(children);

  // eslint-disable-next-line no-undef
  if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
    if (childNodes.length > 1) {
      console.warn(
        '[ResizeObserver] Find more than one child node with `children`. Please use ResizeObserver.Collection instead.',
      );
    } else if (childNodes.length === 0) {
      console.warn('[ResizeObserver] `children` is empty. Nothing is in observe.');
    }
  }

  return childNodes.map((child, index) => {
    const key = (child as React.ReactElement)?.key || `${INTERNAL_PREFIX_KEY}-${index}`;
    return (
      <SingleObserver {...props} key={key} ref={index === 0 ? ref : undefined}>
        {child as any}
      </SingleObserver>
    );
  }) as any as React.ReactElement;
}

const RefResizeObserver = React.forwardRef(ResizeObserver) as React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ResizeObserverProps> & React.RefAttributes<any>
> & {
  Collection: typeof Collection;
};

RefResizeObserver.displayName = 'ResizeObserver';
RefResizeObserver.Collection = Collection;

export default RefResizeObserver;
