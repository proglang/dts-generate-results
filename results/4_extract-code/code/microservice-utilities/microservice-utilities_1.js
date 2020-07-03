const { RequestLogger } = require('microservice-utilities');
const defaultConfiguration = { logFunction: console.log, extendErrorObjects: true };

let requestLogger = new RequestLogger(defaultConfiguration);
requestLogger.log({ title: 'Message title', level: 'WARN', error: 'Error'});
