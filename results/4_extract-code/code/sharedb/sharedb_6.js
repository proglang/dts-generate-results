var ShareDB = require('sharedb');
ShareDB.logger.setMethods({
  info: () => {},                         // Silence info
  warn: () => alerts.warn(arguments),     // Forward warnings to alerting service
  error: () => alerts.critical(arguments) // Remap errors to critical alerts
});
