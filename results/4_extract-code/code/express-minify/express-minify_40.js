var minify = require('express-minify');

var myErrorHandler = function (errorInfo, callback) {
  console.log(errorInfo);
  // below is the default implementation (minify.Minifier.defaultErrorHandler)
  if (errorInfo.stage === 'compile') {
    callback(errorInfo.error, JSON.stringify(errorInfo.error));
    return;
  }
  callback(errorInfo.error, errorInfo.body);
};

app.use(minify({ errorHandler: myErrorHandler }));
