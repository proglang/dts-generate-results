var bs58 = require('bs58')

var bytes = Buffer.from('003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187', 'hex')
var address = bs58.encode(bytes)
console.log(address)
// => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS
