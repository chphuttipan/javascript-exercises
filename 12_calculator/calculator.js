const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const total = array.reduce((num1, num2) => num1 + num2, 0);
  return total;
};

const multiply = function(array) {
  const total = array.reduce((num1, num2) => num1 * num2, 1);
  return total;
};

const power = function(num1, num2) {
	const total = Math.pow(num1, num2);
  return total;
};

const factorial = function(a) {
	let num = 1;
  for (let i = a; i > 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
