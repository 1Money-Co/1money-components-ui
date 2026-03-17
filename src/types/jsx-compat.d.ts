import type React from 'react';

declare global {
  namespace JSX {
    // `any` is intentional here: PrimeReact and other third-party libraries
    // produce elements whose type parameters are not fully constrained,
    // so narrowing to `unknown` causes widespread type errors.
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any> {
      render: () => React.ReactNode;
    }
    interface ElementAttributesProperty {
      props: Record<string, unknown>;
    }
    interface ElementChildrenAttribute {
      children: Record<string, unknown>;
    }
    interface IntrinsicAttributes extends React.Attributes {}
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}

export {};
