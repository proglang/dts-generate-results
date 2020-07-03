var lixslt = require('libxslt');

var stylesheet = libxslt.parse(stylesheetString);

var result = stylesheet.apply(documentString);

