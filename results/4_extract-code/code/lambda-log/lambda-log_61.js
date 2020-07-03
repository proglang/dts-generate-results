const log = require('lambda-log');
const MyCustomLogMessageClass = require('./myCustomLogMessageClass.js');

log.LogMessage = MyCustomLogMessageClass;
