const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	const _sum = numbers.reduce((total, value) => {
    return total + value;
  }, 0);
  return _sum;
};

const multiply = function(numbers) {
  const result = numbers.reduce((product, value) => {
    return product * value;
  })
  return result;
};

// const power = function(value, power) {
// 	return 4**3;
// };

const power = function(value, power) {
  product = value;
	for(let i = 1; i < power; i++) {
    product = product * value;
  }
  return product;
};

// const factorial = function(n) {
//   let product = 1;
//   for(let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// };

function factorial(n) {
  if(n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// f(3) = 3 * 2 = 6
// f(3) = 3 * f(2)=[2]
// f(2) = 2 * f(1)=[1]
// f(1) = 1 * f(0)=[1]
// f(0) = 1

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
