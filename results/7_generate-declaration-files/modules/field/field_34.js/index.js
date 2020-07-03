var field = require('field')
var database = {}

console.log(field.get(database, 'production.port'))
// => undefined

// will return undefined since it never existed before
field.set(database, 'production.port', 27017)
console.log(database.production.port)
// => 27017
