var FlakeId = require('flake-idgen')

var flakeIdGen1 = new FlakeId();
var flakeIdGen2 = new FlakeId({ epoch: 1300000000000 });

console.info(flakeIdGen1.next());
console.info(flakeIdGen2.next());
