var JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

new JSONAPIDeserializer({
  addresses: {
    valueForRelationship: function (relationship) {
      return {
        id: relationship.id,
        'address-line1': '406 Madison Court',
        'zip-code': '49426',
        country: 'USA'
      };
    }
  }
}).deserialize(jsonapi, function (err, users) {
  // `users` is...
});
