'use strict';

const deepFreeze = require('deep-freeze-es6');
const obj = deepFreeze({ map: new Map([[1,1], [2,2]]) });
obj.map.clear(); // Error: map is read-only
