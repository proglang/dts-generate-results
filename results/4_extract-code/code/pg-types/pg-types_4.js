var types = require('pg').types
types.setTypeParser(20, function(val) {
  return parseInt(val)
})
