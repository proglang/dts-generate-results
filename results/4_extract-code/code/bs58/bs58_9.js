const bs58 = require('bs58')

const address = '16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS'
const bytes = bs58.decode(address)
console.log(bytes.toString('hex'))
// => 003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187
