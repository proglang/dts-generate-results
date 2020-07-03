const jsreport = require('jsreport-core')({
	templatingEngines: { allowedModules: ['moment'] }
})

// or unblock everything

const jsreport = require('jsreport-core')({
	templatingEngines: { allowedModules: '*' }
})
