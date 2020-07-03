// Rate limit
var sem = require('semaphore')(10);
var server = require('http').createServer(function(req, res) {
	sem.take(function() {
		res.end(".");
		
		setTimeout(sem.leave, 500)
	});
});
