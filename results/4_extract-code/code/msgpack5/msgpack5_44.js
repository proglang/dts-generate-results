var level = require('level')
  , pack  = msgpack()
  , db    = level('foo', {
      valueEncoding: pack
    })
  , obj   = { my: 'obj' }

db.put('hello', obj, function(err) {
  db.get('hello', function(err, result) {
    console.log(result)
    db.close()
  })
})

