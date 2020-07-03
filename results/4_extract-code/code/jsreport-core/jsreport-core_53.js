const jsreport = require('jsreport-core')({
	templatingEngines: { strategy: 'in-process' }
})

jsreport.init().then(() => {
 	return jsreport.render({
		template: {
			content: '<h1>Hello {{foo}}</h1>',
			helpers: { foo: () => { return 'world' } },
			engine: 'handlebars',
			recipe: 'chrome-pdf'
		}
	})
})
