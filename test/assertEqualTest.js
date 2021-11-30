const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const stringInput1 = "lighthouse Labs";
const stringInput2 = "bootcamp";
const num1 = 1;
const num2 = 2;
describe("assertEqual", function(){

  it("returns true if two strings are equal", function(){
    assert.equal(assertEqual(stringInput1, "lighthouse Labs"), true);
  });

  it("return false if two strings are not equal", function(){
    assert.equal(assertEqual(stringInput1,stringInput2), false);
  });

  it("returns true if two numbers are equal", function(){
    assert.equal(assertEqual(num1,1), true);
  });

  it("returns false if two numbers are not equal", function(){
    assert.equal(assertEqual(num1, num2), false);
  })
});