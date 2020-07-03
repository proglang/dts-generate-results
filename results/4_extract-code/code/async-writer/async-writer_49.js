var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

var out = require('async-writer').create(stream)
    .on('error', function(err) {
        // Something went wrong during writing
    })
    .on('end', function() {
        // Value of output: "ABC"
    });

out.write('A');

var asyncOut = out.beginAsync();
require('fs').createReadStream('b.txt', 'utf8')
    .pipe(asyncOut);

out.write('C');
out.end();
