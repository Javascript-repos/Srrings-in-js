var assert = require("assert");
var out = require("../src/task25");
describe("ASSESSMENT 25 #start_test", function() {
  it("Should return binary string", function() {
    assert.equal(out("0101010101", "1101010101"), 1000111000000111001);
  });
  it("Should return binary string", function() {
    assert.equal(
      out("01011001010101", "11011111010101"),
      100110111101101011110111001
    );
  });
  it("Should return binary string", function() {
    assert.equal(
      out("01010110101000101", "1101010111101"),
      10010000110001110110111110001
    );
  });
  it("Should return binary string #end_test", function() {
    assert.equal(
      out("0101010001111111101", "11010111110101"),
      10001110011110100101001000100001
    );
  });
});
