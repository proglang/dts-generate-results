var dot = require('dot-object');

var row = {
  'id': 2,
  'contact.name.first': 'John',
  'contact.name.last': 'Doe',
  'contact.email': 'example@gmail.com',
  'contact.info.about.me': 'classified',
  'devices[0]': 'mobile',
  'devices[1]': 'laptop',
  'some.other.things.0': 'this',
  'some.other.things.1': 'that'
};

dot.object(row);

console.log(row);

{
  "id": 2,
  "contact": {
    "name": {
      "first": "John",
      "last": "Doe"
    },
    "email": "example@gmail.com",
    "info": {
      "about": {
        "me": "classified"
      }
    }
  },
  "devices": [
    "mobile",
    "laptop"
  ],
  "some": {
    "other": {
      "things": [
        "this",
        "that"
      ]
    }
  }
}
