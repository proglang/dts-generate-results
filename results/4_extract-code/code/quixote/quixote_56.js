var assert = require("chai").assert;
var quixote = require("quixote");

describe("Home page", function() {
  
  var BACKGROUND_BLUE = "rgb(65, 169, 204)";
  var WHITE = "rgb(255, 255, 255)";
  var MEDIUM_BLUE = "rgb(0, 121, 156)";
  
  var frame;
  var logo;
  var navbar;
  
  before(function(done) {
    frame = quixote.createFrame({
      src: "/",     // the server under test must be proxied to localhost
      width: 800
    }, done);
  });
  
  after(function(done) {
    frame.remove();
  });

  beforeEach(function(done) {
    frame.reload(done);
  });
    
  beforeEach(function() {
    logo = frame.get("#logo");
    navbar = frame.get("#navbar");
  });

  it("has an overall layout", function() {
    logo.assert({
      top: 12,
      center: frame.page().center
    }, "logo should be centered at top of page");
    assert.equal(logo.getRawStyle("text-align"), "center", "logo alt text should be centered");
    
    navbar.assert({
      top: logo.bottom.plus(10),
      left: frame.page().left,
      width: frame.viewport().width
    }, "navbar should stretch the width of the window");
  });
  
  it("has a color scheme", function() {
    assert.equal(frame.body().getRawStyle("background-color"), BACKGROUND_BLUE, "page background");
    assert.equal(logo.getRawStyle("color"), WHITE, "logo text");
    assert.equal(navbar.getRawStyle("background-color"), MEDIUM_BLUE, "navbar background color");
    assert.equal(navbar.getRawStyle("color"), WHITE, "navbar text");
  });
  
  it("has a typographic scheme", function() {
    // etc
  });
  
});
