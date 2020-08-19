var Stream = require('stream');
var destroyOnHWM = require('destroy-on-hwm');

var stream = new Stream.PassThrough();

/**
 * With no callback, attempts to execute `stream.destroy()` on high water mark.
 * This stream does not have `.destroy()` though, so it's really a noop.
 */

destroyOnHWM(stream);

/**
 * Instead, we'll just use a custom callback.
 */

destroyOnHWM(stream, function (stream) {
  assert(stream === this); // the stream is passed as both `this` and the first argument
  console.log('High water mark reached!');
});
