var session = require('express-session');
var FileStore = require('session-file-store')(session);

var fileStoreOptions = {};

app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: 'keyboard cat'
}));
