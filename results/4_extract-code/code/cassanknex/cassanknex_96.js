// create a new dse-driver connection
var dse = require("dse-driver");
var dseClient = new dse.Client({
  contactPoints: ["10.0.0.2"],
  queryOptions: {
    prepare: true
  },
  socketOptions: {
    readTimeout: 0
  },
  profiles: []
});

// initialize dse-driver connection
dseClient.connect(function (err) {
  if (err) {
    console.log("Error initializing dse-driver", err);
  }
  else {
    // provide connection to cassanknex constructor
    var cassanKnex = require("cassanknex")({
      connection: dseClient,
      debug: false
    });

    cassanKnex.on("ready", function (err) {
      // ...
    });
  }
});
