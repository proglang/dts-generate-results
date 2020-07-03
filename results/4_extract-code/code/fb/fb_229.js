var url = require('url');

var urlToParse = 'http://yoururl.com/callback?code=.....#_=_';
var result = url.parse(urlToParse, true);
if(result.query.error) {
    if(result.query.error_description) {
        console.log(result.query.error_description);
    } else {
        console.log(result.query.error);
    }
    return;
} else if (!result.query.code) {
    console.log('not a oauth callback');
    return;
}

var code = result.query.code;
