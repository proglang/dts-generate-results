var reactMixin = require('react-mixin');
var toUnsafe = require('react-mixin/toUnsafe');
var someMixin = require('some-mixin');

var fixedMixin = toUnsafe(someMixin);

reactMixin(Foo.prototype, fixedMixin);
