const ftoc = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9)

  if (celsius % 1 != 0) {
    return Number(celsius.toFixed(1));
  } else {
return celsius;
  }
  
};

// celsius to fahrenheit
const ctof = function(celsius) {
  fahrenheit = (celsius * (9/5)) + 32
  return fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
