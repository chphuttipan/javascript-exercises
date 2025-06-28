const convertToCelsius = function(degree) {
  let degreeCelsius = ((degree - 32) * 5 / 9);
  degreeCelsius = Math.round(degreeCelsius * 10) / 10;
  return degreeCelsius;
};

const convertToFahrenheit = function(degree) {
  let degreeFah = ((degree * 9 / 5) + 32);
  degreeFah = Math.round(degreeFah * 10) / 10;
  return degreeFah; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
