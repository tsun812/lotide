const assert = require("chai").assert;
const eqObjects = require("../eqObjects");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("eqObjects", function(){

  it("returns true if two objects have same key and values(primitive types)", function() {
    assert.equal(eqObjects(ab, ba), true); // => true
  });

  it("returns false if two objects doesn't have same key and values(primitive types)", function() {
    assert.equal(eqObjects(ab, abc), false); // => false
  });

  it("returns true if two objects have same key and values(array types)", function() {
    assert.equal(eqObjects(cd, dc), true); // => true
  });

  it("returns false if two objects doesn't have same key and values(array types)", function() {
    assert.equal(eqObjects(cd, cd2), false); // => false
  });

})


 







