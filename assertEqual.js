const assertEqual = function(actual, expected) {
  const checkmark = String.fromCodePoint(0x2705)
  const nomark = String.fromCodePoint(0x274C)
  if (actual === expected) {
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(nomark + "Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
// assertEqual(1, 2);
module.exports = assertEqual;