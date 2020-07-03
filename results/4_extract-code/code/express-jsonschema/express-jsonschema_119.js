var express = require('express');
var app = express();
var validate = require('express-jsonschema').validate;

// Address, to be embedded on Person
var AddressSchema = {
    "id": "/SimpleAddress",
    "type": "object",
    "properties": {
        "street": {"type": "string"},
        "zip": {"type": "string"},
        "city": {"type": "string"},
        "state": {"type": "string"},
        "country": {"type": "string"}
    }
};

// Person
var PersonSchema = {
    "id": "/SimplePerson",
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "address": {"$ref": "/SimpleAddress"}
    }
};

app.post('/person/', validate({body: PersonSchema}, [AddressSchema]), function(req, res) {
    // application code
});
