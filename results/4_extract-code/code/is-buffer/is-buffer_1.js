var isBuffer = require('is-buffer')

isBuffer(new Buffer(4)) // true

isBuffer(undefined) // false
isBuffer(null) // false
isBuffer('') // false
isBuffer(true) // false
isBuffer(false) // false
isBuffer(0) // false
isBuffer(1) // false
isBuffer(1.0) // false
isBuffer('string') // false
isBuffer({}) // false
isBuffer(function foo () {}) // false
