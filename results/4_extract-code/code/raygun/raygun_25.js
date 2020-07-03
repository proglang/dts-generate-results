var raygun = require('raygun');
var raygunClient = new raygun.Client().init({ apiKey: 'your API key', filters: ['password', 'creditcard'] });
