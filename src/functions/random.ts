/**
 * @description Generates a random number from two bounds
 * @param min The minimum bound
 * @param max The maximum bound
 */
export default function random(min: number, max: number): number {
  if (Number.isNaN(min) || !Number.isFinite(min)) {
    throw new TypeError(`The minimum bound, ${min}, is invalid`);
  }
  if (Number.isNaN(max) || !Number.isFinite(max)) {
    throw new TypeError(`The maximum bound, ${max}, is invalid`);
  }
  if (max === min) return min;
  if (min > max) {
    throw new RangeError(`The minimum bound, ${min}, is greater than the maximum bound ${max}.`);
  }
  return Math.random() * (max - min) + min; 
}
