var SplunkLogger = require("splunk-logging").Logger;

var config = {
    token: "your-token-here",
    url: "https://splunk.local:8088"
};

var Logger = new SplunkLogger(config);

var payload = {
    // Message can be anything; doesn't have to be an object
    message: {
        temperature: "70F",
        chickenCount: 500
    }
};

console.log("Sending payload", payload);
Logger.send(payload, function(err, resp, body) {
    // If successful, body will be { text: 'Success', code: 0 }
    console.log("Response from Splunk", body);
});
