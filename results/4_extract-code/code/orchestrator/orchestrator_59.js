var Orchestrator = require('orchestrator');
var orchestrator = new Orchestrator();

// takes in a callback so the engine knows when it'll be done
orchestrator.add('one', function (cb) {
    // do stuff -- async or otherwise
    cb(err); // if err is not null or undefined, the orchestration will stop, and note that it failed
});

// identifies a dependent task must be complete before this one begins
orchestrator.add('two', ['one'], function () {
    // task 'one' is done now
});

orchestrator.start('one', 'two');
