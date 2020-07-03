const prometheus = require('prom-client');
const gcStats = require('prometheus-gc-stats');

prometheus.collectDefaultMetrics();
const startGcStats = gcStats(prometheus.register); // gcStats() would have the same effect in this case
startGcStats();
