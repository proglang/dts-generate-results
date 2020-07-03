  var winston = require('winston');
  
  require('winston-dynamodb').DynamoDB;
  
  winston.add(winston.transports.DynamoDB, options);
