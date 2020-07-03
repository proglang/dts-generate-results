var Dot = require('dot-object');

var dot = new Dot('->');

var _s = require('underscore.string');

var row = {
  'nr': 200,
  'doc->name': '    My Document   '
};

var mods = {
  "doc->name": [_s.trim, _s.underscored],
};

dot.object(row, mods);

console.log(row);