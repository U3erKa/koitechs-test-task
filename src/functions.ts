/** Reduces number of digits after dot for a given number */
export function truncateNumber(number: number, digits = 1) {
  return Math.round(number * 10 ** digits) / 10 ** digits;
}

let _uniqueIdNum = 0;
/** Generates a unique ID. If `prefix` is given, the ID is appended to it */
export function uniqueId(prefix?: unknown) {
  return `${prefix?.toString() ?? ''}${++_uniqueIdNum}`;
}
