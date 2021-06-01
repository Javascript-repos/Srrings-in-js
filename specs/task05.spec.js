var assert = require("assert");
var out = require("../src/task05");
describe("ASSESSMENT 5 #start_test", function() {
  it("Should return K i g", function() {
    assert.deepEqual(out("Konfinity is great"), "K i g");
  });
  it("Should return h", function() {
    assert.deepEqual(out("hello"), "h");
  });
  it("Should return S t & G O T", function() {
    assert.deepEqual(out("Stranger things & Game Of Thrones"), "S t & G O T");
  });
  it("Should return I C", function() {
    assert.deepEqual(out("IT'S COOL"), "I C");
  });
  it("Should return A i D n #end_test", function() {
    assert.deepEqual(out("All is Done now"), "A i D n");
  });
});
