'use strict';

var
  CircularJSON = require('circular-json'),
  obj = { foo: 'bar' },
  str
;
  
obj.self = obj;
str = CircularJSON.stringify(obj);
