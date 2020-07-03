// Specify timeout
var lock = new AsyncLock({timeout: 5000});
lock.acquire(key, fn, function(err, ret) {
	// timed out error will be returned here if lock not acquired in given time
});

// Set max pending tasks
var lock = new AsyncLock({maxPending: 1000});
lock.acquire(key, fn, function(err, ret) {
	// Handle too much pending error
})

// Whether there is any running or pending async function
lock.isBusy();

// Use your own promise library instead of the global Promise variable
var lock = new AsyncLock({Promise: require('bluebird')}); // Bluebird
var lock = new AsyncLock({Promise: require('q')}); // Q

// Add a task to the front of the queue waiting for a given lock
lock.acquire(key, fn1, cb); // runs immediately
lock.acquire(key, fn2, cb); // added to queue
lock.acquire(key, priorityFn, cb, {skipQueue: true}); // jumps queue and runs before fn2
