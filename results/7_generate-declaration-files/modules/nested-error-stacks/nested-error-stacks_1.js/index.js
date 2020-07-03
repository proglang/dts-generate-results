var NestedError = require('nested-error-stacks');
var net = require('net');
    
var client = net.connect({port: 8080});
client.on('error', function (err) {
    var newErr = new NestedError("Failed to communicate with localhost:8080", err);
    console.log(newErr.stack);
});
