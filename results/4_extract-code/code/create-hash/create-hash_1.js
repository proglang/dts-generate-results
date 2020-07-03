var createHash = require('create-hash')
var hash = createHash('sha224')
hash.update('synchronous write') // optional encoding parameter
hash.digest() // synchronously get result with optional encoding parameter

hash.write('write to it as a stream')
hash.end() // remember it's a stream
hash.read() // only if you ended it as a stream though
