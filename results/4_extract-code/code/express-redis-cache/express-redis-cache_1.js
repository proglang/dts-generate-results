var app = express();
var cache = require('express-redis-cache')();

// replace
app.get('/',
  function (req, res)  { ... });

// by
app.get('/',
  cache.route(),
  function (req, res)  { ... });
