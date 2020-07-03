var meter = require("stream-meter")

// make an un-capped meter
var m = meter()
process.stdin.pipe(m).pipe(process.stdout)
setTimeout(function () {
  // Log how much we saw in a couple seconds.
  console.log(m.bytes)
}, 2000)

// this will abort (with an Error) in the frame where 1024 bytes is reached
process.stdin.pipe(meter(1024)).pipe(process.stdout)

// create a 1024 byte-capped meter
var m = meter(1024)
m.on("error", function (e) {
  // log the error but don't kill the process
  console.log(e.message)
})
process.stdin.pipe(m).pipe(process.stdout)

