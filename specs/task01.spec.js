var assert = require("assert");
var out = require("../src/task01");
describe("ASSESSMENT 1 #start_test", function() {
  it("Should return 2", function() {
    assert.deepEqual(out("hi"), 2);
  });
  it("Should return 5", function() {
    assert.deepEqual(out("hello"), 5);
  });
  it("Should return 8", function() {
    assert.deepEqual(out("asdfghjk"), 8);
  });
  it("Should return 12", function() {
    assert.deepEqual(out("my konfinity"), 12);
  });
  it("Should return zero #end_test", function() {
    assert.deepEqual(out(""), "zero");
  });
});

