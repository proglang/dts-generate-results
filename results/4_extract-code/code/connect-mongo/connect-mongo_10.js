const MongoStore = require('connect-mongo')(express);

app.use(express.session({
    secret: 'foo',
    store: new MongoStore(options)
}));
