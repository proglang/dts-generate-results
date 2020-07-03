const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

var options = {
  swaggerUrl: 'http://petstore.swagger.io/v2/swagger.json'
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
