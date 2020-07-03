var express = require('express');
var http = require('http');
var express_enforces_ssl = require('express-enforces-ssl');

var app = express();

app.enable('trust proxy');

app.use(express_enforces_ssl());

/*
    Routes Here
*/

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

