var level = require('level')
var lexint = require('lexicographic-integer-encoding')('hex')

var db = level('./db8', {
  keyEncoding: lexint
})
