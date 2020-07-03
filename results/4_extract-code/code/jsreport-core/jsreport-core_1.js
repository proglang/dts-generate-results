const jsreport = require('jsreport-core')()

jsreport.init().then(() => {
	return jsreport.render({
		template: {
			content: '<h1>Hello {{foo}}</h1>',
			engine: 'handlebars',
			recipe: 'chrome-pdf'
		},
		data: {
			foo: "world"
		}
	}).then((resp) => {
	 	// prints pdf with headline Hello world
		console.log(resp.content.toString())
 	});
}).catch((e) => {
	console.error(e)
})
