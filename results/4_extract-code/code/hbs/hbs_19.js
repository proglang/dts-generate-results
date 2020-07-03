var hbs = require('hbs');
var express = require('express');

var app = express();
hbs.localsAsTemplateData(app);

app.locals.foo = "bar";
