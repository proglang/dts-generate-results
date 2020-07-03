var bunyan = require("bunyan");
var splunkBunyan = require("splunk-bunyan-logger");

var config = {
    token: "your-token-here",
    url: "https://splunk.local:8088"
};

var splunkStream = splunkBunyan.createStream(config);
// Enable SSL certificate validation
stream.logger.requestOptions.strictSSL = true;

// Note: splunkStream must be set to an element in the streams array
var Logger = bunyan.createLogger({
    name: "my logger",
    streams: [
        splunkStream
    ]
});
