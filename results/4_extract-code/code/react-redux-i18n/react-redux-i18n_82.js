var I18n = require('react-redux-i18n').I18n;

I18n.t('application.title'); // => returns 'Toffe app met i18n!' for locale 'nl'
I18n.t('application.hello', {name: 'Aad'}); // => returns 'Hallo, Aad!' for locale 'nl'
I18n.t('export', {count: 0}); // => returns 'Niks te exporteren' for locale 'nl'
I18n.t('application.weird_key'); // => returns 'Weird key' as translation is missing
I18n.t('application', {name: 'Aad'}); // => returns {hello: "Hallo, Aad!", title: "Toffe app met i18n!"} for locale 'nl'

I18n.l(1385856000000, { dateFormat: 'date.long' }); // => returns '1 december 2013' for locale 'nl'
I18n.l(Math.PI, { maximumFractionDigits: 2 }); // => returns '3,14' for locale 'nl'
