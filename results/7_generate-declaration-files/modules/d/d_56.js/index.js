var d = require('d');
var lazy = require('d/lazy');

var Foo = function () {};
Object.defineProperties(Foo.prototype, lazy({
  items: d(function () { return []; })
}));

var foo = new Foo();
foo.items.push(1, 2); // foo.items array created and defined directly on foo
