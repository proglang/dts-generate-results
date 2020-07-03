var HueApi = require("node-hue-api").HueApi;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.2.129",
    username = "08a902b95915cdd9b75547cb50892dc4",
    api;

api = new HueApi(host, username);

// --------------------------
// Using a promise
api.description().then(displayResult).done();
// using alias getDescription()
api.getDescription().then(displayResult).done();

// --------------------------
// Using a callback
api.description(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
// using alias getDescription()
api.getDescription(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
