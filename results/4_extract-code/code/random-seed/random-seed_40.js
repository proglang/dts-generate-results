var seed = 'Hello World',
	rand1 = require('random-seed').create(seed),
	rand2 = require('random-seed').create(seed);
console.log(rand1(100), rand2(100));
