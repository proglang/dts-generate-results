var field = require('field')
var stub = {}
field(stub, 'window:localStorage.getItem', function () { return 'data' })
field(stub, 'window:localStorage.length', 1)
