const encode = require('encoding-down')
const db = levelup(encode(memdown()))

db.put(12, true, (err) => {
  if (err) throw err

  db.createReadStream({
    keyAsBuffer: false,
    valueAsBuffer: false
  }).on('data', (entry) => {
    console.log(typeof entry.key) // 'string'
    console.log(typeof entry.value) // 'string'
  })
})
