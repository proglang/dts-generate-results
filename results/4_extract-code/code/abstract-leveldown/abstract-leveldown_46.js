var levelup = require('levelup')

var db = levelup(new FakeLevelDOWN())

db.put('foo', 'bar', function (err) {
  if (err) throw err

  db.get('foo', function (err, value) {
    if (err) throw err

    console.log(value) // 'bar'
  })
})
