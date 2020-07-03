var rest = require('rest');

rest('/').then(function(response) {
    console.log('response: ', response);
});
