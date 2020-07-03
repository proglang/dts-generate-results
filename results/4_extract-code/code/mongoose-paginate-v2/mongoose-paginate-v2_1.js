var mongoose         = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

var mySchema = new mongoose.Schema({ 
    /* your schema definition */ 
});

mySchema.plugin(mongoosePaginate);

var myModel = mongoose.model('SampleModel',  mySchema); 

myModel.paginate().then({}) // Usage
