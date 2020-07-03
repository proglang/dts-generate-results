var globalTunnel = require('global-tunnel-ng');

globalTunnel.initialize({
  host: '10.0.0.10',
  port: 8080,
  proxyAuth: 'userId:password', // optional authentication
  sockets: 50 // optional pool size for each http and https
});
