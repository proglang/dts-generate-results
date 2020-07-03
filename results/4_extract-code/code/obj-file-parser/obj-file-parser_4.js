const OBJFile = require('obj-file-parser');

const fileContents =
  'v 0 0 0 \n' +
  'v 0 1 0 \n' +
  'v 1 0 0 \n' +
  'f 1 2 3';

const objFile = new OBJFile(fileContents);

const output = objFile.parse(); // see description below
