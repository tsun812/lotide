let assert = require('assert');
const count = function (allItems, itemsToCount) {
  const results = {};
  for(const element in itemsToCount){
    if(itemsToCount[element] === true){
      let countObj = 0
      for (const item of allItems) {
        if(item == element){
          countObj++
        }
      }
      if(countObj != 0){
        results[element] = countObj
      }
    }
    }
    return results
  }
module.exports = count;
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = count(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assert.equal(result1["Jason"], 1);
console.log(result1["Jason"])
assert.equal(result1["Karima"], undefined);
assert.equal(result1["Fang"], 2);
assert.equal(result1["Agouhanna"], undefined);