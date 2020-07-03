var SDC = require('statsd-client'),
	sdc = new SDC({host: 'statsd.example.com'});

var timer = new Date();
sdc.increment('some.counter'); // Increment by one.
sdc.gauge('some.gauge', 10); // Set gauge to 10
sdc.timing('some.timer', timer); // Calculates time diff
sdc.histogram('some.histogram', 10, {foo: 'bar'}) // Histogram with tags

sdc.close(); // Optional - stop NOW
