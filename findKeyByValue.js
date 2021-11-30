const findKeyByV = function(obj1, key1){
  for(const element in obj1){
    if(obj1[element] === key1) {
      return element
    }
  }
}
module.exports = findKeyByV;
console.log(findKeyByV({weight: 50, height: 170, as: 170}, 170))