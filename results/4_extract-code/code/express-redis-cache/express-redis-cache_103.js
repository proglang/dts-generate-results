// Set default lifetime to 60 seconds for all entries
var cache = require('express-redis-cache')({ expire: 60 });
