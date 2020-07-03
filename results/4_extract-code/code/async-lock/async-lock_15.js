var AsyncLock = require('async-lock');
var lock = new AsyncLock();

/**
 * @param {String|Array} key 	resource key or keys to lock
 * @param {function} fn 	execute function
 * @param {function} cb 	(optional) callback function, otherwise will return a promise
 * @param {Object} opts 	(optional) options
 */
lock.acquire(key, function(done) {
	// async work
	done(err, ret);
}, function(err, ret) {
	// lock released
}, opts);

// Promise mode
lock.acquire(key, function() {
	// return value or promise
}, opts).then(function() {
	// lock released
});
