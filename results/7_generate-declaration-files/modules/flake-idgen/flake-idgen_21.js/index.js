var FlakeId = require('flake-idgen')

var flakeIdGen1 = new FlakeId();
var flakeIdGen2 = new FlakeId({ datacenter: 9, worker: 7 });

console.info(flakeIdGen1.next());
console.info(flakeIdGen2.next());
