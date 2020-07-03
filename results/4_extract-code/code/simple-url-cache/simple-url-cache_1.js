
var simpleCache = require('./../dist/simple-cache.min').CacheEngine;
var common = require('./helper/common');
var cacheRules = require('./helper/cacheRules');

describe('The fileStorage', function() {

    var storageConfig = {
        type: 'mongo',
        ... other config values here
    };

    var mongoCache = new simpleCache(storageConfig, cacheRules);

    common(mongoCache);

});
