var options = {}; // See 'Options' above
var expressWs = require('express-ws-routes');
var app = expressWs.extendExpress(options)();

var server = http.createServer(app);
server.wsServer = expressWs.createWebSocketServer(server, app, options);
server.listen(8080, function() {
	console.log('Server listening on port 8080...');
});
