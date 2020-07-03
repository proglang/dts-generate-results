const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  ...
  basePath: '/', // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ['./example/v2/routes*.js'], // <-- not in the definition, but in the options
};

const swaggerSpec = swaggerJSDoc(options);
