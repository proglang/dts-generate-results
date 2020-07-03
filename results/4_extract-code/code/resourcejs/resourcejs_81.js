var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var resource = require('resourcejs');

// Create the app.
var app = express();

// Use the body parser.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Create the Schema
var productSchema = new Schema({
  name: String,
  price: Number,
  stock: Number
});

//Create the model
var productModel = mongoose.model('product', productSchema);

