/**
 *
 * @description Computes the geometric mean of a distribution
 * @param distribution The distribution in question
 *
 */
export default function geometricMean<T extends Iterable<number>>(distribution: T): number {
  let product: number = 1;
  let i = 0;
  for (const value of distribution) {
    if (Number.isNaN(value) || typeof value !== "number") {
      throw new TypeError(`${value} is not a number (at index ${i})`);
    }
    product *= value;
    i += 1;
  }
  if (i === 0) return 0;
  return product ** (1 / i);
}
