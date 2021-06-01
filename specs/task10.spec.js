var assert = require("assert");
var out = require("../src/task10");
describe("ASSESSMENT 10 #start_test", function() {
  it("Should return Konfinity is my future", function() {
    assert.deepEqual(
      out("konfinity is future", "my", 13),
      "konfinity is my future"
    );
  });
  it("Should return The great wall of China", function() {
    assert.deepEqual(
      out("The great wall China", "of", 15),
      "The great wall of China"
    );
  });
  it("Should return All is cool", function() {
    assert.deepEqual(out("All cool", "is", 4), "All is cool");
  });
  it("Should return At some place #end_test", function() {
    assert.deepEqual(out("At place", "some", 3), "At some place");
  });
});
