var Cache = require('stale-lru-cache');

var cache = new Cache({
    maxSize: 100,
    maxAge: 600,
    staleWhileRevalidate: 86400,
    revalidate: function (key, callback) {
        fetchSomeAsyncData(callback);
    }
});

cache.set('key', 'value'); // true
cache.get('key'); // 'value'
