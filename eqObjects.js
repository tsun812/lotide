const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const eqObjects = function (obj1, obj2) {
  if ( obj1 === obj2 ) return true;
  if ( ! ( obj1 instanceof Object ) || ! ( obj2 instanceof Object ) ) return false;
  for(property in obj2){
    if (obj2[property] instanceof Array && obj1[property] instanceof Array){
      return eqArrays(obj2[property], obj1[property])
    }
    if (obj1[property] === obj2[property] && obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) continue;
    else return false; 
  } 
  return true;
}
module.exports = eqObjects;
