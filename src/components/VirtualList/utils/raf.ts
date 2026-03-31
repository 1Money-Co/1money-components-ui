let id = 0;
const ids = new Map<number, number>();

function raf(callback: () => void, frames = 1): number {
  const myId = ++id;

  function runFrames(remaining: number) {
    if (remaining <= 0) {
      ids.delete(myId);
      callback();
    } else {
      const rafId = requestAnimationFrame(() => {
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
    cancelAnimationFrame(rafId);
    ids.delete(id);
  }
};

export default raf;
