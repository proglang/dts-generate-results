var JSONAPISerializer = require('jsonapi-serializer').Serializer;

var UserSerializer = new JSONAPISerializer('users', {
  attributes: ['firstName', 'lastName']
});

var users = UserSerializer.serialize(data);

// `users` here are JSON API compliant.
