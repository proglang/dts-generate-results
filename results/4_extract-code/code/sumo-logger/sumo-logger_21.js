const SumoLogger = require('sumo-logger');
const opts = {
    endpoint: 'your HTTP Source endpoint',
    clientUrl: 'http://yourDomain.com/path/to/page' // NODE version only,
    // ... any other options ...
};

// Instantiate the SumoLogger
const sumoLogger = new SumoLogger(opts);

// Push a message to be logged
sumoLogger.log('event message to log', {
  sessionKey: 'your session key value',
  url: 'https://youDomain.com/actual/page/served'
}).then(() => /* handle positive response */)
.catch(() => /* handle error response */);

// Flush any logs, typically this line would be in your shutdown code
sumoLogger.flushLogs();
