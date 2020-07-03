var ListStream = require('list-stream')
  , db = require('level')('/path/to/db', { valueEncoding: 'json' }) // stream from LevelDB!

db.createValueStream().pipe(ListStream.obj(function (err, data) {
  if (err)
    throw err

  console.log('Values in the database:')
  // `data` is an array of objects from the database, serialised from JSON strings
  data.forEach(function (value, i) {
    console.log(i, JSON.stringify(value))
  })
}))
