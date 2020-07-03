// Untested (Let me know in gitter if this doesn't work.)
var createServer = require("auto-sni");
var hapi         = require("hapi");
var server       = new hapi.Server();
var secureServer = createServer({ email: ..., domains: ..., agreeTos: true });

server.connection({ listener: secureServer, autoListen: false, tls: true });
