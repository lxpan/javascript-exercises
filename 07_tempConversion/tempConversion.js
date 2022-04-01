const ftoc = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9)
  // if not whole number, round to 1 dp
  if (celsius % 1 != 0) {
    return Number(celsius.toFixed(1));
  } else {
return celsius;
  }
  
};

// celsius to fahrenheit
const ctof = function(celsius) {
  fahrenheit = (celsius * (9/5)) + 32
  // if not whole number, round to 1 dp
  if (fahrenheit % 1 != 0) {
    return Number(fahrenheit.toFixed(1));
  } else {
    return fahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
