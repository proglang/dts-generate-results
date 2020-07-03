var rison = require('rison');

rison.encode({any: "json", yes: true});
rison.encode_array(["A", "B", {supportsObjects: true}]);
rison.encode_object({supportsObjects: true, ints: 435});

// Rison
rison.encode({any: "json", yes: true});
// (any:json,yes:!t)

// O-Rison
rison.encode_object({supportsObjects: true, ints: 435});
// ints:435,supportsObjects:!t

// A-Rison
rison.encode_array(["A", "B", {supportsObjects: true}]);
// A,B,(supportsObjects:!t)

// Decode with: rison.decode, rison.decode_object, rison.decode_array
// Example:
rison.encode('(any:json,yes:!t)');
// { any: 'json', yes: true }
