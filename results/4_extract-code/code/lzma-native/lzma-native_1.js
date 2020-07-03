var lzma = require('lzma-native');

var compressor = lzma.createCompressor();
var input = fs.createReadStream('README.md');
var output = fs.createWriteStream('README.md.xz');

input.pipe(compressor).pipe(output);
