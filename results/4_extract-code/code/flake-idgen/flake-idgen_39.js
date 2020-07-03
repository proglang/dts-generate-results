var intformat = require('biguint-format')
    , FlakeId = require('flake-idgen')

var flakeIdGen1 = new FlakeId();
var flakeIdGen2 = new FlakeId({ epoch: 1300000000000 });

console.info(intformat(flakeIdGen1.next(), 'dec'));
console.info(intformat(flakeIdGen1.next(), 'hex', { prefix: '0x' }));

console.info(intformat(flakeIdGen2.next(), 'dec'));
console.info(intformat(flakeIdGen2.next(), 'hex', { prefix: '0x' }));
