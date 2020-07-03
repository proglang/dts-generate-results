normalizeData = require('normalize-package-data')
packageData = require("./package.json")
normalizeData(packageData)
// packageData is now normalized
