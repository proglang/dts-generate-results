var oibackoff = require('oibackoff');

// 0.4, 0.8, 1.6, 3.2, 6.4, ...
var backoff = oibackoff.backoff({
    algorithm  : 'exponential',
    delayRatio : 0.4,
});

// 1, 2, 3, 4, 5, ...
var backoff = oibackoff.backoff({
    algorithm  : 'incremental',
    delayRatio : 1,
});

// 0.5, 0.5, 1.0, 1.5, 2.5, 4, ...
var backoff = oibackoff.backoff({
    algorithm  : 'fibonacci',
    delayRatio : 0.5,
});
