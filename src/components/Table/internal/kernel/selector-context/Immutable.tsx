import * as React from 'react';
import { supportRef } from '@/components/ResizeObserver/utils/reactUtil';

export type CompareProps<T extends React.ComponentType<any>> = (
  prevProps: Readonly<React.ComponentProps<T>>,
  nextProps: Readonly<React.ComponentProps<T>>,
) => boolean;

/**
 * Create Immutable pair for `makeImmutable` and `responseImmutable`.
 */
export default function createImmutable() {
  const ImmutableContext = React.createContext<number | null>(null);

  /**
   * Get render update mark by `makeImmutable` root.
   */
  function useImmutableMark() {
    return React.useContext(ImmutableContext);
  }

  /**
   * Wrapped Component will be marked as Immutable.
   */
  function makeImmutable<T extends React.ComponentType<any>>(
    Component: T,
    shouldTriggerRender?: CompareProps<T>,
  ): T {
    const refAble = supportRef(Component);

    const ImmutableComponent: React.ForwardRefRenderFunction<any, any> = (props, ref) => {
      const refProps = refAble ? { ref } : {};
      const renderTimesRef = React.useRef(0);
      const prevProps = React.useRef(props);

      // If parent has the context, we do not wrap it
      const mark = useImmutableMark();
      if (mark !== null) {
        return <Component {...props} {...refProps} />;
      }

      if (!shouldTriggerRender || shouldTriggerRender(prevProps.current, props)) {
        renderTimesRef.current += 1;
      }

      prevProps.current = props;

      return (
        <ImmutableContext.Provider value={renderTimesRef.current}>
          <Component {...props} {...refProps} />
        </ImmutableContext.Provider>
      );
    };

    ImmutableComponent.displayName = `ImmutableRoot(${(Component as any).displayName || (Component as any).name})`;

    return refAble
      ? (React.forwardRef(ImmutableComponent) as unknown as T)
      : (ImmutableComponent as T);
  }

  /**
   * Wrapped Component with `React.memo`.
   * But will rerender when parent with `makeImmutable` rerender.
   */
  function responseImmutable<T extends React.ComponentType<any>>(
    Component: T,
    propsAreEqual?: CompareProps<T>,
  ): T {
    const refAble = supportRef(Component);

    const ImmutableComponent: React.ForwardRefRenderFunction<any, any> = (props, ref) => {
      const refProps = refAble ? { ref } : {};
      useImmutableMark();
      return <Component {...props} {...refProps} />;
    };

    ImmutableComponent.displayName = `ImmutableResponse(${(Component as any).displayName || (Component as any).name})`;

    const Wrapped = refAble ? React.forwardRef(ImmutableComponent) : ImmutableComponent;
    return React.memo(Wrapped as React.FC<any>, propsAreEqual as any) as unknown as T;
  }

  return {
    makeImmutable,
    responseImmutable,
    useImmutableMark,
  };
}
