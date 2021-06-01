var assert = require("assert");
var out = require("../src/task04");
describe("ASSESSMENT 4 #start_test", function() {
  it("Should return nikh....@example.com", function() {
    assert.deepEqual(out("nikhil_rudra@example.com"), "nikh....@example.com");
  });
  it("Should return abhi....@gmail.com", function() {
    assert.deepEqual(out("abhijeet28912@gmail.com"), "abhi....@gmail.com");
  });
  it("Should return zxcv....@yahoo.com", function() {
    assert.deepEqual(out("zxcvpoppy@yahoo.com"), "zxcv....@yahoo.com");
  });
  it("Should return ashn....@hotmail.com", function() {
    assert.deepEqual(out("ashn2312@hotmail.com"), "ashn....@hotmail.com");
  });
  it("Should return hp12....@gmail.com #end_test", function() {
    assert.deepEqual(out("hp1235678@gmail.com"), "hp12....@gmail.com");
  });
});
