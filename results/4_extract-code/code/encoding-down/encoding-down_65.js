var level = require('level')
var db = level('./db7', { valueEncoding: 'json' })

db.put('example', 42, function (err) {
  db.get('example', function (err, value) {
    console.log(value) // 42
    console.log(typeof value) // 'number'
  })
})
