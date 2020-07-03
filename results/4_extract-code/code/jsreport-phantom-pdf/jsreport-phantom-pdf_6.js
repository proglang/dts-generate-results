var jsreport = require('jsreport-core')()
jsreport.use(require('jsreport-phantom-pdf')({ strategy: 'phantom-server' }))
