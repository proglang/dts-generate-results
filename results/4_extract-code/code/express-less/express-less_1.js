var express = require('express'),
    expressLess = require('express-less');

var app = express();
app.use('/less-css', expressLess(__dirname + '/less'));
