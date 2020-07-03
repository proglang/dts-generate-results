var shajs = require('sha.js')

console.log(shajs('sha256').update('42').digest('hex'))
// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
console.log(new shajs.sha256().update('42').digest('hex'))
// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049

var sha256stream = shajs('sha256')
sha256stream.end('42')
console.log(sha256stream.read().toString('hex'))
// => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
