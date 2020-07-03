var quixote = require("quixote");

var frame;

before(function(done) {
  frame = quixote.createFrame({
    src: "/"
  }, done);
});

after(function() {
  frame.remove();
});

beforeEach(function(done) {
  frame.reload(done);
});
