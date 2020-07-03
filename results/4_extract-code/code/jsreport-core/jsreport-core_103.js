const jsreport = require('jsreport-core')({...})
jsreport.use(require('jsreport-phantom-pdf')())
jsreport.use(require('jsreport-jsrender')())
jsreport.init()
