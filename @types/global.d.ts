declare module '*.css';

declare module '*.less';

declare module '*.scss';

declare module '*.sass';

declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  const SvgComponent: FC<SVGProps<SVGSVGElement>>;

  export default SvgComponent;
}

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';

declare module '*.gif';

declare module '*.md' {
  const content: string;
  export default content;
}

declare namespace JSX {
  interface Element {
    [elemName: string]: any;
  }
}
