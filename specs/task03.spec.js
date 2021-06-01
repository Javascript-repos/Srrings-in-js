var assert = require("assert");
var out = require("../src/task03");
describe("ASSESSMENT 3 #start_test", function() {
  it("Should return Anu", function() {
    assert.deepEqual(out("Anubhav", 3), "Anu");
  });
  it("Should return  QaQa", function() {
    assert.deepEqual(out("QaQaQa", 4), "QaQa");
  });
  it("Should return ko nf", function() {
    assert.deepEqual(out("ko nfi", 5), "ko nf");
  });
  it("Should return jsisdope", function() {
    assert.deepEqual(out("jsisdopeman!", 8), "jsisdope");
  });
  it("Should return testing #end_test", function() {
    assert.deepEqual(out("testingthisprogram", 7), "testing");
  });
});
