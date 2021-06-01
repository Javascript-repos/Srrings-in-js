var assert = require("assert");
var out = require("../src/task18");
describe("ASSESSMENT 18 #start_test", function() {
  it("Should return true", function() {
    assert.equal(out("Journey to the end and beyond", 2), true);
  });
  it("Should return false", function() {
    assert.equal(out("Learn programming and start earning", 0), false);
  });
  it("Should return false", function() {
    assert.equal(out("I am IronMan!", 5), false);
  });
  it("Should return true", function() {
    assert.equal(out("Hello there!", 4), true);
  });
  it("Should return false #end_test", function() {
    assert.equal(out("konfInIty   1", 6), false);
  });
});
