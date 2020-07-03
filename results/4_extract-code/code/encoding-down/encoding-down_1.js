var levelup = require('levelup')
var leveldown = require('leveldown')
var encode = require('encoding-down')

var db = levelup(encode(leveldown('./db1')))

db.put('example', Buffer.from('encoding-down'), function (err) {
  db.get('example', function (err, value) {
    console.log(typeof value, value) // 'string encoding-down'
  })
})
