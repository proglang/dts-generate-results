var cassanKnex = require("cassanknex")(<DRIVER_OPTIONS|undefined>);
var qb = cassanKnex(KEYSPACE).QUERY_COMMAND()
          .QUERY_MODIFIER_1()
          .
          .
          .QUERY_MODIFIER_N();

var cql = qb.cql(); // get the cql statement
