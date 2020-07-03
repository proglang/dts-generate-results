var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var winston = require('winston');
var app = express();
winston.level = 'debug';
app.use(sassMiddleware({
    /* Options */
    src: __dirname,
    dest: path.join(__dirname, 'public'),
    debug: true,
    log: function (severity, key, value) { winston.log(severity, 'node-sass-middleware   %s : %s', key, value); }
}));
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.
app.use(express.static(path.join(__dirname, 'public')));
