var express = require('express'),
    expressSanitized = require('express-sanitized');

app.use(express.bodyParser());
app.use(expressSanitized()); // this line follows express.bodyParser()

