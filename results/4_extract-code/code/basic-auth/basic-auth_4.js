var auth = require('basic-auth')
var user = auth(req)
// => { name: 'something', pass: 'whatever' }
