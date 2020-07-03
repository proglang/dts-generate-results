var german = require('localized-countries')('de')
german.get('CH') // returns 'Schweiz'

var english = require('localized-countries')('en')
english.get('CH') // returns 'Switzerland'

var japanese = require('localized-countries')('ja')
japanese.get('CH') // returns '\u30b9\u30a4\u30b9'
