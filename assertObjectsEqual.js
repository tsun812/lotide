const eqObjects = require ('./eqObjects')
const assertObjectsEqual = function (obj1, obj2) {
  const checkmark = String.fromCodePoint(0x2705)
  const nomark = String.fromCodePoint(0x274C)
  if (eqObjects(obj1, obj2) === true) {
    return `${checkmark} ${obj1} and ${obj2} are the same.`
  } else {
    return `${nomark} ${obj1} and ${obj2} are not the same.`
  }
}
module.exports = assertObjectsEqual;