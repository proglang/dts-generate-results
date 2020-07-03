var cache = require('memory-cache');

// now just use the cache

cache.put('foo', 'bar');
console.log(cache.get('foo'));

// that wasn't too interesting, here's the good part

cache.put('houdini', 'disappear', 100, function(key, value) {
    console.log(key + ' did ' + value);
}); // Time in ms

console.log('Houdini will now ' + cache.get('houdini'));

setTimeout(function() {
    console.log('Houdini is ' + cache.get('houdini'));
}, 200);


// create new cache instance
var newCache = new cache.Cache();

newCache.put('foo', 'newbaz');

setTimeout(function() {
  console.log('foo in old cache is ' + cache.get('foo'));
  console.log('foo in new cache is ' + newCache.get('foo'));
}, 200);
