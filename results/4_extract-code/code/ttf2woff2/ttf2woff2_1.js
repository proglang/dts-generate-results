var fs = require('fs');
var ttf2woff2 = require('ttf2woff2');

var input = fs.readFileSync('font.ttf');

fs.writeFileSync('font.woff2', ttf2woff2(input));

