var coinbase = require('coinbase');
var client   = new coinbase.Client({'apiKey': mykey, 'apiSecret': mysecret});

client.getAccount('<ACCOUNT ID>', function(err, account) {
  console.log('bal: ' + account.balance.amount + ' currency: ' + account.balance.currency);
});
