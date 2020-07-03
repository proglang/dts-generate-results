var mydbConfig = require('./config');

var Migration = require('mongration').Migration;
var mydbMigration = new Migration(mydbConfig);
