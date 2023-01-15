/* random number generator */
export const rand = (min = 0, max = 0, options = { int: false }) => {
  /* Check for the validity of the number */
  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError(
      `The ${
        typeof min !== "number"
          ? "minimum"
          : typeof max !== "number"
          ? "maximum"
          : 0
      } value (${
        typeof min !== "number" ? min : typeof max !== "number" ? max : 0
      }) is not a number`
    );
  } else if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new RangeError(
      `The ${
        !Number.isFinite(min)
          ? "minimum"
          : !Number.isFinite(max)
          ? "maximum"
          : 0
      } is ${
        Number.isNaN(min) || Number.isNaN(max)
          ? "NaN"
          : Number.isFinite(min) || Number.isFinite(max)
          ? "Infinite"
          : 0
      }`
    );
  } else if (min === max) {
    throw new RangeError(
      `The minimum and maximum are both ${min}, always returning ${min}`
    );
  } else if (min > max) {
    throw new RangeError("The minimum is greater than the maximum");
  }

  /* Support for negative numbers */
  if (min < 0) {
    const deg = 10 ** Math.floor(Math.log10(-min) + 1);
    if (options.int === false) {
      return rand(deg + min, deg + max) - deg;
    } else if (options.int == true) {
      return rand(deg + min, deg + max, (options = { int: true })) - deg;
    }
  }

  return options.int === false
    ? Math.random() * (max - min) + min
    : Math.floor(Math.random() * (max - min + 1) + min);
};
