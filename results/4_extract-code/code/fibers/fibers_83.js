var Future = require('fibers/future');
var fs = Future.wrap(require('fs'));

Future.task(function() {
	// Get a list of files in the directory
	var fileNames = fs.readdirFuture('.').wait();
	console.log('Found '+ fileNames.length+ ' files');

	// Stat each file
	var stats = [];
	for (var ii = 0; ii < fileNames.length; ++ii) {
		stats.push(fs.statFuture(fileNames[ii]));
	}
	stats.map(function(f) {
		f.wait()
	});

	// Print file size
	for (var ii = 0; ii < fileNames.length; ++ii) {
		console.log(fileNames[ii]+ ': '+ stats[ii].get().size);
	}
}).detach();
