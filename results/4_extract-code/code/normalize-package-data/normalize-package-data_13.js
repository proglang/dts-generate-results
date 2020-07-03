normalizeData = require('normalize-package-data')
packageData = require("./package.json")
warnFn = function(msg) { console.error(msg) }
normalizeData(packageData, warnFn)
// packageData is now normalized. Any number of warnings may have been logged.
