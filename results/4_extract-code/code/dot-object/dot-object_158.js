var dot = require('dot-object');

var source = {
  "id": 1,
  "contact": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "example@gmail.com",
  }
}

var recipe = {
  'id': 'nr',
  'contact.firstName': 'name.first',
  'contact.lastName': 'name.last',
  'contact.email': 'email'
};

var tgt = {}
dot.transform(recipe, source, tgt);

// OR

var tgt = dot.transform(recipe, source);

console.log(tgt);
{
  "nr": 1,
  "name": {
    "first": "John",
    "last": "Doe"
  },
  "email": "example@gmail.com"
}
