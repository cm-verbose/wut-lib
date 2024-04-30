/**
 * @description Determines if a number is even.
 * @throws {TypeError} If the provided value is either (1) : not a number (2) : NaN or (3) : not an integer
 */
export default function isEven(integer: number): boolean {
  if (typeof integer !== "number" || Number.isNaN(integer)) {
    throw new TypeError(`The passed value, ${integer}, is not a number`);
  } else if (!Number.isFinite(integer)) {
    throw new TypeError(`The passed value ${integer} is infinite`);
  } else if (!Number.isInteger(integer)) {
    throw new TypeError(`The passed value ${integer} is not an integer`);
  }

  return integer % 2 === 0;
}
