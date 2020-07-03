var log = require('console-log-level')({ level: 'info' })

log.trace('a') // will not do anything
log.debug('b') // will not do anything
log.info('c')  // will output 'c\n' on STDOUT
log.warn('d')  // will output 'd\n' on STDERR
log.error('e') // will output 'e\n' on STDERR
log.fatal('f') // will output 'f\n' on STDERR
