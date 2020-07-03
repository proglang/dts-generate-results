var JSONAPIError = require('jsonapi-serializer').Error;

var errors = new JSONAPIError({
  code: '123',
  source: { 'pointer': '/data/attributes/first-name' },
  title: 'Value is too short',
  detail: 'First name must contain at least three characters.'
});

// `errors` here are JSON API compliant.
