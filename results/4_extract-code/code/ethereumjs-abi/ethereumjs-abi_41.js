var abi = require('ethereumjs-abi')
var BN = require('bn.js')

abi.soliditySHA3(
    [ "address", "address", "uint", "uint" ],
    [ new BN("43989fb883ba8111221e89123897538475893837", 16), 0, 10000, 1448075779 ]
).toString('hex')
