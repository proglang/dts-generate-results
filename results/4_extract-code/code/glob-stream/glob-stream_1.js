var gs = require('glob-stream');

var readable = gs('./files/**/*.coffee', { /* options */ });

var writable = /* your WriteableStream */

readable.pipe(writable);
