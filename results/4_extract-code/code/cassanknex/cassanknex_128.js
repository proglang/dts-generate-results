var cassanKnex = require("cassanknex")({
  connection: { // default is 'undefined'
    contactPoints: ["10.0.0.2"]
  },
  exec: { // default is '{}'
    prepare: false // default is 'true'
  }
});

cassanKnex.on("ready", function (err) {

  if (err)
    console.error("Error Connecting to Cassandra Cluster", err);
  else {
    console.log("Cassandra Connected");

  var qb("keyspace").select("id", "foo", "bar", "baz")
    .ttl("foo")
    .where("id", "=", "1")
    .orWhere("id", "in", ["2", "3"])
    .orWhere("baz", "=", "bar")
    .andWhere("foo", "IN", ["baz", "bar"])
    .limit(10)
    .from("table")
    .exec(function(err, res) {

      // executes query :
      //  'SELECT "id","foo","bar","baz",ttl("foo") FROM "keyspace"."table"
      //    WHERE "id" = ? OR "id" in (?, ?)
      //    OR "baz" = ? AND "foo" IN (?, ?)
      //    LIMIT 10;'
      // with bindings array  : [ '1', '2', '3', 'bar', 'baz', 'bar' ]

      if (err)
        console.error("error", err);
      else
        console.log("res", res);

    });
  }
});

