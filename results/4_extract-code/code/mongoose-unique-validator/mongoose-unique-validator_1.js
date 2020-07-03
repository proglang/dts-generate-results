var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var mySchema = mongoose.Schema(/* put your schema definition here */);
mySchema.plugin(uniqueValidator);
