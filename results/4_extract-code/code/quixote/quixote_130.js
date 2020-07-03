var quixote = require("quixote");

var frame;

before(function(done) {
  frame = quixote.createFrame({
    stylesheet: "/base/src/client/screen.css"
  }, done);
});

after(function() {
  frame.remove();
});

beforeEach(function() {
  frame.reset();
});
