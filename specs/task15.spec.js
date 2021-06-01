var assert = require("assert");
var out = require("../src/task15");
describe("ASSESSMENT 15 #start_test", function() {
  it("Should return Journey to end and beyond", function() {
    assert.equal(
      out("Journey to the end and beyond", "the"),
      "Journey to end and beyond"
    );
  });
  it("Should return false", function() {
    assert.equal(out("LEARN programming & start earning", "yyuhy"), false);
  });
  it("Should return Game Thrones", function() {
    assert.equal(out("Game Of Thrones", "Of"), "Game Thrones");
  });
  it("Should return false", function() {
    assert.equal(out("Game of Thrones", "Of"), false);
  });
  it("Should return Dragon Z #end_test", function() {
    assert.equal(out("Dragon Ball Z", "Ball"), "Dragon Z");
  });
});
