var run = require('gen-run');

run(function*() {
 // Blocking logic goes here.  You can use yield
 var result = yield someAction(withArgs);
 // The generator pauses at yield and resumes when the data is available.
 // The rest of your process is not blocked, just this generator body.
 // If there was an error, it will throw into this generator.
});
