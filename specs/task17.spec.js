var assert = require("assert");
var out = require("../src/task17");
describe("ASSESSMENT 17 #start_test", function() {
  it("Should return false", function() {
    assert.equal(out("Journey to the end and beyond", "above"), false);
  });
  it("Should return true", function() {
    assert.equal(out("Learn programming and start earning", "earning"), true);
  });
  it("Should return true", function() {
    assert.equal(out("fair enough", "ough"), true);
  });
  it("Should return false", function() {
    assert.equal(out("Hello World! 123456", "!"), false);
  });
  it("Should return true #end_test", function() {
    assert.equal(out("konfInIty   1", "   1"), true);
  });
});
