var bunyan = require("bunyan");
var splunkBunyan = require("splunk-bunyan-logger");

var config = {
    token: "your-token-here",
    url: "https://splunk.local:8088"
};

var splunkStream = splunkBunyan.createStream(config);

// Note: splunkStream must be set to an element in the streams array
var Logger = bunyan.createLogger({
    name: "my logger",
    streams: [
        splunkStream
    ]
});

var payload = {
    // Message can be anything; doesn't have to be an object
    message: {
        temperature: "70F",
        chickenCount: 500
    }
};

console.log("Sending payload", payload);
Logger.info(payload, "Chicken coup looks stable.");
