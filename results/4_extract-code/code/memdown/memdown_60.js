const encode = require('encoding-down')

const db = levelup(encode(memdown(), { valueEncoding: 'json' }))
const obj = { thing: 'original' }

db.put('key', obj, (err) => {
  obj.thing = 'modified'

  db.get('key', { asBuffer: false }, (err, value) => {
    console.log(value === obj) // false
    console.log(value.thing) // 'original'
  })
})
