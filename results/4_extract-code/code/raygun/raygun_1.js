var raygun = require('raygun');
var raygunClient = new raygun.Client().init({ apiKey: 'your API key' });
raygunClient.send(theError);

// For express, at the end of the middleware definitions, just above app.listen:
app.use(raygunClient.expressHandler);
