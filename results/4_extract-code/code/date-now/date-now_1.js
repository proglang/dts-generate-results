var now = require("date-now")

var ts = now()
var ts2 = Date.now()
assert.equal(ts, ts2)
