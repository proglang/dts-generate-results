const ganache = require("ganache-core");
const server = ganache.server();
server.listen(port, function(err, blockchain) {...});
