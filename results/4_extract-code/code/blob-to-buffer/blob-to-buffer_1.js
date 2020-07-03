var toBuffer = require('blob-to-buffer')

// Get a Blob somehow...
var blob = new Blob([ new Uint8Array([1, 2, 3]) ], { type: 'application/octet-binary' })

toBuffer(blob, function (err, buffer) {
  if (err) throw err

  buffer[0] // => 1
  buffer.readUInt8(1) // => 2
})
