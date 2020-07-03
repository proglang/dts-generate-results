function createServer (port) {
  var server = require('http').createServer()
  server.listen(port)

  // The server will be returned once it has started listening.
  //
  // If an error happened, it will be forwarded instead.
  return eventToPromise(server, 'listening').then(function () {
    return server
  })
}

// Using plain promise.
createServer(80).then(function (server) {
  console.log('Server listening on http://localhost:80/')
}).catch(function (error) {
  console.error('Server could not start:', error)
})
