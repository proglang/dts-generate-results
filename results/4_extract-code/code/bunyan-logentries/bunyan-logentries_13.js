var bunyan = require('bunyan');
var bunyanLogentries = require('bunyan-logentries');

var logger = bunyan.createLogger({
  streams: [{
    level: 'info',
    stream: bunyanLogentries.createStream({ 
      token: token,
      levels: ['debug', 'info', 'notice', 'warning', 'err', 'crit', 'alert', 'emerg'],
      timestamp: false,
      secure: true,
      host:'api.logentries.com'
    }),
    type: 'raw'
  }, {
    transform: function (logRecord) {
      // do whatever you like to the record and then return it
      logRecord.hostname = logRecord.hostname.toUpperCase();
      delete logRecord.v;
      return logRecord
    },
    defaultLevel: 'info'
  }]
});
