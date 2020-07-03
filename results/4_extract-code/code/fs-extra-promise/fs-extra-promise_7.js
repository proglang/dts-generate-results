var fs = require('fs-extra-promise');
fs.readFileAsync(path).then(function(data) {
	console.log(data);
});
