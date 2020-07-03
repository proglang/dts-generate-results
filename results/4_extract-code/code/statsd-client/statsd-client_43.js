var SDC = require('statsd-client');
var app = express();
	sdc = new SDC({...});

app.use(sdc.helpers.getExpressMiddleware('somePrefix'));
// or
app.get('/',
	sdc.helpers.getExpressMiddleware('otherPrefix'),
	function (req, res, next) { req.pipe(res); });

app.listen(3000);
