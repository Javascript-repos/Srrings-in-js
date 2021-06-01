var assert = require("assert");
var out = require("../src/task20");
describe("ASSESSMENT 20 #start_test", function() {
  it("Should return 2", function() {
    assert.equal(out("2"), "2");
  });
  it("Should return ABCDEF", function() {
    assert.equal(out("abcdef"), "ABCDEF");
  });
  it("Should return I WANT 3 APPLES!", function() {
    assert.equal(out("i want 3 APPLES!"), "I WANT 3 APPLES!");
  });
  it("Should return HEY", function() {
    assert.equal(out("HEY"), "HEY");
  });
  it("Should return     #end_test", function() {
    assert.equal(out("   "), "   ");
  });
});
