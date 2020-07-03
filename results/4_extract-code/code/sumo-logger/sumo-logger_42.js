const SumoLogger = require('sumo-logger');
const opts = {
    endpoint: 'your HTTP Source endpoint',
    graphite: true // enable graphite metrics
    // ... any other options ...
};

// Instantiate the SumoLogger
const sumoLogger = new SumoLogger(opts);

// Push a metric
sumoLogger.log({
  path: 'metric.path', // metric path as a dot separated string
  value: 100 // value of the metric
}).then(() => /* handle positive response */)
.catch(() => /* handle error response */);
