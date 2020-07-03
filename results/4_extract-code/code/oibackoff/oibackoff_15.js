var backoff = require('oibackoff').backoff({
    algorithm  : 'exponential',
    delayRatio : 0.2,
    maxTries   : 5,
});

backoff(dns.resolve, 'chilts.org', function(err, addresses, priorErrors) {
    if (err) {
        // do something to recover from this error
        return;
    }

    // do something with addresses
    console.log(addresses);
});
