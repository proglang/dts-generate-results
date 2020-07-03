// CHANGE from 1.x: need to pass in mongoose instance
var deepPopulate = require('mongoose-deep-populate')(mongoose);
PostSchema.plugin(deepPopulate, options /* more on options below */);
