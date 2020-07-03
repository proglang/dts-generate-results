var OBJFile = require('obj-file-parser');

var fileContents =
  'v 0 0 0 \n' +
  'v 0 1 0 \n' +
  'v 1 0 0 \n' +
  'f 1 2 3';

var objFile = new OBJFile(fileContents);

var output = objFile.parse(); // see description below
