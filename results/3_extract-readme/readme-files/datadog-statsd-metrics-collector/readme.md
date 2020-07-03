# datadog-statsd-metrics-collector
A wrapper for for [node-dogstatsd][] that buffers and rolls up metrics into efficient calls to a Datadog StatsD server.

# Install

```sh
npm install datadog-statsd-metrics-collector node-dogstatsd
```

# Usage

```js
const StatsD = require('node-dogstatsd').StatsD
const Collector = require('datadog-statsd-metrics-collector');

const dd = new Collector(new StatsD('example.org', 8125));
dd.increment('test.metric', 1, ['tag:first']);
```

# Buffered stats

- increment
- incrementBy
- decrement
- decrementBy

### TODO

- histagram

# API

Aside from the constructor all StatsD calls proxied to [node-dogstatsd][].

## constructor(client, delayMilliseconds)

|arg|type|required|default|
|:---|:---|:---|:---|
|client|instanceof [node-dogstatsd][]|yes|undefined|
|delayMilliseconds|number|no|10000|

## increment(metrics, sample_rate, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|sample_rate|number|no|1|
|tags|array[string]|no|undefined|

## incrementBy(metrics, value, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|value|number|no|1|
|tags|array[string]|no|undefined|

## decrement(metrics, sample_rate, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|sample_rate|number|no|1|
|tags|array[string]|no|undefined|

## decrementBy(metrics, value, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|value|number|no|1|
|tags|array[string]|no|undefined|

## timing(metric, time, sample_rate, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|time|number|yes|undefined|
|sample_rate|number|no|1|
|tags|array[string]|no|undefined|

## gauge(metric, value, sample_rate, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|value|number|yes|undefined|
|sample_rate|number|no|1|
|tags|array[string]|no|undefined|

## histogram(metric, value, sample_rate, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|value|number|yes|undefined|
|sample_rate|number|no|1|
|tags|array[string]|no|undefined|

## set(metric, value, sample_rate, tags)

|arg|type|required|default|
|:---|:---|:---|:---|
|metric|string|yes|undefined|
|value|number|yes|undefined|
|sample_rate|number|no|1|
|tags|array[string]|no|undefined|





[node-dogstatsd]: https://github.com/mrbar42/node-dogstatsd



