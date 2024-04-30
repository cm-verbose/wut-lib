/**
 * 
 * @description Computes the mean of a distribution
 * @param distribution The distribution
 *
 */
export default function mean<T extends Iterable<number>>(distribution: T): number {
  let sum: number = 0;
  let i = 0;
  for (const item of distribution) {
    if(typeof item !== "number" || Number.isNaN(item)){
      throw new TypeError(`${item} is not a number (at index ${i})`); 
    }
    sum += item;
    i += 1;
  }
  if (i === 0) return 0;
  return sum / i;
}
