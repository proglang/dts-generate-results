var JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

new JSONAPIDeserializer().deserialize(jsonapi, function (err, users) {
  // `users` is...
});
