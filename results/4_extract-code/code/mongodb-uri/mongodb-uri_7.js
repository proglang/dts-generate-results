var mongodbUri = require('mongodb-uri');
var uri = mongodbUri.format(
        {
            username: 'user:n@me',
            password: 'p@ssword',
            hosts: [
                {
                    host: 'host',
                    port: 1234
                }
            ],
            database: 'd@tabase',
            options: {
                authSource: '@dmin'
            }
        }
);
console.log(uri);
