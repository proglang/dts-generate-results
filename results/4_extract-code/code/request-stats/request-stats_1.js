var requestStats = require('request-stats')
var server = http.createServer(...)

requestStats(server, function (stats) {
  // this function will be called every time a request to the server completes
  console.log(stats)
})
