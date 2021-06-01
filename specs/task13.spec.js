var assert = require("assert");
var out = require("../src/task13");
describe("ASSESSMENT 13 #start_test", function() {
  it("Should return 1", function() {
    assert.equal(out("LEARN programming and start earning", "earn"), 1);
  });
  it("Should return 2", function() {
    assert.equal(out("Learn programming and start earning", "earn"), 2);
  });
  it("Should return 0", function() {
    assert.equal(out("er diagram", "##"), 0);
  });
  it("Should return 4", function() {
    assert.equal(out("ababababba", "ab"), 4);
  });
  it("Should return 3 #end_test", function() {
    assert.equal(out("hello hey hi hemu", "he"), 3);
  });
});
