var chardet = require('chardet');
chardet.detect(Buffer.alloc('hello there!'));
// or
chardet.detectFile('/path/to/file', function(err, encoding) {});
// or
chardet.detectFileSync('/path/to/file');
