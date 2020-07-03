const levelup = require('levelup')
const memdown = require('memdown')

const db = levelup(memdown())

db.put('hey', 'you', (err) => {
  if (err) throw err

  db.get('hey', { asBuffer: false }, (err, value) => {
    if (err) throw err
    console.log(value) // 'you'
  })
})
