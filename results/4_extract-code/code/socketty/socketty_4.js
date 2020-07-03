var socketty = require('socketty');

socketty.connect('ws://localhost:8080', function (socket) {
    console.log('Connected');

    socket.on('hello', function (msg) {
        console.log('Message from server: ' + msg);
    });

    socket.disconnect(function () {
        console.log('Disconnected');
    });
});
