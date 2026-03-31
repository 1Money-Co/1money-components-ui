import * as React from 'react';
import type { ResizeObserverProps } from './interface';
import { toArray } from './utils/reactUtil';
import SingleObserver from './SingleObserver';
import { Collection } from './Collection';

const INTERNAL_PREFIX_KEY = 'om-observer-key';

function ResizeObserver(props: ResizeObserverProps, ref: React.Ref<HTMLElement>) {
  const { children } = props;
  const childNodes = typeof children === 'function' ? [children] : toArray(children);

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
