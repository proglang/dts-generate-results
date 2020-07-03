const loadware = require('loadware');

let router = require('express').Router();
router.get('/', (req, res) => { res.send('Hello there'); });

let middlewares = loadware(
  'body-parser',
  (req, res, next) => { next(); },
  './middle/whatever.js',
  router
);
