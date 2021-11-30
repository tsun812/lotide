const tail = function (array1) {
  const res = [];
  for(let i = 1; i < array1.length; i++) {
    res.push(array1[i]);
  }
  return res;
}
module.exports = tail;

