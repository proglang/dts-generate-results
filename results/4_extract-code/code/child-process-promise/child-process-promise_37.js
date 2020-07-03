var spawn = require('child-process-promise').spawn;

spawn('echo', ['hello'], { capture: [ 'stdout', 'stderr' ]})
    .then(function (result) {
        console.log('[spawn] stdout: ', result.stdout.toString());
    })
    .catch(function (err) {
        console.error('[spawn] stderr: ', err.stderr);
    });
