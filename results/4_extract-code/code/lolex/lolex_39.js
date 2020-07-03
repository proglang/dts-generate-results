var lolex = require("lolex");
var clock = lolex.install({shouldAdvanceTime: true, advanceTimeDelta: 40});

setTimeout(() => {
    console.log('this just timed out'); //executed after 40ms
}, 30);

setImmediate(() => {
    console.log('not so immediate'); //executed after 40ms
});

setTimeout(() => {
    console.log('this timed out after'); //executed after 80ms
    clock.uninstall();
}, 50);
