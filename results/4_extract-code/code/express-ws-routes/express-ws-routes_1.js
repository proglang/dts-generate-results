var express = require('express');

// Create an express app with websocket support
var app = require('express-ws-routes')();

// Add routes directly to the app... 
app.websocket('/myurl', function(info, cb, next) {
	// `info` is the same as ws's verifyClient
	console.log(
		'ws req from %s using origin %s',
		info.req.originalUrl || info.req.url,
		info.origin
	);

	// Accept connections by passing a function to cb that will handle the connected websocket
	cb(function(socket) {
		socket.send('connected!');
	});
});

// ... or to detached routers
var router = express.Router();
router.websocket('/sub/path', function(info, cb, next) {
	cb(function(socket) {
		socket.send('connected!');
	});
});
app.use('/attachment/path', router);

// Reject requests using cb just like you would with ws's verifyClient
app.websocket('/bad/path', function(info, cb, next) {
	cb(false);
	
	// Using the optional arguments...
	//cb(false, 401);
	//cb(false, 401, 'No access!');
});

// Skip handlers by calling next(), just like normal routes
app.websocket('/skipped', function(info, cb, next) {
	console.log('Skipped!');
	next();
});

// Using app.listen will also create a require('ws').Server
var server = app.listen(8080, function() {
	console.log('Server listening on port 8080...');
});

// The WebSocket server instance is available as a property of the HTTP server
server.wsServer.on('connection', function(socket) {
	console.log('connection to %s', socket.upgradeReq.url);
});
