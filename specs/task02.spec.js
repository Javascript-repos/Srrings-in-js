var assert = require("assert");
var out = require("../src/task02");
describe("ASSESSMENT 2 #start_test", function() {
  it("Should return ['hey', 'yeah']", function() {
    assert.deepEqual(out("hey yeah"), ["hey", "yeah"]);
  });
  it("Should return  ['Rahul', 'Kumar', 'Bisht']", function() {
    assert.deepEqual(out("Rahul Kumar Bisht"), ["Rahul", "Kumar", "Bisht"]);
  });
  it("Should return ['this','is','also','konfinity']", function() {
    assert.deepEqual(out("this is also konfinity"), [
      "this",
      "is",
      "also",
      "konfinity"
    ]);
  });
  it("Should return ['just','another','TEST']", function() {
    assert.deepEqual(out("just another TEST"), ["just", "another", "TEST"]);
  });
  it("Should return testing #end_test", function() {
    assert.deepEqual(out("testing"), ["testing"]);
  });
});
