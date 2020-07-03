var split = require('binary-split'),
	fs = require('fs');

tilereduce({
	tileStream: fs.createReadStream('/path/to/tile-file').pipe(split()),
	// ...
})
