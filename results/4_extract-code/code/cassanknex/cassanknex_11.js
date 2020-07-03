var cassanKnex = require("cassanknex")({
  connection: {
    contactPoints: ["LIST OF CONNECTION POINTS"]
  }
});

cassanKnex.on("ready", function (err) {

  if (err)
    console.error("Error Connecting to Cassandra Cluster", err);
  else
    console.log("Cassandra Connected");

  var qb = cassanKnex(KEYSPACE).QUERY_COMMAND()
          .QUERY_MODIFIER_1()
          .
          .
          .QUERY_MODIFIER_N();

  // pass through to the underlying DataStax nodejs-driver 'execute' method

  qb.exec(function(err, res) {
    // do something w/ your query response
  });

  // OR pass through to the underlying DataStax nodejs-driver 'stream' method

  var onReadable = function () {
      // Readable is emitted as soon a row is received and parsed
      var row;
      while (row = this.read()) {
        console.log(row);
        // do something w/ the row response
      }
    }
    , onEnd = function () {
      // Stream ended, there aren't any more rows
      console.log("query finished");
    }
    , onError = function (err) {
      // Something went wrong: err is a response error from Cassandra
      console.log("query error", err);
    };

  // Invoke the stream method
  qb.stream({
    "readable": onReadable,
    "end": onEnd,
    "error": onError
  });

  // OR pass through to the underlying DataStax nodejs-driver 'eachRow' method

  var rowCallback = function (n, row) {
      // The callback will be invoked per each row as soon as they are received
      console.log(row);
      // do something w/ the row response
    }
    , errorCb = function (err) {
      // Something went wrong: err is a response error from Cassandra
      console.log("query error", err);
    };

  // Invoke the eachRow method
  qb.eachRow(rowCallback, errorCb);

  // Invoke the batch method to process multiple requests
  cassanKnex().batch([qb, qb], function(err, res) {
    // do something w/ your response
  });
});
