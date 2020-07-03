const { createLogger } = require('browser-bunyan');
const logger = createLogger({ name: 'my-logger' });
logger.debug('hi on debug');
