var LineStream = require('byline').LineStream;

var input = fs.createReadStream('sample.txt');
var output = fs.createWriteStream('nolines.txt');

var lineStream = new LineStream();
input.pipe(lineStream);
lineStream.pipe(output);

