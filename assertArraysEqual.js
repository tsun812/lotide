const assertArrayEqual = function(arr1, arr2) {
  const checkmark = String.fromCodePoint(0x2705)
  const nomark = String.fromCodePoint(0x274C);
  if (arr1.length !== arr2.length) {
    return `${nomark} ${arr1} and ${arr2} are not the same.`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `${nomark} ${arr1} and ${arr2} are not the same.`;
    }
  }
  return `${checkmark} ${arr1} and ${arr2} are the same.`;
};
module.exports = assertArrayEqual;
