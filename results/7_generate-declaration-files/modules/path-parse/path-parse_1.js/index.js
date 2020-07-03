var pathParse = require('path-parse');

pathParse('/home/user/dir/file.txt');
//=> {
//       root : "/",
//       dir : "/home/user/dir",
//       base : "file.txt",
//       ext : ".txt",
//       name : "file"
//   }
