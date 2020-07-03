var FlakeId = require('flake-idgen');
var flakeIdGen = new FlakeId();

console.log(flakeIdGen.next());
console.log(flakeIdGen.next());
console.log(flakeIdGen.next());
