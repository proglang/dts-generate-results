const parseCurrency = require('parsecurrency');

const parsedCurrency = parseCurrency('$123,456.99USD');
// parsedCurrency =>
{
  "raw": "$123,456.99USD",
  "value": 123456.99,
  "integer": "123,456",
  "decimals": ".99",
  "currency": "USD",
  "symbol": "$",
  "decimalSeparator": ".",
  "groupSeparator": ","
}

