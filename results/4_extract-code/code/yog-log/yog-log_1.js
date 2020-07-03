var YLogger = require('yog-log');
var logger = YLogger.getLogger(); //默认通过domain获取，单独使用请传递config
logger.log('warning','msg');//or logger.warning('msg');
