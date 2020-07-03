var cacheManager = require('cache-manager');
var memoryCache = cacheManager.caching({store: 'memory', max: 100, ttl: 10/*seconds*/});
var ttl = 5;
// Note: callback is optional in set() and del().

memoryCache.set('foo', 'bar', {ttl: ttl}, function(err) {
    if (err) { throw err; }

    memoryCache.get('foo', function(err, result) {
        console.log(result);
        // >> 'bar'
        memoryCache.del('foo', function(err) {});
    });
});

function getUser(id, cb) {
    setTimeout(function () {
        console.log("Returning user from slow database.");
        cb(null, {id: id, name: 'Bob'});
    }, 100);
}

var userId = 123;
var key = 'user_' + userId;

// Note: ttl is optional in wrap()
memoryCache.wrap(key, function (cb) {
    getUser(userId, cb);
}, {ttl: ttl}, function (err, user) {
    console.log(user);

    // Second time fetches user from memoryCache
    memoryCache.wrap(key, function (cb) {
        getUser(userId, cb);
    }, function (err, user) {
        console.log(user);
    });
});

// Outputs:
// Returning user from slow database.
// { id: 123, name: 'Bob' }
// { id: 123, name: 'Bob' }
