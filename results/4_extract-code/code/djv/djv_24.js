const djv = require('djv');
const env = djv({
  version: 'draft-06', // use json-schema draft-06
  formats: { /*...*/ }, // custom formats @see #addFormat
  errorHandler: () => { /*...*/ }, // custom error handler, @see #setErrorHandler
});
