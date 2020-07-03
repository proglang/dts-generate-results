var blackholeLogger = require('bunyan-blackhole');

var logger = options.logger || blackholeLogger();

logger.info('Never bother checking again !');

