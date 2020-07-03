let ejs = require('ejs');
let myFileLoad = function (filePath) {
  return 'myFileLoad: ' + fs.readFileSync(filePath);
};

ejs.fileLoader = myFileLoad;
