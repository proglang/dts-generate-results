var createServer = require("auto-sni");
var rill         = require("rill");
var app          = rill();

app.get("/test", ...);

createServer({ email: ..., domains: ..., agreeTos: true }, app.handler());
