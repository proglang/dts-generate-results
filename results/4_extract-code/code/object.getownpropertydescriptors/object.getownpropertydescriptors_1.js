var getDescriptors = require('object.getownpropertydescriptors');
var assert = require('assert');
var obj = { normal: Infinity };
var enumDescriptor = {
	enumerable: false,
	writable: false,
	configurable: true,
	value: true
};
var writableDescriptor = {
	enumerable: true,
	writable: true,
	configurable: true,
	value: 42
};
var symbol = Symbol();
var symDescriptor = {
	enumerable: true,
	writable: true,
	configurable: false,
	value: [symbol]
};

Object.defineProperty(obj, 'enumerable', enumDescriptor);
Object.defineProperty(obj, 'writable', writableDescriptor);
Object.defineProperty(obj, 'symbol', symDescriptor);

var descriptors = getDescriptors(obj);

assert.deepEqual(descriptors, {
	normal: {
		enumerable: true,
		writable: true,
		configurable: true,
		value: Infinity
	},
	enumerable: enumDescriptor,
	writable: writableDescriptor,
	symbol: symDescriptor
});
