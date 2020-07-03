// In the browser distribution, a global `lolex` is already available
var lolex = require("lolex");

var clock = lolex.install();
// Equivalent to
// var clock = lolex.install(typeof global !== "undefined" ? global : window);

setTimeout(fn, 15); // Schedules with clock.setTimeout

clock.uninstall();
// setTimeout is restored to the native implementation
