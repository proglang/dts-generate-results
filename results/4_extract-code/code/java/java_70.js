var java = require("java");
java.asyncOptions = {
  asyncSuffix: undefined,     // Don't generate node-style methods taking callbacks
  syncSuffix: "",              // Sync methods use the base name(!!)
  promiseSuffix: "Promise",   // Generate methods returning promises, using the suffix Promise.
  promisify: require('util').promisify // Needs Node.js version 8 or greater, see comment below
};
java.classpath.push("commons-lang3-3.1.jar");
java.classpath.push("commons-io.jar");

java.import("java.util.ArrayList"); // see NOTE below

java.newInstancePromise("java.util.ArrayList")
    .then(function(list) { return list.addPromise("item1"); })
    .then(function(list) { return list.addPromise("item2"); })
    .catch(function(err) { /* handle error */ });
