var HueApi = require("node-hue-api").HueApi;

var displayStatus = function(status) {
    console.log(JSON.stringify(status, null, 2));
};

var host = "192.168.2.129",
    username = "08a902b95915cdd9b75547cb50892dc4",
    api = new HueApi(host, username);

// Obtain the Status of Light '5'

// --------------------------
// Using a promise
api.lightStatus(5)
    .then(displayStatus)
    .done();

// --------------------------
// Using a callback
api.lightStatus(5, function(err, result) {
    if (err) throw err;
    displayStatus(result);
});
