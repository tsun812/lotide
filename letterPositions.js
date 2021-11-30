const countLetterPosition = function(input1) {
  const check = input1.split('')
  console.log(check)
  const res = {}
  let res1 = new Map()
  for(let i = 0; i < check.length; i++){
    if(!res1.has(check[i])){
      const position = [i]
      res1.set(check[i], position)
    }
    else{
      let positionArray = res1.get(check[i])
      positionArray.push(i)
      res1.set(check[i],positionArray)
      //res1.set(character, inc++)
    }
  }
  return Object.fromEntries(res1)
}
module.exports = countLetterPosition;
console.log(countLetterPosition('asdddf'))