var acl = require('acl');

// Using redis backend
acl = new acl(new acl.redisBackend(redisClient, prefix));

// Or Using the memory backend
acl = new acl(new acl.memoryBackend());

// Or Using the mongodb backend
acl = new acl(new acl.mongodbBackend(dbInstance, prefix));
