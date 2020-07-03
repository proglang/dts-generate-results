var express = require('express');
var app = express();
var validate = require('express-jsonschema').validate;
var bodyParser = require('body-parser');

// Create a json scehma
var StreetSchema = {
    type: 'object',
    properties: {
        number: {
            type: 'number',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
            required: true
            enum: ['Street', 'Avenue', 'Boulevard']
        }
    }
}

// This route validates req.body against the StreetSchema
app.post('/street/', validate({body: StreetSchema}), function(req, res) {
    // At this point req.body has been validated and you can
    // begin to execute your application code
});

/*
    Setup a general error handler for JsonSchemaValidation errors.
    As mentioned before, how one handles an invalid request depends on their application.
    You can easily create some express error middleware
    (http://expressjs.com/guide/error-handling.html) to customize how your
    application behaves. When the express-jsonschema.validate middleware finds invalid data it
    passes an instance of JsonSchemaValidation to the next middleware.
    Below is an example of a general JsonSchemaValidation error handler for
    an application.
*/
app.use(function(err, req, res, next) {

    var responseData;

    if (err.name === 'JsonSchemaValidation') {
        // Log the error however you please
        console.log(err.message);
        // logs "express-jsonschema: Invalid data found"

        // Set a bad request http response status or whatever you want
        res.status(400);

        // Format the response body however you want
        responseData = {
           statusText: 'Bad Request',
           jsonSchemaValidation: true,
           validations: err.validations  // All of your validation information
        };

        // Take into account the content type if your app serves various content types
        if (req.xhr || req.get('Content-Type') === 'application/json') {
            res.json(responseData);
        } else {
            // If this is an html request then you should probably have
            // some type of Bad Request html template to respond with
            res.render('badrequestTemplate', responseData);
        }
    } else {
        // pass error to next error middleware handler
        next(err);
    }
});

app.use(bodyParser.json());
app.listen(8080, function(){
    console.log('app is running')
});
