const coins = require('coinlist');

// coins is an array of coin objects:
[
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin'
  },
  {
    id: 'litecoin',
    symbol: 'LTC',
    name: 'Litecoin'
  },
  ...
]

// There is a useful helper method to search the array for a ticker symbol:
const btc = coins.get('BTC');
{
  id: 1,
  symbol: 'BTC',
  name: 'Bitcoin'
}

// Or get a specific property
coins.get('BTC', 'name');
// "Bitcoin"

// You can still use all the usual array methods on coins:
coins.map(coin => coin.name);
[
  'BTC',
  'LTC',
  ...
]

// Alternatively, you can load the raw JSON file:
const coinsJson = require('coinlist/src/coins.json');
