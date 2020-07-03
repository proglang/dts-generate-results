var auth = require('basic-auth')
var user = auth.parse(req.getHeader('Proxy-Authorization'))
