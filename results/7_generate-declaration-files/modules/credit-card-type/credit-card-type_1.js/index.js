var creditCardType = require('credit-card-type');

var visaCards = creditCardType('4111');
console.log(visaCards[0].type);  // 'visa'

var ambiguousCards = creditCardType('6');
console.log(ambiguousCards.length);       // 3
console.log(ambiguousCards[0].niceType);  // 'Discover'
console.log(ambiguousCards[1].niceType);  // 'UnionPay'
console.log(ambiguousCards[2].niceType);  // 'Maestro'
