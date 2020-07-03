var request = require('requestretry').defaults({ json: true, retryStrategy: myRetryStrategy });
