var domain = require('domain');
var lock = new AsyncLock({domainReentrant : true});

var d = domain.create();
d.run(function() {
	lock.acquire('key', function() {
		//Enter lock
		return lock.acquire('key', function() {
			//Enter same lock twice
		});
	});
});
