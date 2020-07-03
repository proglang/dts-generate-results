var Q = require('q-retry');

Q
    .retry(function () {
        if (Math.random() < 0.8) {
            throw new Error('err 1');
        }

        return Q.delay(Math.floor(Math.random() * 1000))
            .then(function () {
                if (Math.random() < 0.8) {
                    throw new Error('err 2');
                }
                return 'expected result.';
            });
    }, function (reason, retries) {
        console.log('failed with ' + reason + ', ' + retries + ' retries left.');
    }, 100)
    .then(function (str) {
        console.log(str);
    })
    .fail(function (reason) {
        console.log(reason);
    });
