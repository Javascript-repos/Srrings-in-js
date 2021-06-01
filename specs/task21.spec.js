var assert = require("assert");
var out = require("../src/task21");
describe("ASSESSMENT 21 #start_test", function() {
  it("Should return 2", function() {
    assert.equal(out("2"), "2");
  });
  it("Should return abcdef", function() {
    assert.equal(out("ABCDEF"), "abcdef");
  });
  it("Should return i want 3 apples!", function() {
    assert.equal(out("i want 3 APPLES!"), "i want 3 apples!");
  });
  it("Should return hey", function() {
    assert.equal(out("hey"), "hey");
  });
  it("Should return     #end_test", function() {
    assert.equal(out("   "), "   ");
  });
});
