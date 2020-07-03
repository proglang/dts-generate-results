var xor = require('bitwise-xor');

xor(new Buffer('00ff', 'hex'), new Buffer('3344', 'hex'))

// returns <Buffer 33 bb>
