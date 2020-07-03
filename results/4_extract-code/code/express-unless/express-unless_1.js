var unless = require('express-unless');


var static = express.static(__dirname + '/public');
static.unless = unless;

app.use(static.unless({ method: 'OPTIONS' }));
