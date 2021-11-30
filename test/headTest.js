const assert = require('chai').assert;
const head = require("../head");
describe("head", function(){
  it("returns 5 for [5,6,7]", function(){
    assert.equal(head([5,6,7]), 5);
  });
  
  it("returns Hello for [\"Hello\", \"Lighthouse\", \"Labs\"]", function(){
    assert.equal(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  
  it("returns undefined for []", function(){
    assert.equal(head([]), undefined);
  });
  });
