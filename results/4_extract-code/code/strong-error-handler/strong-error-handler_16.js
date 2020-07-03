const http = require('http');
const writeErrorToResponse = require('strong-error-handler')
  .writeErrorToResponse;
const errHandlingOptions = {debug: process.env.NODE_ENV === 'development'}

http
  .createServer((req, res) => {
    if (errShouldBeThrown) {
      writeErrorToResponse(
        new Error('something went wrong'),
        req,
        res,
        errHandlingOptions,
      );
    }
  })
  .listen(3000);
