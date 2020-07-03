var libxslt = require('libxslt');

libxslt.parse(stylesheetString, function(err, stylesheet){
  var params = {
    MyParam: 'my value'
  };

  // 'params' parameter is optional
  stylesheet.apply(documentString, params, function(err, result){
    // err contains any error from parsing the document or applying the stylesheet
    // result is a string containing the result of the transformation
  });  
});
