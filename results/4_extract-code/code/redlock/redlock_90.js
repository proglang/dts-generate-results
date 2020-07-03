var using = require('bluebird').using;

// the string identifier for the resource you want to lock
var resource = 'locks:account:322456';

// the maximum amount of time you want the resource locked,
// keeping in mind that you can extend the lock up until
// the point when it expires
var ttl = 1000;

// if we weren't able to reach redis, your lock will eventually
// expire, but you probably want to do something like log that
// an error occurred; if you don't pass a handler, this error
// will be ignored
function unlockErrorHandler(err) {
	console.error(err);
}

using(redlock.disposer(resource, ttl, unlockErrorHandler), function(lock) {

	// ...do something here...

}); // <-- unlock is automatically handled by bluebird

