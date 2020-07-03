async function createServer (port) {
  var server = require('http').createServer()
  server.listen(port)

  await eventToPromise(server, 'listening')

  return server
}

async function main () {
  try {
    const server = await createServer(80);
    console.log('Server listening on http://localhost:80/');
  } catch (error) {
    console.error('Server could not start:', error);
  }
}

main()
