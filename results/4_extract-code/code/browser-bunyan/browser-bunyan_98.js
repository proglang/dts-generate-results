const { createLogger } = require('browser-bunyan');
const log = createLogger({name: 'myapp'});
log.info('hi');
log.warn({lang: 'fr'}, 'au revoir');
