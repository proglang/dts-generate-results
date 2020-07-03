var json = require('comment-json');
var fs = require('fs');
var obj = json.parse(fs.readFileSync('package.json').toString());
console.log(obj);
// ->
// {
//   "// name": [["// package name"]],
//   name: "comment-json"
// }

json.stringify(obj, null, 2); 
// Will be the same as package.json,
// which will be very useful if we use a json file to store configurations.
