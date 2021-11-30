const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");
const test1 = [1,2,3,4];
const test2 = [1,2,3,4];
const test3 = ["string"];
const checkmark = String.fromCodePoint(0x2705);
const nomark = String.fromCodePoint(0x274C);
describe("assertObjectsEqual", function(){

  it("returns check message if two arrays are the same", function(){
    assert.equal(assertArraysEqual(test1, test2), `${checkmark} ${test1} and ${test2} are the same.`);
  });

  it("returns false message if two arrays are not the same", function(){
    assert.equal(assertArraysEqual(test2, test3), `${nomark} ${test2} and ${test3} are not the same.`);
  });

});