var Logger = require('nedb-logger')
  , logger = new Logger({ filename: "path/to/datafile" });

logger.insert({ hello: "world", number: 42, timestamp: new Date() }, function (err) {
  // err will not be null if the object is not well formatted for NeDB
  // meaning one of the keys contains a dot or begins with a dollar sign
});

// You can insert arrays of documents
// The callback is optional
logger.insert([{ planet: "earth" }, { planet: "Mars" }]);

