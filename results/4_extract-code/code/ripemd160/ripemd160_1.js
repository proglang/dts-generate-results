var RIPEMD160 = require('ripemd160')

console.log(new RIPEMD160().update('42').digest('hex'))
// => 0df020ba32aa9b8b904471ff582ce6b579bf8bc8

var ripemd160stream = new RIPEMD160()
ripemd160stream.end('42')
console.log(ripemd160stream.read().toString('hex'))
// => 0df020ba32aa9b8b904471ff582ce6b579bf8bc8
