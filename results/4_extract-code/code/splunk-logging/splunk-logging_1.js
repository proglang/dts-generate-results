var SplunkLogger = require("splunk-logging").Logger;

var config = {
    token: "your-token-here",
    url: "https://splunk.local:8088"
};

var Logger = new SplunkLogger(config);

// Enable SSL certificate validation
Logger.requestOptions.strictSSL = true;
