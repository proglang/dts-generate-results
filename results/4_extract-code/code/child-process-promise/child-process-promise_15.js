var spawn = require('child-process-promise').spawn;

var promise = spawn('echo', ['hello']);

var childProcess = promise.childProcess;

console.log('[spawn] childProcess.pid: ', childProcess.pid);
childProcess.stdout.on('data', function (data) {
    console.log('[spawn] stdout: ', data.toString());
});
childProcess.stderr.on('data', function (data) {
    console.log('[spawn] stderr: ', data.toString());
});

promise.then(function () {
        console.log('[spawn] done!');
    })
    .catch(function (err) {
        console.error('[spawn] ERROR: ', err);
    });
