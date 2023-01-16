/* 
   mean(distribution: number[]):number
   Computes the arithmetic mean of a distribution
*/
export const mean = (distribution = [0]) => {
  /* Check validity of the distribution and add the numbers*/
  if (distribution.length === 0) {
    throw new TypeError("The distribution must contain at least one element");
  }

  let sum = 0;
  distribution.forEach((value, index) => {
    if (typeof value !== "number") {
      throw new TypeError(`" ${value} " at index ${index} is not a number`);
    } else if (!Number.isFinite(value)) {
      throw new RangeError(
        `" ${value} " at index ${index} is ${
          Number.isNaN(value) ? NaN : "Infinite"
        }`
      );
    } 
    sum += value;
  });

  /* (If the sum of the numbers is too great) */
  if(sum >= Infinity){
    throw new RangeError("Numbers of the distribution are too great"); 
  }
  return sum / distribution.length;
};

/* 
   rand(min:number, max:number, options: {int: boolean}):number
   Generates a random number with a minimum of min and a maximum of max. 

   Options
   int : Return an integer value
*/
export const rand = (min = 0, max = 0, options = { int: false }) => {
  /* Check for the validity of the numbers */
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
        /* 
           NaN is also considered infinite, so checking it first
           avoids returning "Infinite" every time
        */
        Number.isNaN(min) || Number.isNaN(max) ? NaN : "Infinite"
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

export const pythonize = () =>{

}; 