var assert = require("assert");
var out = require("../src/task14");
describe("ASSESSMENT 14 #start_test", function() {
  it("Should return  start earning", function() {
    assert.equal(
      out("LEARN programming & start earning", "&", 2),
      " start earning"
    );
  });
  it("Should return LEARN programming ", function() {
    assert.equal(
      out("LEARN programming & start earning", "&", 1),
      "LEARN programming "
    );
  });
  it("Should return false", function() {
    assert.equal(out("er diagram", "##", 1), false);
  });
  it("Should return abab", function() {
    assert.equal(out("ababzababba", "z", 1), "abab");
  });
  it("Should return abab #end_test", function() {
    assert.equal(out("ababzababba", "z", 2), "ababba");
  });
});
