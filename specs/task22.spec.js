var assert = require("assert");
var out = require("../src/task22");
describe("ASSESSMENT 22 #start_test", function() {
  it("Should return true", function() {
    assert.equal(out("Learn programming and start earning", "learn"), true);
  });
  it("Should return true here", function() {
    assert.equal(out("ABCDEF", "abcdef"), true);
  });
  it("Should return true", function() {
    assert.equal(out("i want 3 APPLES!", "t 3 Appl"), true);
  });
  it("Should return false", function() {
    assert.equal(out("hey", "plus"), false);
  });
  it("Should return false #end_test", function() {
    assert.equal(out("AV va", "AV aa"), false);
  });
});
