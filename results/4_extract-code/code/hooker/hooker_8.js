var hooker = require('hooker');
// Simple logging.
hooker.hook(Math, "max", function() {
  console.log(arguments.length + " arguments passed");
});
Math.max(5, 6, 7) // logs: "3 arguments passed", returns 7

hooker.unhook(Math, "max"); // (This is assumed between all further examples)
Math.max(5, 6, 7) // 7

// Returning hooker.override(value) overrides the original value.
hooker.hook(Math, "max", function() {
  if (arguments.length === 0) {
    return hooker.override(9000);
  }
});
Math.max(5, 6, 7) // 7
Math.max() // 9000

// Auto-unhook after one execution.
hooker.hook(Math, "max", {
  once: true,
  pre: function() {
    console.log("Init something here");
  }
});
Math.max(5, 6, 7) // logs: "Init something here", returns 7
Math.max(5, 6, 7) // 7

// Filter `this` and arguments through a pre-hook function.
hooker.hook(Math, "max", {
  pre: function() {
    var args = [].map.call(arguments, function(num) {
      return num * 2;
    });
    return hooker.filter(this, args); // thisValue, arguments
  }
});
Math.max(5, 6, 7) // 14

// Modify the original function's result with a post-hook function.
hooker.hook(Math, "max", {
  post: function(result) {
    return hooker.override(result * 100);
  }
});
Math.max(5, 6, 7) // 700

// Hook every Math method. Note: if Math's methods were enumerable, the second
// argument could be omitted. Since they aren't, an array of properties to hook
// must be explicitly passed. Non-method properties will be skipped.
// See a more generic example here: http://bit.ly/vvJlrS
hooker.hook(Math, Object.getOwnPropertyNames(Math), {
  passName: true,
  pre: function(name) {
    console.log("=> Math." + name, [].slice.call(arguments, 1));
  },
  post: function(result, name) {
    console.log("<= Math." + name, result);
  }
});

var result = Math.max(5, 6, 7);
// => Math.max [ 5, 6, 7 ]
// <= Math.max 7
result // 7

result = Math.ceil(3.456);
// => Math.ceil [ 3.456 ]
// <= Math.ceil 4
result // 4
