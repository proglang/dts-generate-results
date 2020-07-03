var JsonSocket = require('json-socket');

JsonSocket.sendSingleMessage(port, host, {type: 'ping'}, function(err) {
    if (err) {
        //Something went wrong
        throw err;
    }
    console.log('Pinged '+host+' on port '+port);
});
