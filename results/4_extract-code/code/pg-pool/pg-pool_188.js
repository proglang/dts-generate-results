var Pool = require('pg-pool')
var pool = new Pool()

var acquireCount = 0
pool.on('acquire', function (client) {
  acquireCount++
})

var connectCount = 0
pool.on('connect', function () {
  connectCount++
})

for (var i = 0; i < 200; i++) {
  pool.query('SELECT NOW()')
}

setTimeout(function () {
  console.log('connect count:', connectCount) // output: connect count: 10
  console.log('acquire count:', acquireCount) // output: acquire count: 200
}, 100)

