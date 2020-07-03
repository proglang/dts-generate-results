var dns = require('dns');

// original code
dns.resolve('chilts.org', function(err, addresses) {
    if (err) {
        // do something to recover from this error
        return;
    }

    // do something with addresses
    console.log(addresses);
});
