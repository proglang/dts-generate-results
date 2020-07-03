var chardet = require('chardet');
chardet.detectAll(Buffer.alloc('hello there!'));
// or
chardet.detectFileAll('/path/to/file', function(err, encoding) {});
// or
chardet.detectFileAllSync('/path/to/file');

//Returned value is an array of objects sorted by confidence value in decending order
//e.g. [{ confidence: 90, name: 'UTF-8'}, {confidence: 20, name: 'windows-1252', lang: 'fr'}]
