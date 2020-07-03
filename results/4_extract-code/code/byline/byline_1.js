var fs = require('fs'),
    byline = require('byline');

var stream = byline(fs.createReadStream('sample.txt', { encoding: 'utf8' }));
