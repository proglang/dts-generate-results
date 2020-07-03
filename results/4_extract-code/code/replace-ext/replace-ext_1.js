var replaceExt = require('replace-ext');

var path = '/some/dir/file.js';
var newPath = replaceExt(path, '.coffee');

console.log(newPath); // /some/dir/file.coffee
