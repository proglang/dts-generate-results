var errorHandler = require('api-error-handler');

var api = new express.Router();
api.get('/users/:userid', function (req, res, next) {

});

api.use(errorHandler());

app.use('/api', api);
