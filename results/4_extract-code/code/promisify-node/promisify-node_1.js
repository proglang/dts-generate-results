var promisify = require("promisify-node");

var myObj = {
  myMethod: function(a, b, cb) {
    cb(a, b);
  }
};

// Store the original method to check later
var originalMethod = myObj.myMethod;

// Now store the result, since the 'true' value means it won't mutate 'myObj'.
var promisifiedObj = promisify(myObj, undefined, true);

// Intentionally cause a failure by passing an object and inspect the message.
promisifiedObj.myMethod({ msg: "Failure!" }, null).then(null, function(err) {
  console.log(err.msg);
});

// The original method is still intact
assert(myObj.myMethod === originalMethod);
assert(promisifiedObj.myMethod !== myObj.myMethod);
