// Use a different web socket
var app = require('express-ws-routes')({
	methodName: 'WS'
});

// Note: Method for attaching handlers will always be lowercase
app.ws(function(info, cb, next) {
	// ...
});
