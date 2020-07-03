var cache = require('express-redis-cache');
var client1 = cache({ host: "...", port: "..." });
var client2 = cache({ host: "...", port: "..." });
...
