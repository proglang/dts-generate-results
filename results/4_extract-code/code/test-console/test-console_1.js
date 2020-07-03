var stdout = require("test-console").stdout;

var output = stdout.inspectSync(function() {
    console.log("foo");
});
assert.deepEqual(output, [ "foo\n "]);
