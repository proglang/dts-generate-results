var rest, mime, errorCode, client;

rest = require('rest'),
mime = require('rest/interceptor/mime');
errorCode = require('rest/interceptor/errorCode');

client = rest.wrap(mime)
             .wrap(errorCode, { code: 500 });
client({ path: '/data.json' }).then(
    function(response) {
        console.log('response: ', response);
    },
    function(response) {
        console.error('response error: ', response);
    }
);
