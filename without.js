const without = function (arr1, arrayRemove) {
  const res = []
  for (element of arr1) {
    for(let i = 0; i < arrayRemove.length; i++) {
      if (element !== arrayRemove[i] && (i === arrayRemove.length - 1)){
        res.push(element);
      }
      else if (element !== arrayRemove[i]) {
        continue;
      }
      else break;
    }
  }
  return res;
}
module.exports = without;
// console.log(without([1,3,4,5],[5,3,4]))