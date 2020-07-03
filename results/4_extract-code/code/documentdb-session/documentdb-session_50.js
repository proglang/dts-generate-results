const session = require('express-session');
const DocumentDBStore = require('documentdb-session')(session);
const store = new DocumentDBStore({ /* config options */ });
