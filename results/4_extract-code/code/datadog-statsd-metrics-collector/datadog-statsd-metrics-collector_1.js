const StatsD = require('node-dogstatsd').StatsD
const Collector = require('datadog-statsd-metrics-collector');

const dd = new Collector(new StatsD('example.org', 8125));
dd.increment('test.metric', 1, ['tag:first']);
