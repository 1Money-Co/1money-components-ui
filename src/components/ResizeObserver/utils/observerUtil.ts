export type ResizeListener = (element: Element) => void;

// =============================== Const ===============================
const elementListeners = new Map<Element, Set<ResizeListener>>();

function onResize(entities: ResizeObserverEntry[]) {
  entities.forEach((entity) => {
    const { target } = entity;
    elementListeners.get(target)?.forEach((listener) => listener(target));
  });
}

// Delay create ResizeObserver since it's not supported in server side
let observer: ResizeObserver;

function ensureResizeObserver() {
  if (!observer) {
    observer = new ResizeObserver(onResize);
  }
  return observer;
}

/** @private Test only for mock trigger resize event */
export const _rs = onResize;

// ============================== Observe ==============================
export function observe(element: Element, callback: ResizeListener) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    ensureResizeObserver().observe(element);
  }

  elementListeners.get(element)!.add(callback);
}

export function unobserve(element: Element, callback: ResizeListener) {
  if (elementListeners.has(element)) {
    elementListeners.get(element)!.delete(callback);
    if (!elementListeners.get(element)!.size) {
      ensureResizeObserver().unobserve(element);
      elementListeners.delete(element);
    }
  }
}
