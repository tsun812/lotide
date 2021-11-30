const assertEqual = function(actual, expected) {
  // const checkmark = String.fromCodePoint(0x2705)
  // const nomark = String.fromCodePoint(0x274C)
  if (actual === expected) {
    //console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
    return true
  } else {
    //console.log(nomark + "Assertion Failed: " + actual + " !== " + expected);
    return false;
  }
};
module.exports = assertEqual;