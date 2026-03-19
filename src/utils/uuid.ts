export function uuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  // Set version 4 bits and variant bits per RFC 4122
  const s3 = S4();
  const version4 = '4' + s3.substring(1); // version nibble = 4
  const s4 = S4();
  const variant = ((parseInt(s4[0], 16) & 0x3) | 0x8).toString(16) + s4.substring(1); // variant bits = 10xx

  return S4() + S4() + '-' + S4() + '-' + version4 + '-' + variant + '-' + S4() + S4() + S4();
}

export default uuid;
