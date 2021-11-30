const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("eqArrays", function(){

  it("returns true if two arrays are equal", function(){
    assert.equal(eqArrays([1,2,3],[1,2,3]),true);
  });

  it("returns false if two arrays are not equal", function(){
    assert.equal(eqArrays([1,2,3],[]), false);
  });
});


