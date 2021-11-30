const middle = function(input1) {
  if(input1.length === 1 || input1.length === 2 || input1.length === 0){
    return []
  }
  const indexRes = Math.floor(input1.length / 2)
  if(input1.length % 2 === 0){
    return [input1[indexRes - 1], input1[indexRes]]
  }
  return [input1[indexRes]]
}
module.exports = middle;

