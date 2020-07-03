var promiseRetry = require('promise-retry');

// Simple example
promiseRetry(function (retry, number) {
    console.log('attempt number', number);

    return doSomething()
    .catch(retry);
})
.then(function (value) {
    // ..
}, function (err) {
    // ..
});

// Conditional example
promiseRetry(function (retry, number) {
    console.log('attempt number', number);

    return doSomething()
    .catch(function (err) {
        if (err.code === 'ETIMEDOUT') {
            retry(err);
        }

        throw err;
    });
})
.then(function (value) {
    // ..
}, function (err) {
    // ..
});
