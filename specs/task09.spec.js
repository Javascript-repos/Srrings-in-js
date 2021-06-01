var assert = require("assert");
var out = require("../src/task09");
describe("ASSESSMENT 9 #start_test", function() {
  it("Should return konfinity!konfinity!konfinity!", function() {
    assert.deepEqual(out("konfinity!", 3), "konfinity!konfinity!konfinity!");
  });
  it("Should return OP?OP?OP?OP?OP?", function() {
    assert.deepEqual(out("OP?", 5), "OP?OP?OP?OP?OP?");
  });
  it("Should return hihi", function() {
    assert.deepEqual(out("hi", 2), "hihi");
  });
  it("Should return Talkin", function() {
    assert.deepEqual(out("Talkin", 1), "Talkin");
  });
  it("Should return !!Strange..Things##!!Strange..Things##!!Strange..Things##!!Strange..Things##!!Strange..Things##!!Strange..Things## #end_test", function() {
    assert.deepEqual(
      out("!!Strange..Things##", 6),
      "!!Strange..Things##!!Strange..Things##!!Strange..Things##!!Strange..Things##!!Strange..Things##!!Strange..Things##"
    );
  });
});
