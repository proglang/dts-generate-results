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
out.write('B');
out.write('C');
out.end();
