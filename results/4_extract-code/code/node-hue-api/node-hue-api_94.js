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
api.getVersion().then(displayResult).done();
// or using 'version' alias
api.version().then(displayResult).done();

// --------------------------
// Using a callback
api.getVersion(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
// or using 'version' alias
api.version(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
