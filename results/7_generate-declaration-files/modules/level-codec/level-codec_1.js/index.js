var Codec = require('level-codec')
var codec = Codec({ keyEncoding: 'json' })
var key = codec.encodeKey({ foo: 'bar' })
console.log(key) // -> '{"foo":"bar"}'
console.log(codec.decodeKey(key)) // -> { foo: 'bar' }
