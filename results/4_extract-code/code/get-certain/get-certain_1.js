const getCertain = require('get-certain');

const map = new Map();

map.set('foo', 1);

// Returns 1.
getCertain(map, 'foo');

// This throws.
getCertain(map, 'bar');

// This throws with a custom message.
getCertain(map, 'bar', 'This map is barless.');
