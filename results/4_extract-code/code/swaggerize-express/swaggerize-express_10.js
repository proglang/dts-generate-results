var http = require('http');
var express = require('express');
var swaggerize = require('swaggerize-express');

app = express();

var server = http.createServer(app);

app.use(swaggerize({
    api: require('./api.json'),
    docspath: '/api-docs',
    handlers: './handlers'
}));

server.listen(port, 'localhost', function () {
    app.swagger.api.host = server.address().address + ':' + server.address().port;
});
