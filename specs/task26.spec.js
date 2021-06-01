var assert = require("assert");
var out = require("../src/task26");
describe("ASSESSMENT 26 #start_test", function() {
  it("Should return YES", function() {
    assert.equal(out("anubhav", "L 2 L 1 R 2"), "YES");
  });
  it("Should return NO", function() {
    assert.equal(out("carrace", "L 2 R 2 L 3"), "NO");
  });
  it("Should return YES", function() {
    assert.equal(out("linkinpark", "L 6 R 5 L 4"), "YES");
  });
  it("Should return NO", function() {
    assert.equal(out("gdfuhgdASQ", "L 6 R 3 L 6"), "NO");
  });
  it("Should return YES", function() {
    assert.equal(out("ilovekonfinitybigtime", "R 6 R 8 L 4 L 6 R 4"), "YES");
  });
  it("Should return NO", function() {
    assert.equal(out("ilovekonfinitybigtime", "R 1 R 8 L 7 L 6 R 4"), "NO");
  });
  it("Should return YES", function() {
    assert.equal(
      out(
        "pnesumonoultramicroscopicsilicovolcanoconiosisfloccinaucinihilipilification",
        "R 9 R 1 L 4 L 9"
      ),
      "YES"
    );
  });
  it("Should return NO #end_test", function() {
    assert.equal(
      out(
        "gdfuhgdASQdfbdhghjbawdkkansbdqfwfdnbxfoqojqjjjqwdygqwkjbbbkhabhkfbasfjasjkfjaksbfkjasfsakb",
        "L 6 R 3 L 6 R 5 R 2 R 1 R 5 R 7 R 5 L 7 L 9 L 1 L 2"
      ),
      "NO"
    );
  });
});
