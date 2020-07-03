var meter = require("stream-meter")

var stream = meter(size)
stream.on("error", function (e) {
  // handle the meter aborting the stream
})

// read the bytes processed by the meter and passed through to any subsequent streams.
var size = stream.bytes
