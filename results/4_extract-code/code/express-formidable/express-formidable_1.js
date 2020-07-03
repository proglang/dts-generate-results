const express = require('express');
const formidableMiddleware = require('express-formidable');

var app = express();

app.use(formidableMiddleware());

app.post('/upload', (req, res) => {
  req.fields; // contains non-file fields
  req.files; // contains files
});
