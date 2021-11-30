const takeUtil = function(array1, callback) {
  const res = []
  for(element of array1){
    if(!callback(element)){
      res.push(element)
    }
    else return res
  }
}
module.exports = takeUtil;
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUtil(data1, x => x < 0);
console.log(results1);
