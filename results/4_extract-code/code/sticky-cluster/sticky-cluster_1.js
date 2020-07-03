require('sticky-cluster')(

  // server initialization function
  function (callback) {
    var http = require('http');
    var app = require('express')();
    var server = http.createServer(app);
      
    // configure an app
      // do some async stuff if needed
      
    // don't do server.listen(), just pass the server instance into the callback
    callback(server);
  },
  
  // options
  {
    concurrency: 10,
    port: 3000,
    debug: true,
    env: function (index) { return { stickycluster_worker_index: index }; }
  }
);
