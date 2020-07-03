var HTTPError = createCustomError('HTTPError', null, function (message, code) {
    var http = require('http');
    // Set custom properties when thrown based on additional arguments
    this.code = code;
    this.status = http.STATUS_CODES[code];
    // We can override the default message logic if desired:
    this.message = message;
});
var error = new HTTPError('You do not have permission', 403);
console.log(error, [error.code, error.status]);
// result: HTTPError: You do not have permission [ 403, "Forbidden" ]
