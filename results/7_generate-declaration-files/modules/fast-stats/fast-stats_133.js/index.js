var assert = require('assert'),
    Stats = require('fast-stats').Stats;

var s1 = new Stats({buckets: [1, 2, 3, 5, 8, 13]});
for(var i=0; i<20; i++)
	s1.push(i);

var d = s1.distribution();

d.forEach(function(e) {
	switch(e.bucket) {
		case 0.5: assert.equal(e.count, 1);	// 0
			break;
		case 1.5: assert.equal(e.count, 1);	// 1
			break;
		case 2.5: assert.equal(e.count, 1);	// 2
			break;
		case 4: assert.equal(e.count, 2);	// 3, 4
			break;
		case 6.5: assert.equal(e.count, 3);	// 5, 6, 7
			break;
		case 10.5: assert.equal(e.count, 5);	// 8, 9, 10, 11, 12
			break;
		case 16: assert.equal(e.count, 7);	// 13, 14, 15, 16, 17, 18, 19
			break;
		default: assert.fail(e.bucket, "", "", "Unexpected bucket");
	}
});
