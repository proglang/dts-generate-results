// Untested (Let me know in gitter if this doesn't work.)
var createServer = require("auto-sni");
var restify      = require("restify");
var app          = restify.createServer({ name: 'myapp', version: '1.0.0' });

app.get("/test", ...);

createServer({ email: ..., domains: ..., agreeTos: true }, app.server);
