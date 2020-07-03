var JsonSocket = require('json-socket');

JsonSocket.sendSingleMessageAndReceive(port, host, {type: 'ping'}, function(err, message) {
    if (err) {
        //Something went wrong
        throw err;
    }
    console.log('Server said: '+message.type); //E.g. pong
});
