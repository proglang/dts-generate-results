var cassanKnex = require("cassanknex")({
  connection: { // default is 'undefined'
    contactPoints: ["10.0.0.2"]
  },
  exec: { // default is '{}'
    prepare: false // default is 'true'
  }
});

cassanKnex.on("ready", function (err) {...});
