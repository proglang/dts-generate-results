var safeCompare = require('safe-compare');

safeCompare('hello world', 'hello world'); // -> true

safeCompare('hello', 'not hello'); // -> false
safeCompare('hello foo', 'hello bar'); // -> false
