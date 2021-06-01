var assert = require("assert");
var out = require("../src/task06");
describe("ASSESSMENT 6 #start_test", function() {
  it("Should return Konfinity is future", function() {
    assert.deepEqual(out("konfinity is future"), "Konfinity is future");
  });
  it("Should return Hello World", function() {
    assert.deepEqual(out("hello World"), "Hello World");
  });
  it("Should return Maths is fun", function() {
    assert.deepEqual(out("Maths is fun"), "Maths is fun");
  });
  it("Should return Abhi", function() {
    assert.deepEqual(out("abhi"), "Abhi");
  });
  it("Should return This is a cool Wet place #end_test", function() {
    assert.deepEqual(
      out("this is a cool Wet place"),
      "This is a cool Wet place"
    );
  });
});
