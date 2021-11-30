const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");
const test1 = {price: 10, category: "seafood"};
const test2 = {category: "seafood", price: 10};
const test3 = {category: "bakery", price: 2};
const test4 = {course: "cpsc110", prerequisite: ["math110", "math101"]};
const test5 = {prerequisite: ["math110", "math101"], course: "cpsc110"};
const checkmark = String.fromCodePoint(0x2705);
const nomark = String.fromCodePoint(0x274C);
describe("assertObjectsEqual", function(){

  it("returns check message if two objects are the same", function(){
    assert.equal(assertObjectsEqual(test1, test2), `${checkmark} ${test1} and ${test2} are the same.`);
  });

  it("returns false message if two objects are not the same", function(){
    assert.equal(assertObjectsEqual(test2, test3), `${nomark} ${test2} and ${test3} are not the same.`);
  });

  it("returns check message if two objects are the same, array values", function(){
    assert.equal(assertObjectsEqual(test4, test5), `${checkmark} ${test4} and ${test5} are the same.`)
  });
});
