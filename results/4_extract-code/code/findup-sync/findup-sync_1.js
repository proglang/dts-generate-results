var findup = require('findup-sync');
findup(patternOrPatterns [, micromatchOptions]);

// Start looking in the CWD.
var filepath1 = findup('{a,b}*.txt');

// Start looking somewhere else, and ignore case (probably a good idea).
var filepath2 = findup('{a,b}*.txt', {cwd: '/some/path', nocase: true});
