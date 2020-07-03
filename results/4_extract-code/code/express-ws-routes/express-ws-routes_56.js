// Extend express using a specific module name, instead of 'express'
var app = require('express-ws-routes')({
	moduleName: 'my-custom-express' // i.e. require('my-custom-express')
});
