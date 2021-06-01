var assert = require("assert");
var out = require("../src/task16");
describe("ASSESSMENT 16 #start_test", function() {
  it("Should return jOUrnEy tO thE End And bEyOnd", function() {
    assert.equal(
      out("Journey to the end and beyond"),
      "jOUrnEy tO thE End And bEyOnd"
    );
  });
  it("Should return lEArn prOgrAmmIng And stArt EArnIng", function() {
    assert.equal(
      out("Learn programming and start earning"),
      "lEArn prOgrAmmIng And stArt EArnIng"
    );
  });
  it("Should return hIs Is thE stArt", function() {
    assert.equal(out("THis is the start"), "thIs Is thE stArt");
  });
  it("Should return hEllO wOrld! 123", function() {
    assert.equal(out("Hello World! 123"), "hEllO wOrld! 123");
  });
  it("Should return kOnfInItyAAAAbbOOU #end_test", function() {
    assert.equal(out("konfInItyAAAAbbOOU"), "kOnfInItyAAAAbbOOU");
  });
});
