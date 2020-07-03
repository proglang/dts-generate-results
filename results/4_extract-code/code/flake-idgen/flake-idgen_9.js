var FlakeId = require('flake-idgen');
var flakeIdGen = new FlakeId();

flakeIdGen.next(function (err, id) {
     console.info(id);
})

flakeIdGen.next(function (err, id) {
     console.info(id);
})
