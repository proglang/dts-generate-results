var snap7 = require('node-snap7');

var s7server = new snap7.S7Server();

// Set up event listener
s7server.on("event", function(event) {
    console.log(s7server.EventText(event));
});

// Create a new Buffer and register it to the server as DB1
var db1 = new Buffer(100).fill('ÿ');
s7server.RegisterArea(s7server.srvAreaDB, 1, db1);

// Start the server
s7server.StartTo('127.0.0.1');

// Close the server after 20s in this example
setTimeout(function() {
    s7server.Stop();
    s7server.UnregisterArea(s7server.srvAreaDB, 1);
}, 20000);
