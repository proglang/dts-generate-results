const status = require('http-status');
// Print "Internal Server Error"
console.info(status[500]);
// Print 500
console.info(status.INTERNAL_SERVER_ERROR);
// Print "INTERNAL_SERVER_ERROR"
console.info(status['500_CODE']);
// Print "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
console.info(status['500_MESSAGE']);
