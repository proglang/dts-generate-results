var HueApi = require("node-hue-api").HueApi;

var displayResult = function(result) {
    console.log(result);
};

var displayError = function(err) {
    console.error(err);
};

var host = "192.168.2.129",
    username = "08a902b95915cdd9b75547cb50892dc4",
    api;

api = new HueApi(host, username);
api.setLightState(2, {"on": true}) // provide a value of false to turn off
    .then(displayResult)
    .fail(displayError)
    .done();
