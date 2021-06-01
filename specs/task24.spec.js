var assert = require("assert");
var out = require("../src/task24");
describe("ASSESSMENT 24 #start_test", function() {
  it("Should return true", function() {
    assert.equal(out("The quick brown fox jumps over the lazy dog "), true);
  });
  it("Should return flase", function() {
    assert.equal(out("The quick brownsahdkshdushandiusuidsfos over the lazy dog "), false);
  });
  it("Should return true", function() {
    assert.equal(out("abcdefghijklmnopqrstuvwxyz"), true);
  });
  it("Should return false #end_test", function() {
    assert.equal(out("The quick brown fox jumps over the dog "), false);
  });
});
