var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();

// Generates a random number on [0,1) real interval (same interval as Math.random)
generator.random();

// [0, 4294967295]
generator.random_int();

// [0,1]
generator.random_incl();

// (0,1)
generator.random_excl();

// [0,1) with 53-bit resolution
generator.random_long();

// [0, 2147483647]
generator.random_int31();
