
var dot = require('dot-object');
var _s = require('underscore.string');
var obj = { id: 100 };

// use one modifier
dot.str('my.title', 'this is my title', obj, _s.slugify);

// multiple modifiers
dot.str('my.title', '   this is my title  ', obj, [_s.trim, _s.slugify]);

console.log(obj);
