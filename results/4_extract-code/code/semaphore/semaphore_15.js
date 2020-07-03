// Limit concurrent db access
var sem = require('semaphore')(1);
var server = require('http').createServer(function(req, res) {
	sem.take(function() {
		expensive_database_operation(function(err, res) {
			sem.leave();

			if (err) return res.end("Error");

			return res.end(res);
		});
	});
});
