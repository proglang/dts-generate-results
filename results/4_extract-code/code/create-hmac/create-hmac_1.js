var createHmac = require('create-hmac')
var hmac = createHmac('sha224', Buffer.from('secret key'))
hmac.update('synchronous write') //optional encoding parameter
hmac.digest() // synchronously get result with optional encoding parameter

hmac.write('write to it as a stream')
hmac.end() //remember it's a stream
hmac.read() //only if you ended it as a stream though
