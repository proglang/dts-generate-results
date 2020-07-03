const genericPool = require("generic-pool");
const DbDriver = require("some-db-driver");

/**
 * Step 1 - Create pool using a factory object
 */
const factory = {
  create: function() {
    return DbDriver.createClient();
  },
  destroy: function(client) {
    client.disconnect();
  }
};

const opts = {
  max: 10, // maximum size of the pool
  min: 2 // minimum size of the pool
};

const myPool = genericPool.createPool(factory, opts);

/**
 * Step 2 - Use pool in your code to acquire/release resources
 */

// acquire connection - Promise is resolved
// once a resource becomes available
const resourcePromise = myPool.acquire();

resourcePromise
  .then(function(client) {
    client.query("select * from foo", [], function() {
      // return object back to pool
      myPool.release(client);
    });
  })
  .catch(function(err) {
    // handle error - this is generally a timeout or maxWaitingClients
    // error
  });

/**
 * Step 3 - Drain pool during shutdown (optional)
 */
// Only call this once in your application -- at the point you want
// to shutdown and stop using this pool.
myPool.drain().then(function() {
  myPool.clear();
});

