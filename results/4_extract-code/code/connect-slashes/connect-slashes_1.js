var connect = require("connect")
  , slashes = require("connect-slashes");

connect() // or express()
  .use(connect.static())
  .use(slashes()) // must come after static middleware!
  .listen(3000);
