var bunyan = require('bunyan');
var bunyanLogentries = require('bunyan-logentries');

var logger = bunyan.createLogger({
  streams: [{
    level: 'info',
    stream: bunyanLogentries.createStream({token: token}),
    type: 'raw'
  }]
});
