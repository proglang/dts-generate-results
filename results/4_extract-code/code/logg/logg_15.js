var logg = require('logg');
var syslog = require('node-syslog');

// setup syslog
syslog.init('kickq', syslog.LOG_PID | syslog.LOG_ODELAY, syslog.LOG_LOCAL0);

// do not log to console.
logg.removeConsole();

// listen for log messages
logg.on('', function(logRecord) {

  // format the message
  var message = logg.formatRecord(logRecord, true);

  // relay to syslog using LOG_INFO for WARN and above messages
  // LOG_DEBUG for the test
  if (logg.Level.WARN <= logRecord.level) {
    syslog.log(syslog.LOG_INFO, message);
  } else {
    syslog.log(syslog.LOG_DEBUG, message);
  }
});
