var HueApi = require("node-hue-api").HueApi;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.2.129";
var username = "08a902b95915cdd9b75547cb50892dc4";
var api = new HueApi(host, username);

// --------------------------
// Using a promise
api.registeredUsers().then(displayResult).done();

// --------------------------
// Using a callback
api.registeredUsers(function(err, config) {
    if (err) throw err;
    displayResult(config);
});
