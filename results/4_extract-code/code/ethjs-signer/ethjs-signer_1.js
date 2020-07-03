const HttpProvider = require('ethjs-provider-http');
const Eth = require('ethjs-query');
const eth = new Eth(new HttpProvider('http://localhost:8545'));
const sign = require('ethjs-signer').sign;
const BN = require('bignumber.js');

const address = '0x0F6af8F8D7AAD198a7607C96fb74Ffa02C5eD86B';
const privateKey = '0xecbcd9838f7f2afa6e809df8d7cdae69aa5dfc14d563ee98e97effd3f6a652f2';

eth.getTransactionCount(address).then((nonce) => {
  eth.sendRawTransaction(sign({
    to: '0xce31a19193d4b23f4e9d6163d7247243bAF801c3',
    value: 300000,
    gas: new BN('43092000'),
    // when sending a raw transactions it's necessary to set the gas price, currently 0.00000002 ETH
    gasPrice: new BN('20000000000'),
    nonce: nonce,
  }, privateKey)).then((txHash) => {
    console.log('Transaction Hash', txHash);
  });
});
