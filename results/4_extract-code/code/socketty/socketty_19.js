var http            = require('http');
var socketty        = require('socketty');

var server = http.createServer();
var wsServer = socketty.createServer(server);

server.listen(8080);

wsServer.connection(function (socket) {
    console.log('New client');
    socket.send('hello', 'Hello client!');

    socket.disconnect(function () {
        console.log('Client disconnected');
    }); 
});
