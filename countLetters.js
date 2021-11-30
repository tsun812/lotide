const countLetters = function(input1) {
  const check = input1.split('')
  console.log(check)
  const res = {}
  let res1 = new Map()
  for(const character of check){
    if(!res1.has(character)){
      res1.set(character, 1)
    }
    else{
      let inc = res1.get(character)
      inc ++
      res1.set(character,inc)
      //res1.set(character, inc++)
    }
  }
  return Object.fromEntries(res1)
}
module.exports = countLetters;

console.log(countLetters('asdddf'))