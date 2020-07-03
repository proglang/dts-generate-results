var express = require('express');
var app = express.createServer();

app.use(require('browserify')({
    require : [ 'jquery-browserify', 'jquery-mousewheel' ]
}));
