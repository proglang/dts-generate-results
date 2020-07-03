var lolex = require("lolex");
var context = {
    setTimeout: setTimeout // By default context.setTimeout uses the global setTimeout
}
var clock = lolex.install({target: context});

context.setTimeout(fn, 15); // Schedules with clock.setTimeout

clock.uninstall();
// context.setTimeout is restored to the original implementation
