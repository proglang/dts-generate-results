var gen = require('random-seed'); // create a generator

// these generators produce different numbers
var rand1 = gen.create(); // method 1
var rand2 = new gen();    // method 2
var rand3 = gen();        // method 3

// these generators will produce
// the same sequence of numbers
var seed = 'My Secret String Value';
var rand4 = gen.create(seed);
var rand5 = new gen(seed);
var rand6 = gen(seed);
