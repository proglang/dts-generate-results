// 2 clients at a time
var sem = require('semaphore')(2);
var server = require('http').createServer(function(req, res) {
	res.write("Then good day, madam!");

	sem.take(function() {
		res.end("We hope to see you soon for tea.");
		sem.leave();
	});
});
