const util = require('util');
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('swagger-express-validator');
const schema = require('./api-schema.json');

const server = express();
server.use(bodyParser.json());

const opts = {
  schema, // Swagger schema
  preserveResponseContentType: false, // Do not override responses for validation errors to always be JSON, default is true
  returnRequestErrors: true, // Include list of request validation errors with response, default is false
  returnResponseErrors: true, // Include list of response validation errors with response, default is false
  validateRequest: true,
  validateResponse: true,
  requestValidationFn: (req, data, errors) => {
    console.log(`failed request validation: ${req.method} ${req.originalUrl}\n ${util.inspect(errors)}`)
  },
  responseValidationFn: (req, data, errors) => {
    console.log(`failed response validation: ${req.method} ${req.originalUrl}\n ${util.inspect(errors)}`)
  },
};
server.use(validator(opts));

server.use('/status', (req, res) => {
  res.json({
    status: 'OK',
  })
});
server.use((err, req, res, next) => {
  res.status(500);
  res.json(err);
});

return server.listen(3000);

