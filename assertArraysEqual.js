const assertArrayEqual = function(arr1, arr2) {
  const checkmark = String.fromCodePoint(0x2705)
  const nomark = String.fromCodePoint(0x274C);
  if (arr1.length !== arr2.length) {
    console.log(`${nomark} ${arr1} and ${arr2} are not the same.`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`${nomark} ${arr1} and ${arr2} are not the same.`);
      return;
    }
  }
  console.log(`${checkmark} ${arr1} and ${arr2} are the same.`);
  return;
};
module.exports = assertArrayEqual;
