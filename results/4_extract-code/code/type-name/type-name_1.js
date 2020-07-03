var typeName = require('type-name');
var assert = require('assert');

assert(typeName(null) === 'null');
assert(typeName(undefined) === 'undefined');
assert(typeName('foo') === 'string');
assert(typeName(5) === 'number');
assert(typeName(false) === 'boolean');
assert(typeName(/^not/) === 'RegExp');
assert(typeName(['foo', 4]) === 'Array');
assert(typeName({name: 'bar'}) === 'Object');
assert(typeName(function () {}) === 'function');
assert(typeName(new String('foo')) === 'String');
assert(typeName(new Number('3')) === 'Number');
assert(typeName(new Boolean('1')) === 'Boolean');
assert(typeName(new Date()) === 'Date');
assert(typeName(new RegExp('^not', 'g')) === 'RegExp');
assert(typeName(new Array()) === 'Array');
assert(typeName(new Object()) === 'Object');
assert(typeName(new Function('x', 'y', 'return x + y')) === 'function');
assert(typeName(new Error('error!')) === 'Error');
assert(typeName(new TypeError('type error!')) === 'TypeError');
assert(typeName(NaN) === 'number');
assert(typeName(Infinity) === 'number');
assert(typeName(Math) === 'Math');
assert(typeName(JSON) === 'JSON'); // IE8+
assert(typeName((function(){ return arguments; })()) === 'Arguments');  // IE9+
assert(typeName(Symbol("FOO")) === 'symbol');
assert(typeName(Promise.resolve(1)) === 'Promise');

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var AnonPerson = function(name, age) {
    this.name = name;
    this.age = age;
};

assert(typeName(new Person('alice', 5)) === 'Person');
assert(typeName(new AnonPerson('bob', 4)) === '');

assert(typeName(new(class Foo { constructor() {} })) === 'Foo');
assert(typeName(new(class { constructor() {} })) === '');
