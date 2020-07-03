var java = require('java');

java.asyncOptions = {
  asyncSuffix: "",
  syncSuffix: "Sync",
  ifReadOnlySuffix: "_alt"
};

var Test = java.import('Test');
Test.caller_alt(function(err, result) { ... });  // OK
var value = Test.NestedEnum.name_alt;  // OK
