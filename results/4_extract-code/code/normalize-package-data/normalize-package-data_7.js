normalizeData = require('normalize-package-data')
packageData = require("./package.json")
normalizeData(packageData, true)
// packageData is now normalized
