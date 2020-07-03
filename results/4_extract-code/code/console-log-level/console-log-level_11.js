var log = require('console-log-level')({
  prefix: function (level) {
    return new Date().toISOString()
  },
  level: 'info'
})
