var progress = require('progress-stream');
var fs = require('fs');

var stat = fs.statSync(filename);
var str = progress({
	length: stat.size,
	time: 100 /* ms */
});

str.on('progress', function(progress) {
	console.log(progress);

	/*
	{
		percentage: 9.05,
		transferred: 949624,
		length: 10485760,
		remaining: 9536136,
		eta: 42,
		runtime: 3,
		delta: 295396,
		speed: 949624
	}
	*/
});

fs.createReadStream(filename)
	.pipe(str)
	.pipe(fs.createWriteStream(output));
