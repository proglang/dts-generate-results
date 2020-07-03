var hyperquest = require("hyperquest")

var req = hyperquest("https://raw.github.com/mranney/node_redis/master/index.js")

var meter = require("stream-meter")(1024)
meter.on("error", function (e) {
  console.log(e.message)
  console.log("Read %s bytes", meter.bytes)
})


req.pipe(meter).pipe(process.stderr)
