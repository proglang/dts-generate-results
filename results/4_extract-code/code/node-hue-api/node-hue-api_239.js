var HueApi = require("node-hue-api").HueApi;

var host = "192.168.2.129",
    username = "08a902b95915cdd9b75547cb50892dc4";

var displayUserResult = function(result) {
    console.log("Deleted user: " + JSON.stringify(result));
};

var displayError = function(err) {
    console.log(err);
};

var hue = new HueApi(host, username);

// --------------------------
// Using a promise
hue.deleteUser("2b997aae306f15a734d8d1c2315d47cb")
    .then(displayUserResult)
    .fail(displayError)
    .done();

// --------------------------
// Using a callback
hue.unregisterUser("1ab7d44219e64c373b4b915e34494443", function(err, user) {
    if (err) throw err;
    displayUserResult(user);
});
