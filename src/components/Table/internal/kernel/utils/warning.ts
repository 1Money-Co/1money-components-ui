let warned: Record<string, boolean> = {};

export function warning(valid: boolean, message: string) {
  if (!valid && typeof console !== 'undefined') {
    console.error(`Warning: ${message}`);
  }
}

export function warningOnce(valid: boolean, message: string) {
  if (!valid && !warned[message]) {
    warning(false, message);
    warned[message] = true;
  }
}

export function resetWarned() {
  warned = {};
}

export default warning;
