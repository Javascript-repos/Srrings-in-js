var assert = require("assert");
var out = require("../src/task08");
describe("ASSESSMENT 8 #start_test", function() {
  it("Should return kONfINity", function() {
    assert.deepEqual(out("KonFinITY"), "kONfINity");
  });
  it("Should return M", function() {
    assert.deepEqual(out("m"), "M");
  });
  it("Should return n", function() {
    assert.deepEqual(out("N"), "n");
  });
  it("Should return aT", function() {
    assert.deepEqual(out("At"), "aT");
  });
  it("Should return So #end_test", function() {
    assert.deepEqual(out("sO"), "So");
  });
});
