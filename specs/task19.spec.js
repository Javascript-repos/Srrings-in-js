var assert = require("assert");
var out = require("../src/task19");
describe("ASSESSMENT 19 #start_test", function() {
  it("Should return false", function() {
    assert.equal(out("Journey to the end and beyond", 2), false);
  });
  it("Should return true", function() {
    assert.equal(out("Learn programming and start earning", 0), true);
  });
  it("Should return true", function() {
    assert.equal(out("I am IronMan!", 5), true);
  });
  it("Should return false", function() {
    assert.equal(out("Hello there!", 4), false);
  });
  it("Should return true #end_test", function() {
    assert.equal(out("konfInIty   1", 6), true);
  });
});
