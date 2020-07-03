var tableau = require('tableau')
var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
var mat = tableau(alpha);
var out = mat.reduce(function (p, c) {
  return p + c.join(' | ') + '\n';
}, "");

console.log(out);
