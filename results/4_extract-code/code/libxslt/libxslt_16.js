var lixslt = require('libxslt');
var libxmljs = libxslt.libxmljs;

var stylesheetObj = libxmljs.parseXml(stylesheetString, { nocdata: true });
var stylesheet = libxslt.parse(stylesheetObj);

var document = libxmljs.parseXml(documentString);
stylesheet.apply(document, function(err, result){
  // result is now a libxmljs document containing the result of the transformation
});

