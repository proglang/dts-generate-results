
var map = require("through2-map")

var truncate = map(function (chunk) {
  return chunk.slice(0, 10)
})

// vs. with through2:
var truncate = through2(function (chunk, encoding, callback) {
  this.push(chunk.slice(0, 10))
  return callback()
})

// Then use your map:
source.pipe(truncate).pipe(sink)

// Additionally accepts `wantStrings` argument to convert buffers into strings
var stripTags = map({wantStrings: true}, function (str) {
  // OMG don't actually use this
  return str.replace(/<.*?>/g, "")
})

// Works like `Array.prototype.map` meaning you can specify a function that
// takes up to two* arguments: fn(chunk, index)
var spaceout = map({wantStrings: true}, function (chunk, index) {
  return (index % 2 == 0) ? chunk + "\n\n" : chunk
})

// vs. with through2:
var spaceout = through2(function (chunk, encoding, callback) {
  if (this.index == undefined) this.index = 0
  var buf = (this.index++ % 2 == 0) ? Buffer.concat(chunk, new Buffer("\n\n")) : chunk
  this.push(buf)
  return callback()
})

