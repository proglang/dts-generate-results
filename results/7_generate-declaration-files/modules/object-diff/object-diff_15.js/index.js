var diff = require('object-diff');

var a = {
	speed: 4,
	power: 54,
	height: undefined,
	level: 1,
};

var b = {
	speed: 4,			// unchanged
	power: 22,			// changed
	level: undefined,	// changed
	weight: 10,			// added
};

diff(a, b);
/*
{
	power: 22,
	level: undefined,
	weight: 10,
}
*/


// using a custom equality function

var past = '2016-04-24T10:39:23.419Z';

diff.custom({
	equal: dateAwareComparator,
}, {
	then: new Date(past),
}, {
	then: new Date(past),
});
/*
{}
*/

function dateAwareComparator( a, b ){
	if (a instanceof Date && b instanceof Date)
		return a.getTime() === b.getTime();

	return a === b;
}

