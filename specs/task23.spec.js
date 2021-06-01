var assert = require("assert");
var out = require("../src/task23");
describe("ASSESSMENT 23 #start_test", function() {
  it("Should return string", function() {
    assert.equal(out("learn programming and start earning", 4), "pievr tvskveqqmrk erh wxevx ievrmrk");
  });
  it("Should return string #end_test", function() {
    assert.equal(out("av va", 5), "fa af");
  });
});
