const middle = require("../middle");
const assert = require("chai").assert;

describe("middle", function(){
  
  it("should return [3] if input is [1,2,3,4,5]", function(){
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  
  it("should return empty array if input's length is 1", function(){
    assert.deepEqual(middle([1]), []);
  });
  
  it("should return empty array if input's length is 2", function(){
    assert.deepEqual(middle([1,2]), []);
  });
  
  it("should return empty array if input is empty array", function(){
    assert.deepEqual(middle([]), []);
  });
  
  it("should return [2,3] if input is [1,2,3,4]", function(){
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

});
