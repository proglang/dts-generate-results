var xmlrpc = require('xmlrpc');
var util = require('util');

// create your custom class
var YourType = function (raw) {
  xmlrpc.CustomType.call(this, raw);
};

// inherit everything
util.inherits(YourType, xmlrpc.CustomType);

// set a custom tagName (defaults to 'customType')
YourType.prototype.tagName = 'yourType';

// optionally, override the serializer
YourType.prototype.serialize = function (xml) {
  var value = somefunction(this.raw);
  return xml.ele(this.tagName).txt(value);
}
