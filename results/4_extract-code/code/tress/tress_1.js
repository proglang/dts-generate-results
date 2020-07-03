// old code:
var async = require('async');
var q = async.queue(function(job, done){/*...*/});
/*...*/

// new code:
var tress = require('tress');
var q = tress(function(job, done){/*...*/});
/*...*/

