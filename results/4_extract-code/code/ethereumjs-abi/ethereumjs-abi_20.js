var abi = require('ethereumjs-abi')

// returns the encoded binary (as a Buffer) data to be sent
var encoded = abi.simpleEncode("balanceOf(address):(uint256)", "0x0000000000000000000000000000000000000000")

// returns the decoded array of arguments
var decoded = abi.simpleDecode("balanceOf(address):(uint256)", data)
