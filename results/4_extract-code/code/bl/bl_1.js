const BufferList = require('bl')

var bl = new BufferList()
bl.append(Buffer.from('abcd'))
bl.append(Buffer.from('efg'))
bl.append('hi')                     // bl will also accept & convert Strings
bl.append(Buffer.from('j'))
bl.append(Buffer.from([ 0x3, 0x4 ]))

console.log(bl.length) // 12

console.log(bl.slice(0, 10).toString('ascii')) // 'abcdefghij'
console.log(bl.slice(3, 10).toString('ascii')) // 'defghij'
console.log(bl.slice(3, 6).toString('ascii'))  // 'def'
console.log(bl.slice(3, 8).toString('ascii'))  // 'defgh'
console.log(bl.slice(5, 10).toString('ascii')) // 'fghij'

console.log(bl.indexOf('def')) // 3
console.log(bl.indexOf('asdf')) // -1

// or just use toString!
console.log(bl.toString())               // 'abcdefghij\u0003\u0004'
console.log(bl.toString('ascii', 3, 8))  // 'defgh'
console.log(bl.toString('ascii', 5, 10)) // 'fghij'

// other standard Buffer readables
console.log(bl.readUInt16BE(10)) // 0x0304
console.log(bl.readUInt16LE(10)) // 0x0403
