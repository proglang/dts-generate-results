const DocumentDBSession = require('documentdb-session');
const express = require('express');
const session = require('express-session');

// pass the express-session object to documentdb-session
const DocumentDBStore = DocumentDBSession(session);

// you could pass the express-session object when you require the module if you'd prefer:
// const DocumentDBStore = require('documentdb-session')(session);

const config = {
  host: `https://mydbaccount.documents.azure.com:443/`,
  key:  '8idtLLsiRJsKvgHLi...vgOJ9YXTTYK61LX15pobbmQ==',
  ttl:  28800 // expire document in 8 hours (in seconds)
};

const app = express();

app.use(session({
  cookie: {
    maxAge: 28800000, // expire cookie in 8 hours (in milliseconds),
  },
  resave: false,
  saveUninitialized: false,
  secret: 'mycookiesecret',
  store: new DocumentDBStore(config) // pass the DocumentDB session store to express-session
}));
