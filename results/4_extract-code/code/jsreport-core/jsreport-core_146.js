const winston = require('winston')
const jsreport = require('jsreport-core')()
jsreport.logger.add(winston.transports.Console, { level: 'info' })
