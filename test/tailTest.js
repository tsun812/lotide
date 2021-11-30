const assert = require("chai").assert;
const tail = require("../tail");

describe("tail", function(){

  it("should return [2,3,4] if input is [1,2,3,4]", function(){
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  });

  it("should return ['orange', 'pear']if input is ['apple', 'orange', 'pear']", function(){
    assert.deepEqual(tail(["apple", "orange", "pear"]), ["orange", "pear"]);
  });

});

