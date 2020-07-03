const Codec = require('level-codec')
const codec = Codec({ keyEncoding: 'json' })
const key = codec.encodeKey({ foo: 'bar' })
console.log(key) // -> '{"foo":"bar"}'
console.log(codec.decodeKey(key)) // -> { foo: 'bar' }
