var assert = require("assert");
var out = require("../src/task11");
describe("ASSESSMENT 11 #start_test", function() {
  it("Should return 402nd", function() {
    assert.equal(out(402), "402nd");
  });
  it("Should return  101st", function() {
    assert.equal(out(101), "101st");
  });
  it("Should return 19897898th", function() {
    assert.equal(out(19897898), "19897898th");
  });
  it("Should return 8763rd", function() {
    assert.equal(out(8763), "8763rd");
  });
  it("Should return 0th #end_test", function() {
    assert.equal(out(0), "0th");
  });
});
