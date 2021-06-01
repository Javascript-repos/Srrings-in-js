var assert = require("assert");
var out = require("../src/task12");
describe("ASSESSMENT 12 #start_test", function() {
  it("Should return I love kon***", function() {
    assert.equal(out("I love konfinity big time!", 10, "***"), "I love kon***");
  });
  it("Should return hey@", function() {
    assert.equal(out("heyyyaa", 3, "@"), "hey@");
  });
  it("Should return ##", function() {
    assert.equal(out("er diagram", 0, "##"), "##");
  });
  it("Should return dRacarys0101", function() {
    assert.equal(out("dRacarysdrogon!", 8, "0101"), "dRacarys0101");
  });
  it("Should return 0 0 0 th #end_test", function() {
    assert.equal(out("0 0 0 0 0 0", 6, "th"), "0 0 0 th");
  });
});
