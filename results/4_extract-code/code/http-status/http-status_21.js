const express = require('express'),
      redis = require('redis'),
      status = require('http-status');
// New Express HTTP server
const app = express.createServer();
// Regster a route
app.get('/', function (req, res) {
  const client = redis.createClient();
  client.ping(function (err, msg) {
    if (err) {
      return res.send(status.INTERNAL_SERVER_ERROR);
    }
    res.send(msg, status.OK);
  });
});
// Start the HTTP server
app.listen(3000);
