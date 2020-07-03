var Integer = require('integer');

var a = Integer('7129837312139827189');
var b = a.subtract(1).shiftRight(3);
assert(b.equals('891229664017478398'));
