/* 
  geometricMean(distribution: number[]):number 
  Computes the geometric mean of a distribution.
*/
export const geometricMean = (distribution = [0]) => {
  if (distribution.length === 0) {
    throw new TypeError("The distribution must contain at least one element");
  }

  let product = 1;
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
    product *= value;
  });

  if (product >= Infinity) {
    throw new RangeError("Numbers of the distribution are too great");
  }

  return product ** (1 / distribution.length);
};

/* 
   mean(distribution: number[]):number
   Computes the arithmetic mean of a distribution.
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
  if (sum >= Infinity) {
    throw new RangeError("Numbers of the distribution are too great");
  }
  return sum / distribution.length;
};

/* 
  matrixTranspose(matrix: any[][]): any[] 
  Performs a matrix transpose of a matrix.
*/
export const matrixTranspose = (matrix = [[0]]) => {
  if (matrix.length == 0) throw new TypeError("The matrix is empty");

  const length = matrix[0].length;
  matrix.forEach((element, index) => {
    if (element.length != length) {
      throw new TypeError(`matrix non uniform at ${index} : [${element}] `);
    }
  });

  const transposed = [];
  for (let i = 0; i < length; i++) {
    let array = [];
    for (let j = 0; j < matrix.length; j++) {
      array.push(matrix[j][i]);
    }
    transposed.push(array);
  }
  return transposed;
};

/* 
  quadraticFormula(a:number, b:number, c:number):number[]
  From the a, b, c variables, it returns the solution of a quadratic ax^2 + bx + c = 0. 
  When c > b ** 2 / (4 * a), an error is thrown because b ** 2 - 4 * a * c is negative
*/

export const quadraticFormula = (a = 0, b = 0, c = 0) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    throw new TypeError(
      `Parameter ${
        typeof a !== "number"
          ? "a"
          : typeof b !== "number"
          ? "b"
          : typeof c !== "number"
          ? "c"
          : 0
      } is not a number`
    );
  } else if (a === 0) {
    throw new RangeError("parameter a musn't be 0");
  } else if (c > b ** 2 / (4 * a)) {
    throw new RangeError(
      `b ** 2 - 4 * a * c is ${b ** 2 - 4 * a * c}, and no root of any negative number is real`
    );
  }
  return [
    ((b ** 2 - 4 * a * c) ** (1 / 2) - b) / (2 * a),
    (-b - (b ** 2 - 4 * a * c) ** (1 / 2)) / (2 * a),
  ];
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

/* 
  reverseString(string:string):string
  Takes a string and returns it's characters reversed
*/

export const reverseString = (string = "") => {
  if (!string) {
    throw new TypeError("reverseString requires a parameter");
  } else if (typeof string !== "string") {
    throw new TypeError(`${string} is not a string`);
  }
  return string.split("").reverse().join();
};
