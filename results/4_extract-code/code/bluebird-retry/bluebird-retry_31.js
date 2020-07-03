var retry = require('bluebird-retry');
var i = 0;
var err;
var swing = function() {
    i++;
    console.log('strike ' + i);
    if (i == 3) {
        throw new retry.StopError('yer out');
    }
    throw new Error('still up at bat');
};

retry(swing, {timeout: 10000})
.caught(function(e) {
    console.log(e.message)
});
