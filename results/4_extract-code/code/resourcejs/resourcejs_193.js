var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Resource = require('../Resource');

// Create the app.
var app = express();

// Use the body parser.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Parent model
var Parent = mongoose.model('Parent', new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}));

// Child model.
var Child = mongoose.model('Child', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parent',
    index: true,
    required: true
  }
}));

// The parent REST interface.
Resource(app, '', 'parent', Parent).rest();

// The child REST interface.
Resource(app, '/parent/:parentId', 'child', Child).rest({

  // Add a before handler to include filter and parent information.
  before: function(req, res, next) {
    req.body.parent = req.params.parentId;
    req.modelQuery = this.model.where('parent', req.params.parentId);
    next();
  }
});
