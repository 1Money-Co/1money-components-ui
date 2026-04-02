type ScrollBarSize = { width: number; height: number };

let cached: ScrollBarSize | undefined;

function measureScrollbarSize(): ScrollBarSize {
  const measureEle = document.createElement('div');
  const measureStyle = measureEle.style;
  measureStyle.position = 'absolute';
  measureStyle.left = '0';
  measureStyle.top = '0';
  measureStyle.width = '100px';
  measureStyle.height = '100px';
  measureStyle.overflow = 'scroll';

  document.body.appendChild(measureEle);

  const scrollWidth = measureEle.offsetWidth - measureEle.clientWidth;
  const scrollHeight = measureEle.offsetHeight - measureEle.clientHeight;

  document.body.removeChild(measureEle);

  return { width: scrollWidth, height: scrollHeight };
}

export default function getScrollBarSize(fresh?: boolean): number {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    cached = measureScrollbarSize();
  }
  return cached.width;
}

export function getTargetScrollBarSize(target: HTMLElement): ScrollBarSize {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return { width: 0, height: 0 };
  }

  return measureScrollbarSize();
}
