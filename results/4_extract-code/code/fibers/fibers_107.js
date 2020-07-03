var Future = require('fibers/future'), wait = Future.wait;

// This function returns a future which resolves after a timeout. This
// demonstrates manually resolving futures.
function sleep(ms) {
	var future = new Future;
	setTimeout(function() {
		future.return();
	}, ms);
	return future;
}

// You can create functions which automatically run in their own fiber and
// return futures that resolve when the fiber returns (this probably sounds
// confusing.. just play with it to understand).
var calcTimerDelta = function(ms) {
	var start = new Date;
	sleep(ms).wait();
	return new Date - start;
}.future(); // <-- important!

// And futures also include node-friendly callbacks if you don't want to use
// wait()
calcTimerDelta(2000).resolve(function(err, val) {
	console.log('Set timer for 2000ms, waited '+ val+ 'ms');
});
