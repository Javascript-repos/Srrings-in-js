var assert = require("assert");
var out = require("../src/task07");
describe("ASSESSMENT 7 #start_test", function() {
  it("Should return Konfinity Is Future", function() {
    assert.deepEqual(out("konfinity is future"), "Konfinity Is Future");
  });
  it("Should return Hello World", function() {
    assert.deepEqual(out("hello World"), "Hello World");
  });
  it("Should return Maths Is Fun", function() {
    assert.deepEqual(out("Maths is fun"), "Maths Is Fun");
  });
  it("Should return Abhi", function() {
    assert.deepEqual(out("abhi"), "Abhi");
  });
  it("Should return This Is A Cool Wet Place #end_test", function() {
    assert.deepEqual(
      out("this is a cool Wet place"),
      "This Is A Cool Wet Place"
    );
  });
});
