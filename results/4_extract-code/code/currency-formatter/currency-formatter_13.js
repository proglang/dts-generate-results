var currencyFormatter = require('currency-formatter');

currencyFormatter.format(1000000, { locale: 'en-US' });
// => '$1,000,000.00'

currencyFormatter.format(1000000, { locale: 'en-GB' });
// => '£1,000,000.00'

currencyFormatter.format(1000000, { locale: 'GB' });
// => '£1,000,000.00'

currencyFormatter.format(1000000, { locale: 'de-DE' });
// => '1.000.000,00 €'

currencyFormatter.format(1000000, { locale: 'nl-NL' });
// => '€1.000.000,00'
