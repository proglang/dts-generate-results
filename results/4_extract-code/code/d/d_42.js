var d = require('d');
var autoBind = require('d/auto-bind');

var Foo = function () { this._count = 0; };
Object.defineProperties(Foo.prototype, autoBind({
  increment: d(function () { ++this._count; });
}));

var foo = new Foo();

// Increment foo counter on each domEl click
domEl.addEventListener('click', foo.increment, false);
