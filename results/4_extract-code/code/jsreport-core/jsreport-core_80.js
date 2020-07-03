const jsreport = require('jsreport-core')({
	templatingEngines: { allowedModules: '*' }
})

jsreport.init().then(() => {
  return jsreport.render({
		template: {
			content: '<script>{{jquery}}</script>',
			helpers: `
				function jquery() {
					const fs = require('fs')
					const path = require('path')

					return fs.readFileSync(path.join(__rootDirectory, 'jquery.js'))
				}
			`,
			engine: 'handlebars',
			recipe: 'chrome-pdf'
		}
	})
})
