var hue = require("node-hue-api"),
	timeout = 2000; // 2 seconds

var displayBridges = function(bridge) {
	console.log("Hue Bridges Found: " + JSON.stringify(bridge));
};

hue.upnpSearch(timeout).then(displayBridges).done();
