// server.js
const server = new Hapi.Server();
server.register(require('inert', (err) => possibleError(err)));
server.route({
  method: 'GET',
  path: '/opossum.js',
  handler: {
    file: {
      path: path.join(__dirname, 'node_modules', 'opossum', 'dist', 'opossum-min.js'),
    }
  }
});
