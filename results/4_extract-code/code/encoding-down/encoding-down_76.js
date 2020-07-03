var level = require('level')
var lexint = require('lexicographic-integer')

async function main () {
  var db = level('./db8', {
    keyEncoding: {
      type: 'lexicographic-integer',
      encode: (n) => lexint.pack(n, 'hex'),
      decode: lexint.unpack,
      buffer: false
    }
  })

  await db.put(2, 'example')
  await db.put(10, 'example')

  // Without our encoding, the keys would sort as 10, 2.
  db.createKeyStream().on('data', console.log) // 2, 10
}

main()
