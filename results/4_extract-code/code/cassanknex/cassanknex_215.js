var cassanKnex = require("cassanknex")({
  connection: {
    contactPoints: ["10.0.0.2"]
  }
});

cassanKnex.on("ready", function (err) {

  if (err)
    console.error("Error Connecting to Cassandra Cluster", err);
  else {
    console.log("Cassandra Connected");

    // get the Cassandra Driver
    var client = cassanKnex.getClient();
  }
});
