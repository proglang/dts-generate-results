var intformat = require('biguint-format')
    , idGen = new (require('flake-idgen'))

for (var i = 0; i < 5; i++) {
	console.info(intformat(idGen.next(), 'bin', { groupsize: 4 }));
};
