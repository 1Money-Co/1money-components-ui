// SSR-safe requestAnimationFrame / cancelAnimationFrame
let _raf = (callback: FrameRequestCallback) => +setTimeout(callback, 16);
let _caf = (num: number) => clearTimeout(num);

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  _raf = (callback: FrameRequestCallback) => window.requestAnimationFrame(callback);
  _caf = (handle: number) => window.cancelAnimationFrame(handle);
}

let id = 0;
const ids = new Map<number, number>();

/**
 * Schedule a callback after `frames` animation frames (default 1).
 * Returns a cancellable id.
 */
function raf(callback: () => void, frames = 1): number {
  const myId = ++id;

  function runFrames(remaining: number) {
    if (remaining <= 0) {
      ids.delete(myId);
      callback();
    } else {
      const rafId = _raf(() => {
        runFrames(remaining - 1);
      });
      ids.set(myId, rafId);
    }
  }

  runFrames(frames);
  return myId;
}

raf.cancel = (id: number) => {
  const rafId = ids.get(id);
  if (rafId !== undefined) {
    _caf(rafId);
    ids.delete(id);
  }
};

export default raf;
